import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import {
  getHref,
  getHtml,
  getIconId,
  getImgUrl,
  getText,
} from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";

export const getMainPageCategory = async () => {
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

  const mainSelector = ".mainpage-category-list .cell";

  const data = $(mainSelector)
    .toArray()
    .map((cell) => ({
      href: getHref($("a", $(cell))),
      imgUrl: getImgUrl($("img", $(cell))),
      categoryName: getText($(".category-name", $(cell))),
    }));

  for (let index = 0; index < data.length; index++) {
    const { href } = data[index];

    const html = await getHtml(
      `https://www.muscleandstrength.com${href}`,
      ".taxonomy-description",
      timeout,
      null,
      true
    );
    let $ = cheerio.load(html.toString());
    data[index].decs = getText($(".taxonomy-description"));
  }
  fs.writeFile(
    mainDataJson,
    JSON.stringify(data),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
getMainPageCategory();
