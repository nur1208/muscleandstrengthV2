import { getLoginData } from "./loginData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getLoginData();
  console.log("DONE scraping ✔");
};

main();
