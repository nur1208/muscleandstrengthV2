import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";

export const getArticlesData = async () => {
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

  const mainWrapper = "#main-wrap";
  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  const articlesData = [];
  let $ = cheerio.load(html.toString());

  const h2s = $("h2", $(mainWrapper)).toArray();
  const articlesWrappers = $(
    "div.base-content-grid",
    $(mainWrapper)
  ).toArray();
  for (let index = 0; index < h2s.length; index++) {
    // for (let index = 0; index < 1; index++) {
    const articleGroup = {};
    const h2 = h2s[index];
    const articleWrapper = articlesWrappers[index];
    articleGroup.title = $(h2).text().trim();
    const articles = $(".grid-x", $(articleWrapper))
      .children()
      .toArray();
    const articlesArray = [];
    for (let index = 0; index < articles.length; index++) {
      const article = {};
      const articleInnerWrapper = articles[index];
      article.href = $(
        ".node-title > a",
        $(articleInnerWrapper)
      ).attr("href");
      article.imgUrl = $(
        ".node-image > a > img",
        $(articleInnerWrapper)
      ).attr("data-src");

      article.imgAlt = $(
        ".node-image > a > img",
        $(articleInnerWrapper)
      ).attr("alt");

      article.title = $(
        ".node-title > a",
        $(articleInnerWrapper)
      )
        .text()
        .trim();

      article.shortSummary = $(
        ".node-short-summary",
        $(articleInnerWrapper)
      )
        .text()
        .trim();

      let readsNum = $(
        ".node-meta > span:nth-child(1)",
        $(articleInnerWrapper)
      )
        .text()
        .trim()
        .split(" ")[0]
        .toLocaleUpperCase();

      if (readsNum.includes("K")) {
        const justNem = readsNum.replace("K", "");
        readsNum = (Number(justNem) * 1000).toFixed(2);
      }

      if (readsNum.includes("M")) {
        const justNem = readsNum.replace("M", "");
        readsNum = (Number(justNem) * 1000000).toFixed(2);
      }
      article.reads = Number(readsNum);

      article.comments = Number(
        $(
          ".node-meta > span:nth-child(2)",
          $(articleInnerWrapper)
        )
          .text()
          .trim()
          .split(" ")[0]
      );

      article.type = $(
        ".view-content-button button",
        $(articleInnerWrapper)
      )
        .text()
        .split(" ")[1]
        .trim();

      if ($(".node-meta.workout", $(articleInnerWrapper))) {
        article.isWorkout = true;
        article.level = $(
          ".node-meta > span:nth-child(1)",
          $(articleInnerWrapper)
        )
          .text()
          .trim();

        article.forGender = $(
          ".node-meta > span:nth-child(2)",
          $(articleInnerWrapper)
        )
          .text()
          .trim();

        article.time = $(
          ".node-meta > span:nth-child(3)",
          $(articleInnerWrapper)
        )
          .text()
          .trim();
      }
      articlesArray.push(article);
    }
    articleGroup.articles = articlesArray;
    articlesData.push(articleGroup);
    // console.log(articleGroup);
  }

  fs.writeFile(
    mainDataJson,
    JSON.stringify(articlesData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  //   await browser.close();
};

getArticlesData();
