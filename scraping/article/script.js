import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import {
  getAttr,
  getHref,
  getHtml,
  getIconId,
  getNumberFromString,
  getText,
} from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";
import GenericEndpoints from "../services/generic.js";
import { categoryArticle } from "./data.js";

const isScraped = async (url, type) => {
  const { data } = await GenericEndpoints.get(
    `articles?sourceUrl=${url}`
  );
  if (data.results) {
    const foundProduct = data.data.doc[0];
    const body = {};
    if (type && !foundProduct.type.includes(type)) {
      body.type = { operation: "push", value: type };
    }

    try {
      await GenericEndpoints.put(
        `articles/${foundProduct._id}`,
        body
      );
      console.log("article update successfully");
    } catch (error) {
      console.log(error);
      throw "error";
    }
  }

  return data.results;
};
const timeout = 1000 * 60 * 2;
const waitForSelector = "#main-wrap";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
//   console.log("directory-name 👉️", __dirname);
const mainPageHtml = `${__dirname}/pageHtml.html`;
const mainDataJson = `${__dirname}/data.json`;

export const getArticleData = async (url, type) => {
  if (await isScraped(url, type))
    return console.log("This Article scraped");
  console.log(url);

  const html = await getHtml(
    url,
    waitForSelector,
    timeout,
    null,
    true
  );

  // fs.writeFile(mainPageHtml, html, function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  // read the html body from the file system (this is very faster then reading it from the internet)
  // const html = await promisify(fs.readFile)(mainPageHtml);

  let $ = cheerio.load(html.toString());

  const articleData = {};
  articleData.sourceUrl = url;
  articleData.title = getText($("div.node-header > h1"));
  if (type) articleData.type = [type];
  articleData.imgUrl = [];
  articleData.imgUrl.push(
    getAttr($(".node-header .feature-image source"), "srcset")
  );
  articleData.imgUrl.push(
    getAttr($(".node-header .feature-image img"), "src")
  );

  articleData.imgAlt = getAttr(
    $(".node-header .feature-image img"),
    "alt"
  );

  articleData.shortSummary = getText($(".node-summary"));
  articleData.reads = getNumberFromString(
    $(".node-header .count")
  );
  articleData.comments = getNumberFromString(
    $(
      "#comments > div.grid-x.comments-header > div:nth-child(1) > h5"
    )
  );

  articleData.category = $(".node-header .categories a")
    .toArray()
    .map((a) => getText($(a)));

  articleData.isWorkout =
    articleData.category.includes("Workouts");

  if ($(".node-body").html().includes("node-stats-block")) {
    $(".node-body .node-stats-block li")
      .toArray()
      .map((li) => {
        if (getText($(".row-label", $(li))) === "Training Level")
          articleData.level = getText($(".field-items", $(li)));

        if (getText($(".row-label", $(li))) === "Target Gender")
          articleData.forGender = getText($(li)).includes("Male")
            ? "Male"
            : "Female";

        if (getText($(".row-label", $(li))) === "Days Per Week")
          articleData.time = getText($(".field-items", $(li)));
      });

    // articleData.statesBody = $(".node-body .node-stats-block")
    //   .children()
    //   .toArray()
    //   .map((child) => {
    //     const item = {};
    //     item.type = child.name;

    //     if ($(child).children().length)
    //       item.children = $(child)
    //         .children()
    //         .toArray()
    //         .map((subChild) => {
    //           return {
    //             type: subChild.name,
    //             text: getText($(subChild)),
    //           };
    //         });
    //     else item.text = getText($(child));
    //     console.log(item);
    //   });
    // articleData.statesBody = $(".node-body .node-stats-block")
    //   .toString()
    //   .trim();
  }
  articleData.body = $(".node-body .content").toString().trim();

  // console.log(articleData);
  try {
    console.log("Saving the product...⌛");

    await GenericEndpoints.post("articles", articleData);

    console.log("Product Saved in DB successfully ✔");
  } catch (error) {
    console.log("There was an error while saving a product ❌");
    console.error(error);
  }
  // fs.writeFile(
  //   mainDataJson,
  //   JSON.stringify(articleData),
  //   function (err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   }
  // );
};

const scrapByHref = async (articlesHref, option) => {
  const { url, type } = option;
  for (let index = 0; index < articlesHref.length; index++) {
    const href = articlesHref[index];
    const currentArticle = url
      ? `article ${index + 1} ${
          url.split("/")[url.split("/").length - 1]
        }`
      : `article ${index + 1} ${type}`;
    console.log(`start scripting  ${currentArticle}... ⌛`);

    await getArticleData(
      href.includes("www.muscleandstrength.com")
        ? href
        : `https://www.muscleandstrength.com/${href}`,
      type
    );
    console.log(`DONE SCRIPTING ${currentArticle}... ✅`);
  }
};
const articlesByCategory = async (url) => {
  const html = await getHtml(
    url,
    waitForSelector,
    timeout,
    null,
    true
  );

  let $ = cheerio.load(html.toString());

  const articlesHref = $("#mnsview-list .cell")
    .toArray()
    .map((cell) => getHref($("a", $(cell))));

  await scrapByHref(articlesHref, { url });
};

const articlesByMultipleCategory = async (
  list,
  startIndex = 0
) => {
  for (let index = startIndex; index < list.length; index++) {
    const { categoryName, href } = list[index];
    console.log(`start scraping ${categoryName} category⌛`);
    await articlesByCategory(
      `https://cdn.muscleandstrength.com${href}`
    );
    console.log(
      `DONE scraping ${categoryName} category ${index}✅`
    );
  }
};
const articlesByType = async (type) => {
  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);
  let $ = cheerio.load(html.toString());
  const articlesHref = $(
    "#block-system-main > div > div:nth-child(9) .cell"
  )
    .toArray()
    .map((cell) => getHref($("a", $(cell))));

  await scrapByHref(articlesHref, {
    type,
  });

  //
};
(async () => {
  console.log("start scripting... ⌛");

  // await getArticleData(
  //   "https://www.muscleandstrength.com/workouts/6-day-powerbuilding-split-meal-plan"
  // );

  await articlesByMultipleCategory(categoryArticle, 11);
  // await articlesByType("Trending Nutrition Articles");
  console.log("DONE SCRIPTING... ✅");
})();
