import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import {
  getHref,
  getHtml,
  getIconId,
  getText,
} from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";
import { scrapBanner } from "../banner/scrapBanner.js";

const scrapSubCategory = async (href, timeout) => {
  const html = await getHtml(
    href,
    "article.col2-container",
    timeout,
    null,
    true
  );
  const $ = cheerio.load(html);

  return $("#catalog-listing ul li")
    .toArray()
    .map((child) => getHref($("a.image-wrap", $(child))));
};

export const scrapProductsByCategory = async (url) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;
  const timeout = 1000 * 60;
  // const url =
  //   "https://www.muscleandstrength.com/store/customer/account/create/";
  const waitForSelector = "#main-wrapper";

  // const html = await getHtml(url, waitForSelector, timeout);

  // fs.writeFile(mainPageHtml, html, function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  let $ = cheerio.load(html.toString());

  const categoryData = {};

  if ($(".before-content").html().includes("banner-carousel")) {
    console.log("has banner");

    categoryData.bannerData = scrapBanner(
      $(".before-content .banner-carousel a").toString()
    );
  }

  categoryData.title = url.split("/")[url.split("/").length - 1];
  categoryData.title = categoryData.title.split(".")[0];
  categoryData.subCategories = $(
    "#subcategories > div.grid-x.grid-margin-x"
  )
    .children()
    .toArray()
    .map((child) => ({
      title: getText($(child)),
      href: getHref($(child)),
    }));

  for (
    let index = 0;
    index < categoryData.subCategories.length;
    // index < 1;
    index++
  ) {
    const { href, title } = categoryData.subCategories[index];

    categoryData.subCategories[index].products =
      await scrapSubCategory(href);
    console.log(`Done scraping subCategory ${title} - ${index}`);
  }

  fs.writeFile(
    mainDataJson,
    JSON.stringify(categoryData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
