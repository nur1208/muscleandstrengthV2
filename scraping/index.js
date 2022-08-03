import { getStoreQuickNavbarData } from "./storeQuickNavbar/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getStoreQuickNavbarData();
  console.log("DONE scraping ✔");
};

main();
