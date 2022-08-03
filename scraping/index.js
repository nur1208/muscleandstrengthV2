import { getTopDealProductsData } from "./topDealProducts/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getTopDealProductsData();
  console.log("DONE scraping ✔");
};

main();
