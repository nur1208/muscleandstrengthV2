import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { getHtml } from "../utils/index.js";

export const getFeaturesListData = async (url) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  //   console.log("directory-name 👉️", __dirname);
  const mainPageHtml = `${__dirname}/pageHtml.html`;
  const mainDataJson = `${__dirname}/data.json`;
  const timeout = 1000 * 60;

  const waitForSelector = "#main-wrap";

  // const html = await getHtml(url, waitForSelector, timeout);

  // fs.writeFile(mainPageHtml, html, function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  // read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);

  let $ = cheerio.load(html.toString());

  const mainSelector = " #main-wrap .features-list-wrap";
  let featuresListData = $("ul.features-list", $(mainSelector))
    .children()
    .toArray()
    .map((li, index) => {
      const title = [];
      title[1] = $(".new-line", $(li)).text().trim();
      title[0] = $(li).text().replace(title[1], "").trim();
      const iconID = $(".inner-icon use", $(li))
        .attr("href")
        .split("#")[1]
        .trim();
      const content = {};
      const contentSelector = `div.features-list-wrap > div > div:nth-child(${
        index + 1
      })`;
      content.imgUrl = $("img", $(contentSelector))
        .attr("data-src")
        .trim();

      content.title = $(
        ".features-list-lightbox-title",
        $(contentSelector)
      )
        .text()
        .trim();

      content.p = $("p", $(contentSelector))
        .toArray()
        .map((p) => $(p).text().trim());
      return { title, iconID, content };
    });

  fs.writeFile(
    mainDataJson,
    JSON.stringify(featuresListData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
