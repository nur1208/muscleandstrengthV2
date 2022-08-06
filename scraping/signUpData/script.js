import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { getHtml } from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";

export const getSignUpData = async () => {
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

  const mainSelector = "form  div.fl-wrap";
  const signUpData = [];
  const fields = $(mainSelector).toArray();

  for (let index = 0; index < fields.length; index++) {
    let item = {};
    const field = fields[index];

    if ($(field).attr("class").includes("fl-wrap-input")) {
      item = scrapFiled($("input", $(field)));
      item.fieldType = "INPUT";
    }

    if ($(field).attr("class").includes("fl-wrap-select")) {
      item = scrapFiled($("select", $(field)));
      item.options = [];
      const options = $("option", $(field)).toArray();
      for (let index = 0; index < options.length; index++) {
        const option = options[index];
        item.options.push($(option).text().trim());
      }
      item.fieldType = "SELECT";
    }
    item.required = $(field)
      .attr("class")
      .includes("fl-is-required");

    signUpData.push(item);
  }
  fs.writeFile(
    mainDataJson,
    JSON.stringify(signUpData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
