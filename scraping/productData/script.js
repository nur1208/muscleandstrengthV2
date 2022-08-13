import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { getHtml } from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";
import { scrapProductHeader } from "./scrapProductHeader.js";
import { scrapDeals } from "./scrapDeals.js";
import { scrapBuyingOptions } from "./scrapBuyingOptions.js";
import { scrapNutrition } from "./scrapNutrition.js";
import { scrapProductInfo } from "./scrapProductInfo.js";
import { scrapReviewsOverall } from "./scrapReviewsOverall.js";
import { scrapReviews } from "./scrapReviews.js";

const mainSelectorNutrition =
  "#main-wrap .aside .product-nutrition";
const closeModalSelector =
  " body > div.ui-dialog.shipping-modal.ui-widget.ui-widget-content.ui-front.ui-draggable.ui-resizable > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > button";
const customAdditional = async (page) => {
  await page.waitForTimeout(1000 * 10);
  try {
    await page.click(closeModalSelector);
  } catch (error) {
    console.log("modal didn't open");
  }

  await page.waitForTimeout(1000 * 3);
  await page.click(`${mainSelectorNutrition} .sod_select`);
  await page.waitForTimeout(1000 * 3);
  try {
    await page.click(
      `${mainSelectorNutrition} .sod_select .sod_list span:nth-child(2)`
    );
  } catch (error) {
    console.log("doesn't have more than one option");
  }

  await page.waitForTimeout(1000 * 10);
};

export const getProductData = async (url) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;

  const mainPageHtml2 = `${__dirname}/pageHtml2.html`;
  const mainDataJson2 = `${__dirname}/data2.json`;

  const timeout = 1000 * 60;

  const waitForSelector = "#main-wrap";

  // const html = await getHtml(
  //   url,
  //   waitForSelector,
  //   timeout,
  //   customAdditional
  // );

  // fs.writeFile(mainPageHtml2, html, function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml2);

  let $ = cheerio.load(html.toString());

  const mainSelectorProductHeader =
    " #main-wrap .product-header";
  let productData = {};
  const headerData = scrapProductHeader(
    $(mainSelectorProductHeader).toString()
  );
  productData = { ...productData, ...headerData };

  const mainSelectorDeals = " #main-wrap .deals-coupons-section";
  const deals = scrapDeals($(mainSelectorDeals).toString());
  productData.deals = deals;

  const mainSelectorBuyingOptions =
    "#main-wrap .aside .product-shop .group-wrap";

  const buyingOptions = scrapBuyingOptions(
    $(mainSelectorBuyingOptions).toString()
  );

  productData.buyingOptions = buyingOptions;

  const nutrition = scrapNutrition(
    $(mainSelectorNutrition).toString()
  );

  productData.nutrition = nutrition;

  const mainSelectorProductInfo =
    "#main-wrap .main-content.continued .std";

  const productInfo = scrapProductInfo(
    $(mainSelectorProductInfo).toString()
  );
  productData.productInfo = productInfo;

  const mainSelectorRO =
    "#main-wrap .main-content.continued .product-reviews-section";

  const reviewsOverall = scrapReviewsOverall(
    $(mainSelectorRO).toString()
  );
  productData.reviewsOverall = reviewsOverall;

  const mainSelectorReviews =
    "#main-wrap .main-content.continued .allReviews .review-wrapper";

  const reviews = scrapReviews(
    $(mainSelectorReviews).toString()
  );

  productData.reviews = reviews;
  fs.writeFile(
    mainDataJson2,
    JSON.stringify(productData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
