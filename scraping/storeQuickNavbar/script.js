import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";

export const getStoreQuickNavbarData = async () => {
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

  const mainWrapper = "#quick-links-carousel > div";

  let $ = cheerio.load(html.toString());

  const as = $(mainWrapper).children().toArray();
  const quickNavbarData = [];
  for (let index = 0; index < as.length; index++) {
    const item = {};
    const a = as[index];
    item.href = $(a).attr("href").trim();
    const iconStyle = $("span", $(a)).attr("class").trim();
    if (iconStyle.includes("icon"))
      item.iconStyle = iconStyle.split(" ")[1].trim();
    // console.log(iconStyle.split(" ")[1].trim());
    else item.iconStyle = iconStyle;

    item.title = $(a).text().trim();
    quickNavbarData.push(item);
    // console.log(item);
  }
  fs.writeFile(
    mainDataJson,
    JSON.stringify(quickNavbarData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  // await browser.close();
};
