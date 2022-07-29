import puppeteer from "puppeteer";
import cheerio from "cheerio";
import fs from "fs";
import { promisify } from "util";
import { mainWrapper } from "./selectors.js";
import path from "path";
import { fileURLToPath } from "url";

export const getNavbarData = async () => {
  const __filename = fileURLToPath(import.meta.url);

  // 👇️ "/home/john/Desktop/javascript"
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
  //   await page.goto("https://www.muscleandstrength.com/", {
  //     timeout,
  //   });

  //   await page.waitForTimeout(1000 * 5);
  //   await page.waitForSelector(mainWrapper, { timeout });

  //   const html = await page.evaluate(
  //     () => document.body.innerHTML
  //   );

  //   fs.writeFile(mainPageHtml, html, function (err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   });

  //   read the html body from the file system (this is very faster then reading it from the internet)
  const html = await promisify(fs.readFile)(mainPageHtml);
  const navbarData = [];
  let $ = cheerio.load(html.toString());
  const lis = $(mainWrapper).children().toArray();
  for (let index = 0; index < lis.length; index++) {
    //   for (let index = 0; index < 1; index++) {
    const ls = lis[index];
    const item = {};
    item.navbarItemTitle = $($("a", $(ls).html()).html())
      .text()
      .replace("›", "")
      .trim();

    item.navbarItemHref = $("a", $(ls).html()).attr("href");

    item.hasSubmenu = $(ls).hasClass("has-submenu");
    const itemSections = $(
      "div.submenu > ul",
      $(ls).html()
    ).toArray();

    const groups = [];
    for (let index = 0; index < itemSections.length; index++) {
      // for (let index = 0; index < 1; index++) {
      const groupItem = {};
      const section = itemSections[index];
      groupItem.groupHasSubSubmenu = $(section).hasClass(
        "link-list-submenu"
      );

      groupItem.groupTitle = $(
        $("div.link-list-title", $(section).html())[0]
      ).text();

      const itemsOfSubItem = [];
      const subLiss = $(
        `div.submenu > ul:nth-child(${index + 1 + 2}) > li`,
        $(ls).html()
      ).toArray();

      for (let index = 0; index < subLiss.length; index++) {
        //   for (let index = 0; index < 1; index++) {
        const subItem = {};
        const subLi = subLiss[index];
        // console.log($(subLi).hasClass("has-sub-submenu"));
        const hasSubSubmenu = $(subLi).hasClass(
          "has-sub-submenu"
        );
        subItem.hasSubSubmenu = hasSubSubmenu;
        const itemsOfSubSubItem = [];
        if (hasSubSubmenu) {
          subItem.subItemTitle = $(
            "a.sub-submenu-button",
            $(subLi).html()
          )
            .text()
            .trim();
          subItem.subItemHref = $(
            "a.sub-submenu-button",
            $(subLi).html()
          ).attr("href");

          subItem.subSubMainTitle = $(
            "div.view-all-link",
            $(subLi).html()
          )
            .text()
            .split(" ")[0]
            .trim();

          subItem.subSubMainHref = $(
            "div.view-all-link > a",
            $(subLi).html()
          ).attr("href");
          subItem.subSubGroupTitle = $(
            "div.link-list-title",
            $(subLi).html()
          )
            .text()
            .trim();
          const subSubLis = $("li", $(subLi).html()).toArray();
          for (
            let index = 0;
            index < subSubLis.length;
            index++
          ) {
            const subSubLi = subSubLis[index];
            itemsOfSubSubItem.push({
              suSubItemTitle: $("a", $(subSubLi)).text(),
              subSubItemHref: $("a", $(subSubLi)).attr("href"),
            });
          }
        }
        //   itemsOfSubItem.push(
        //     $("a.sub-submenu-button", $(subLi).html()).text()
        //   );
        //   console.log(
        //     $("a.sub-submenu-button", $(subLi).html()).text()
        //   );
        else {
          subItem.subItemTitle = $("a", $(subLi).html())
            .text()
            .trim();

          subItem.subItemHref = $("a", $(subLi).html()).attr(
            "href"
          );
        }
        subItem.itemsOfSubSubItem = itemsOfSubSubItem;
        itemsOfSubItem.push(subItem);
        // else console.log($("a", $(subLi).html()).text());
      }

      groupItem.itemsOfSubItem = itemsOfSubItem;
      groups.push(groupItem);
    }
    item.groups = groups;
    navbarData.push(item);
  }

  //   console.log(navbarData);

  fs.writeFile(
    mainDataJson,
    JSON.stringify(navbarData),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );

  //   await browser.close();
};
