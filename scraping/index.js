import { getSignUpData } from "./signUpData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getSignUpData();
  console.log("DONE scraping ✔");
};

main();
