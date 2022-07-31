import { getBannerData } from "./banner/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getBannerData();
  console.log("DONE scraping ✔");
};

main();
