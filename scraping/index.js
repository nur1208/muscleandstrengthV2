import { getInPageNavData } from "./InPageNav/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getInPageNavData();
  console.log("DONE scraping ✔");
};

main();
