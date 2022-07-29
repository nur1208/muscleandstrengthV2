import { getNavbarData } from "./navbarData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getNavbarData();

  console.log("DONE scraping ✔");
};

main();
