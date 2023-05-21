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
  getImgUrl,
  getNumberFromString,
  getText,
} from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";
import GenericEndpoints from "../services/generic.js";
import {
  categoryArticle,
  categoryDiet,
  exercisesCategory,
} from "./data.js";

const updateArticle = async (id, body) => {
  try {
    await GenericEndpoints.put(`articles/${id}`, body);
    console.log("article update successfully");
  } catch (error) {
    console.log(error);
    throw "error";
  }
};
const isScraped = async (
  url,
  { type, extraImage, checkHasHeaderVideo }
) => {
  const { data } = await GenericEndpoints.get(
    `articles?sourceUrl=${url}`
  );
  if (data.results) {
    const foundProduct = data.data.doc[0];
    const body = {};
    if (type && !foundProduct.type.includes(type)) {
      body.type = { operation: "push", value: type };
    }

    // if extraImage defined
    if (extraImage) {
      // if imgUrl array has elements and the first element is null
      if (
        foundProduct.imgUrl.length &&
        !foundProduct.imgUrl[0]
      ) {
        body.imgUrl = [extraImage, ...foundProduct.imgUrl];
      }
      // if imgUrl array empty
      else if (!foundProduct.imgUrl.length) {
        body.imgUrl = [extraImage];
      }
    }

    if (checkHasHeaderVideo && !body.hasHeaderVideo) {
      const html = await getHtml(
        url,
        waitForSelector,
        timeout,
        null,
        true
      );
      let $ = cheerio.load(html.toString());
      try {
        body.hasHeaderVideo = getAttr(
          $(".node-header .video-wrap iframe"),
          "src"
        );
      } catch (error) {
        console.log("has no header video");
      }
    }

    // try {
    //   await GenericEndpoints.put(
    //     `articles/${foundProduct._id}`,
    //    c
    //   );
    //   console.log("article update successfully");
    // } catch (error) {
    //   console.log(error);
    //   throw "error";
    // }
    await updateArticle(foundProduct._id, body);
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

export const getArticleData = async (
  url,
  { type, extraImage, checkHasHeaderVideo }
) => {
  if (
    await isScraped(url, {
      type,
      extraImage,
      checkHasHeaderVideo,
    })
  )
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

  // if ImgUrl array is empty or it is not empty and first and second elements are not null
  if (
    !articleData.imgUrl.length ||
    !(
      articleData.imgUrl.length &&
      articleData.imgUrl[0] &&
      articleData.imgUrl[1]
    )
  ) {
    articleData.imgUrl = [extraImage];
  }
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
  const { url, type, articlesImgs } = option;
  for (let index = 0; index < articlesHref.length; index++) {
    const href = articlesHref[index];
    const currentArticle = url
      ? `article ${index + 1} ${
          url.split("/")[url.split("/").length - 1]
        }`
      : `article ${index + 1} ${type}`;
    console.log(`start scripting  ${currentArticle}... ⌛`);

    const options = { type, extraImage: articlesImgs[index] };
    await getArticleData(
      href.includes("www.muscleandstrength.com")
        ? href
        : `https://www.muscleandstrength.com${href}`,
      options
    );
    console.log(`DONE SCRIPTING ${currentArticle}... ✅`);
  }
};
const articlesByCategory = async (url) => {
  console.log({ url });

  const html = await getHtml(
    url,
    waitForSelector,
    timeout,
    null,
    true
  );

  let $ = cheerio.load(html.toString());

  const articlesHref = $("#mnsview-list .cell.small-12")
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
      `https://www.muscleandstrength.com${href}`
    );
    console.log(
      `DONE scraping ${categoryName} category ${index}✅`
    );
  }
};
const articlesByType = async (type, selector) => {
  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);
  let $ = cheerio.load(html.toString());
  const articlesHref = $(selector)
    .toArray()
    .map((cell) => getHref($("a", $(cell))));

  const articlesImgs = $(selector)
    .toArray()
    .map((cell) => getImgUrl($("img", $(cell))));

  await scrapByHref(articlesHref, {
    type,
    articlesImgs,
  });

  //
};
const checkArrayEleExitInArray2 = async (
  array1,
  array2,
  { name, id }
) => {
  for (let index = 0; index < array1.length; index++) {
    const ele = array1[index];
    if (!array2.includes(ele)) {
      console.log("found not exist element in array2");
      const body = {};
      body[name] = { operation: "push", value: ele };
      await updateArticle(id, body);
    }
  }
};
export const removeDuplicateArticle = async (page = 1) => {
  const { data } = await GenericEndpoints.get(
    `articles?limit=500&&page${page}`
  );

  for (let index = 0; index < data.data.doc.length; index++) {
    const { sourceUrl } = data.data.doc[index];
    const dataSplit = sourceUrl.split("/");

    const { data: dataS } = await GenericEndpoints.get(
      `articles?q=${`${dataSplit[dataSplit.length - 2]}/${
        dataSplit[dataSplit.length - 1]
      }`}`
    );
    if (dataS.results > 1) {
      console.log("found duplicate article");

      for (
        let index = 1;
        index < dataS.data.doc.length;
        index++
      ) {
        const { category, type, _id } = dataS.data.doc[index];
        const {
          category: categoryF,
          type: typeF,
          _id: idF,
        } = dataS.data.doc[0];
        // first move all type and category to the first element
        // before deleting the element
        await checkArrayEleExitInArray2(category, categoryF, {
          name: "category",
          id: idF,
        });
        await checkArrayEleExitInArray2(type, typeF, {
          name: "type",
          id: idF,
        });

        // delete the duplicate element
        try {
          await GenericEndpoints.delete(`articles`, _id);
          console.log(
            `article with id {${_id}} deleted successfully`
          );
        } catch (error) {
          console.log(error);
          throw "error";
        }
      }
    }
  }
};
// (async () => {
//   console.log("start scripting... ⌛");

//   // await getArticleData(
//   //   "https://www.muscleandstrength.com/workouts/6-day-powerbuilding-split-meal-plan"
//   // );
//   //#mnsview-list > div.view.view-exercise-term-list.view-id-exercise_term_list.view-display-id-block_1.view-dom-id-2e3704aceda762217e21c0f3fd4e56ba > div > div:nth-child(1)
//   // await articlesByMultipleCategory(exercisesCategory, 21);
//   await articlesByType(
//     "Most Viewed Exercise Guides",
//     "#main-wrap > div:nth-child(9) .cell"
//   );
//   console.log("DONE SCRIPTING... ✅");
// })();
