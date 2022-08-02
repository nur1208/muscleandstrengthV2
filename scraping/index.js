import { getFooterData } from "./footerData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getFooterData();
  console.log("DONE scraping ✔");
};

main();
