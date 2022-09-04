export * from "./getHtml.js";

export const getRating = (element) =>
  Number(element.attr("style").split(":")[1].replace("%;", ""));

export const getImgUrl = (element) =>
  element.attr("data-src").trim();

export const getText = (element, rep, to) =>
  element
    .text()
    .replace(rep, to ? to : "")
    .trim();
export const getIconId = (element) =>
  element.attr("href").split("#")[1].trim();

export const getHref = (element) => element.attr("href").trim();
