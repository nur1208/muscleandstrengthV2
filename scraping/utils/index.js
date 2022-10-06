export * from "./getHtml.js";

export const getRating = (element) =>
  Number(element.attr("style").split(":")[1].replace("%;", ""));

export const getImgUrl = (element) =>
  element.attr("data-src").trim();

export const getAttr = (element, attr) =>
  element.attr(attr).trim();

export const getNumberFromString = (element) => {
  let readsNum = element
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
  return Number(readsNum);
};
export const getText = (element, rep, to) =>
  element
    .text()
    .replace(rep, to ? to : "")
    .trim();
export const getIconId = (element) =>
  element.attr("href").split("#")[1].trim();

export const getHref = (element) => element.attr("href").trim();
