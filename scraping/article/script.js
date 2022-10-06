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

const isScraped = async (url) => {
  const { data } = await GenericEndpoints.get(
    `articles?sourceUrl=${url}`
  );

  return data.results;
};
const timeout = 1000 * 60;
const waitForSelector = "#main-wrap";

export const getArticleData = async (url) => {
  if (await isScraped(url))
    return console.log("This Article scraped");
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;

  const html = await getHtml(
    url,
    waitForSelector,
    timeout,
    null,
    true
  );

  fs.writeFile(mainPageHtml, html, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  // read the html body from the file system (this is very faster then reading it from the internet)
  // const html = await promisify(fs.readFile)(mainPageHtml);

  let $ = cheerio.load(html.toString());

  const articleData = {};
  articleData.sourceUrl = url;
  articleData.title = getText($("div.node-header > h1"));
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

  for (let index = 0; index < articlesHref.length; index++) {
    const href = articlesHref[index];
    const currentArticle = `article ${index + 1} ${
      url.split("/")[url.split("/").length - 1]
    }`;
    console.log(`start scripting  ${currentArticle}... ⌛`);

    await getArticleData(
      `https://www.muscleandstrength.com/${href}`
    );
    console.log(`DONE SCRIPTING ${currentArticle}... ✅`);
  }
};
(async () => {
  console.log("start scripting... ⌛");

  // await getArticleData(
  //   "https://www.muscleandstrength.com/workouts/6-day-powerbuilding-split-meal-plan"
  // );

  await articlesByCategory(
    "https://www.muscleandstrength.com/workouts/men"
  );
  console.log("DONE SCRIPTING... ✅");
})();
