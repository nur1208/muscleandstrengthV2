import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";

export const getFooterData = async () => {
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

  const mainWrapperSelector = "footer";
  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  const footerData = {};
  let $ = cheerio.load(html.toString());
  const mainFooterSelector = $("footer .footer-main");

  const mainFooterCells = $(
    ".cell",
    $(mainFooterSelector)
  ).toArray();
  const mainFooterArray = [];
  for (let index = 0; index < mainFooterCells.length; index++) {
    const mainFooterItem = {};
    const mainCell = mainFooterCells[index];
    const title = $("h6", $(mainCell)).text().trim();
    mainFooterItem.title = title;
    const lis = $("ul > li", $(mainCell)).toArray();
    const mainFooterItems = [];
    for (let index = 0; index < lis.length; index++) {
      const li = lis[index];
      if (title !== "Follow")
        mainFooterItems.push({
          title: $("a", $(li)).text().trim(),
          href: $("a", $(li)).attr("href").trim(),
        });
      else
        mainFooterItems.push({
          iconId: $("use", $(li))
            .attr("href")
            .split("#")[1]
            .trim(),
          href: $("a", $(li)).attr("href").trim(),
        });
    }
    mainFooterItem.items = mainFooterItems;
    mainFooterArray.push(mainFooterItem);
  }
  footerData.mainFooterData = mainFooterArray;

  const bottomFooterPs = $(
    ".footer-bottom--inner > p:nth-child(2)",
    $(mainWrapperSelector)
  )
    .children()
    .toArray();
  const bottomFooterArray = [];
  for (let index = 0; index < bottomFooterPs.length; index++) {
    const a = bottomFooterPs[index];
    bottomFooterArray.push({
      title: $(a).text().trim(),
      href: $(a).attr("href").trim(),
    });
    // console.log();
  }

  footerData.bottomFooterData = bottomFooterArray;

  fs.writeFile(
    mainDataJson,
    JSON.stringify(footerData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  //   await browser.close();
};
