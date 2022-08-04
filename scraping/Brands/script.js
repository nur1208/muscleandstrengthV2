import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { scrapBanner } from "../banner/scrapBanner.js";

export const getBrandsData = async () => {
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

  const mainSelector = "#top-brands li";

  const lis = $(mainSelector).toArray();

  const brandsData = [];
  for (let index = 0; index < lis.length; index++) {
    const item = {};
    const li = lis[index];

    item.href = $("a", $(li)).attr("href").trim();
    item.srcset = $("source", $(li)).attr("srcset").trim();
    item.imgUrl = $("img", $(li)).attr("src").trim();
    item.alt = $("img", $(li)).attr("alt").trim();
    brandsData.push(item);
  }

  fs.writeFile(
    mainDataJson,
    JSON.stringify(brandsData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  // await browser.close();
};
