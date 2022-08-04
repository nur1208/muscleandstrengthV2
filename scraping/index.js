import { getBrandsData } from "./Brands/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getBrandsData();
  console.log("DONE scraping ✔");
};

main();
