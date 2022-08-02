import { getStoreTopBannerData } from "./storeTopBanner/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getStoreTopBannerData();
  console.log("DONE scraping ✔");
};

main();
