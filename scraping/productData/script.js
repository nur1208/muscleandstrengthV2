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

  // const html = await getHtml(url, waitForSelector, timeout);

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

  // console.log(productData);

  fs.writeFile(
    mainDataJson2,
    JSON.stringify(productData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
