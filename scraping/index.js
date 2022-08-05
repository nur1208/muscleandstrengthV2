import { getPerksFooterData } from "./perksFooter/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getPerksFooterData();
  console.log("DONE scraping ✔");
};

main();
