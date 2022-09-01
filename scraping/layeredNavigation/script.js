import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { getHtml, getIconId, getText } from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";

export const getLayeredNavigationData = async () => {
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

  const mainSelector = "dl.narrow-by-list";
  const layeredNavigationData = $(mainSelector)
    .toArray()
    .map((element) => {
      const label = getText($("dt", $(element)));

      if (label.toLocaleLowerCase() === "price") {
        return {
          label,
          items: $("li", $(element))
            .toArray()
            .map((li, index) => {
              let price2;
              if (index !== 0)
                price2 = $(
                  $(".price", $(li)).toArray()[1]
                ).text();

              return {
                price: $($(".price", $(li)).toArray()[0]).text(),
                num: $("a", $(li))
                  .text()
                  .split("(")[1]
                  .replace(")", ""),
                price2,
              };
            }),
        };
      }
      if (label.toLocaleLowerCase() === "average rating")
        return { label };

      return {
        label,
        items: $("li", $(element))
          .toArray()
          .map((li) =>
            $("a", $(li)).html().split(`class="">`)[1].trim()
          ),
      };
    });

  fs.writeFile(
    mainDataJson,
    JSON.stringify(layeredNavigationData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
