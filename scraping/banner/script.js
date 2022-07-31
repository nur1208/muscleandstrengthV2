import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";

export const getBannerData = async () => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;
  const timeout = 1000 * 60;
  //   const browser = await puppeteer.launch({
  //     headless: false,
  //     executablePath:
  //       "C:/Program Files/Google/Chrome/Application/chrome.exe",
  //   });
  //   const page = await browser.newPage();
  //   await page.goto("https://www.imdb.com/trailers/", { timeout });
  //   await page.waitForSelector("div.ipc-poster-card", { timeout });

  //   const html = await page.evaluate(
  //     () => document.body.innerHTML
  //   );

  //   fs.writeFile(mainPageHtml, html, function (err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   });

  const mainWrapper = "a";
  const sourceSelector = "source";
  const imgSelector = "img";
  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  const bannerData = {};
  let $ = cheerio.load(html.toString());
  bannerData.href = $(mainWrapper).attr("href");
  bannerData.isSale =
    $(mainWrapper).attr("class")?.trim() === "sale-banner";
  bannerData.backgroundColor = $(mainWrapper)
    .attr("style")
    ?.split(":")[1]
    ?.trim();
  bannerData.widthSource = $(sourceSelector).attr("width");
  bannerData.heightSource = $(sourceSelector).attr("height");
  const splittedSrcset = $(sourceSelector)
    .attr("srcset")
    .split("/");
  bannerData.srcset =
    splittedSrcset[splittedSrcset.length - 1].trim();
  bannerData.media = $(sourceSelector).attr("media");

  bannerData.widthImg = $(imgSelector).attr("width");
  bannerData.heightImg = $(imgSelector).attr("height");

  const splittedSrc = $(imgSelector).attr("src").split("/");
  bannerData.src = splittedSrc[splittedSrc.length - 1].trim();
  bannerData.alt = $(imgSelector).attr("alt");

  fs.writeFile(
    mainDataJson,
    JSON.stringify(bannerData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  //   await browser.close();
};
