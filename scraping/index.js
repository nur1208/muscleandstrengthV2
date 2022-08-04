import { getMoreOnData } from "./moreOn/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getMoreOnData();
  console.log("DONE scraping ✔");
};

main();
