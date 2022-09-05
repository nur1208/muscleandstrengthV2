import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { getHtml, getIconId, getText } from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";

export const scrapCategories = async () => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;
  const timeout = 1000 * 60;
  const url =
    "https://www.muscleandstrength.com/store/customer/account/create/";
  const waitForSelector = "article.content";

  // const html = await getHtml(url, waitForSelector, timeout);

  // fs.writeFile(mainPageHtml, html, function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  let $ = cheerio.load(html.toString());
  const mainSelector =
    "#main-wrapper > article.content > div.main-content.grid-container.full > div.section-categories.grid-x.grid-margin-x";

  const data = $(mainSelector)
    .children()
    .toArray()
    .map((child) => {
      return {
        title: getText($("h2 a.main-cat", $(child))),
        items: $("li", $(child))
          .toArray()
          .map((li) => getText($(li))),
        img: {
          srcsetMobile: $($(".img-wrap source", $(child))[0])
            .attr("srcset")
            .trim(),
          srcsetDesktop: $($(".img-wrap source", $(child))[1])
            .attr("srcset")
            .trim(),
          src: $(".img-wrap img", $(child)).attr("src").trim(),
        },
      };
    });
  fs.writeFile(
    mainDataJson,
    JSON.stringify(data),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};

(async () => {
  console.log("start scraping... ⌛");

  await scrapCategories();

  console.log("DONE scraping... ✅");
})();
