import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import { getHtml } from "../utils/index.js";
import { scrapFiled } from "../loginData/scrapFiled.js";

export const getSignUpBenefitData = async () => {
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

  const mainSelector = "article.content  div.benefit";
  const signUBenefitData = [];

  const benefits = $(mainSelector).toArray();
  for (let index = 0; index < benefits.length; index++) {
    const item = {};
    const benefit = benefits[index];

    item.iconId = $("use", $(benefit))
      .attr("href")
      .split("#")[1]
      .trim();

    item.text = $(".text", $(benefit)).text().trim();

    signUBenefitData.push(item);
  }

  fs.writeFile(
    mainDataJson,
    JSON.stringify(signUBenefitData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
