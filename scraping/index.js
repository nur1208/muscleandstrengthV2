import { getStoreProductsData } from "./topDealProducts/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getStoreProductsData("trending-products");
  console.log("DONE scraping ✔");
};

main();
