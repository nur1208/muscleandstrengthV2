import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { scrapProduct } from "./scrapProduct.js";

export const getStoreProductsData = async (type) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;
  const timeout = 1000 * 60;
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   executablePath:
  //     "C:/Program Files/Google/Chrome/Application/chrome.exe",
  // });
  // const page = await browser.newPage();
  // await page.goto("https://www.muscleandstrength.com/store/", {
  //   timeout,
  // });
  // await page.waitForSelector("#main-wrapper", { timeout });

  // const html = await page.evaluate(
  //   () => document.body.innerHTML
  // );

  // fs.writeFile(mainPageHtml, html, function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  let $ = cheerio.load(html.toString());

  const topDealsProductsData = [];

  const cells = $(`#${type} .cell`).toArray();
  for (let index = 0; index < cells.length; index++) {
    const cell = cells[index];
    const item = scrapProduct(cell);
    topDealsProductsData.push(item);
  }

  fs.writeFile(
    mainDataJson,
    JSON.stringify(topDealsProductsData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  // await browser.close();
};
