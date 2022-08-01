import { getArticlesData } from "./articlesData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getArticlesData();
  console.log("DONE scraping ✔");
};

main();
