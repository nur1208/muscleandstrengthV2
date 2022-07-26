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
import GenericEndpoints from "../services/generic.js";

const mainSelectorNutrition =
  "#main-wrap .aside .product-nutrition";
const closeModalSelector =
  " body > div.ui-dialog.shipping-modal.ui-widget.ui-widget-content.ui-front.ui-draggable.ui-resizable > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > button";
const mainSelectorReviews = ".allReviews .review-wrapper";

const customAdditionalReviews = async (page) => {
  // await page.waitForTimeout(1000 * 10);
  // try {
  //   await page.click(closeModalSelector);
  // } catch (error) {
  //   console.log("modal didn't open");
  // }

  const btnSelector = "#load-more-reviews";
  for (let index = 0; index < 6; index++) {
    await page.waitForTimeout(1000 * 3);
    try {
      await page.click(btnSelector);
    } catch (error) {
      console.log("doesn't have more reviews");
      break;
    }
    await page.waitForTimeout(1000 * 15);
  }
};
const customAdditional = async (page) => {
  await page.waitForTimeout(1000 * 10);
  try {
    await page.click(closeModalSelector);
  } catch (error) {
    console.log("modal didn't open");
  }

  await page.waitForTimeout(1000 * 3);
  try {
    await page.click(`${mainSelectorNutrition} .sod_select`);
  } catch (error) {
    console.log("doesn't have nutrition");
  }
  await page.waitForTimeout(1000 * 3);
  try {
    await page.click(
      `${mainSelectorNutrition} .sod_select .sod_list span:nth-child(2)`
    );
  } catch (error) {
    console.log("doesn't have more than one option");
  }

  await page.waitForTimeout(1000 * 10);
  await customAdditionalReviews(page);
};

export const getProductReviews = async (url, productId) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;

  const mainPageHtml2 = `${__dirname}/pageHtml2.html`;
  const mainDataJson2 = `${__dirname}/data2.json`;

  const timeout = 1000 * 60 * 3;

  const waitForSelector = "#main-wrap";

  const html = await getHtml(
    url,
    waitForSelector,
    timeout,
    customAdditionalReviews
  );

  let $ = cheerio.load(html.toString());
  let reviews = scrapReviews($(mainSelectorReviews).toString());
  console.log(reviews.length);
};

const isScraped = async (url, type, withCategory, rank) => {
  const { data } = await GenericEndpoints.get(
    `products?sourceUrl=${url}`
  );

  if (data.results) {
    const foundProduct = data.data.doc[0];

    const body = {};

    if (rank) {
      body.rank = rank;
      console.log("update rank");
    }
    if (
      foundProduct.buyingOptions.some(
        ({ cost }) => !cost.regularPrice
      )
    ) {
      const timeout = 1000 * 60 * 5;

      const waitForSelector = "#main-wrap";

      console.log("update the price 🛠🛠...");
      const html = await getHtml(
        url,
        waitForSelector,
        timeout,
        null,
        true
      );

      let $ = cheerio.load(html.toString());

      const mainSelectorBuyingOptions =
        "#main-wrap .aside .product-shop .group-wrap";

      body.buyingOptions = scrapBuyingOptions(
        $(mainSelectorBuyingOptions).toString()
      );
    }

    if (type && !foundProduct.type.includes(type)) {
      body.type = { operation: "push", value: type };
    }
    if (withCategory) {
      if (
        !foundProduct.category.includes(withCategory.category)
      ) {
        body.category = {
          operation: "push",
          value: withCategory.category,
        };
      }
      if (
        !foundProduct.subCategory.includes(
          withCategory.subCategory
        )
      ) {
        body.subCategory = {
          operation: "push",
          value: withCategory.subCategory,
        };
      }
    }
    try {
      await GenericEndpoints.put(
        `products/${foundProduct._id}`,
        body
      );
    } catch (error) {
      console.log(error);
      throw "error";
    }
  }

  return data.results;
};
export const getProductData = async (
  url,
  type,
  withCategory,
  rank
) => {
  if (await isScraped(url, type, withCategory, rank))
    return console.log("This product scraped");
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;

  const mainPageHtml2 = `${__dirname}/pageHtml2.html`;
  const mainDataJson2 = `${__dirname}/data2.json`;

  const timeout = 1000 * 60 * 3;

  const waitForSelector = "#main-wrap";

  const html = await getHtml(
    url,
    waitForSelector,
    timeout,
    customAdditional,
    true
  );
  // fs.writeFile(mainPageHtml2, html, function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  // read the html body from the file system (this is very faster then reading it from the internet)
  // const html = await promisify(fs.readFile)(mainPageHtml2);

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
  productData.productDetail = {};

  productData.productDetail.deals = deals;
  if (withCategory) {
    productData.category = [withCategory.category];
    productData.subCategory = [withCategory.subCategory];
  }

  productData.type = [type];
  productData.sourceUrl = url;
  const mainSelectorBuyingOptions =
    "#main-wrap .aside .product-shop .group-wrap";

  const buyingOptions = scrapBuyingOptions(
    $(mainSelectorBuyingOptions).toString()
  );

  productData.buyingOptions = buyingOptions;

  if (
    $("#main-wrap .aside").html().includes("product-nutrition")
  ) {
    const nutrition = scrapNutrition(
      $(mainSelectorNutrition).toString()
    );

    if (nutrition.length <= 3)
      productData.productDetail.nutrition = nutrition;
    else
      productData.productDetail.nutrition = [
        nutrition[0],
        nutrition[1],
        nutrition[2],
      ];
  } else {
    console.log("skip scrap nutrition");
  }

  const mainSelectorProductInfo = ".std";

  const productInfo = scrapProductInfo(
    $(mainSelectorProductInfo).toString()
  );
  productData.productDetail.productInfo = productInfo;

  const mainSelectorRO = ".product-reviews-section";

  const reviewsOverall = scrapReviewsOverall(
    $(mainSelectorRO).toString()
  );
  productData.productDetail.reviewsOverall = reviewsOverall;

  let reviews = scrapReviews($(mainSelectorReviews).toString());

  productData.reviews = reviews;

  if (rank) productData.rank = rank;
  console.log(reviews.length);

  try {
    console.log("Saving the product...⌛");

    const {
      data: {
        data: { newDoc },
      },
    } = await GenericEndpoints.post("products", productData);

    reviews = reviews.map((review) => ({
      ...review,
      productId: newDoc._id,
    }));
    await GenericEndpoints.post("reviews/many", reviews);

    console.log("Product Saved in DB successfully ✔");
  } catch (error) {
    console.log("There was an error while saving a product ❌");
    console.error(error);
  }
  // fs.writeFile(
  //   mainDataJson2,
  //   JSON.stringify(productData),
  //   function (err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   }
  // );
};
