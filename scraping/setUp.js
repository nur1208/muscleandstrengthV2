import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";

export const getTrailers = async () => {
  const mainPageHtml = "trailersContainer.html";
  const timeout = 1000 * 60;

  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("https://www.imdb.com/trailers/", { timeout });
  await page.waitForSelector("div.ipc-poster-card", { timeout });

  const html = await page.evaluate(() => document.body.innerHTML);

  fs.writeFile(mainPageHtml, html, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  // read the html body from the file system (this is very faster then reading it from the internet)
  //   const html = await promisify(fs.readFile)(mainPageHtml);

  let $ = cheerio.load(html.toString());
  console.log($);

  await browser.close();
};
