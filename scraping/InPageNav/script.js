import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";

export const getInPageNavData = async () => {
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

  const mainWrapper = "div.in-page-nav > div.inner > div.grid-x";
  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  const InPageNavData = [];
  let $ = cheerio.load(html.toString());
  const navItemsWrapper = $(mainWrapper).children().toArray();
  for (let index = 0; index < navItemsWrapper.length; index++) {
    const item = {};
    const navItem = navItemsWrapper[index];
    item.title = $("a", $(navItem)).text().trim();
    item.href = $("a", $(navItem)).attr("href");
    item.iconId = $("a > svg > use", $(navItem))
      .attr("href")
      .split("#")[1];

    InPageNavData.push(item);
  }

  fs.writeFile(
    mainDataJson,
    JSON.stringify(InPageNavData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  //   await browser.close();
};
