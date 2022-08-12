import { getFeaturesListData } from "./featuresListData/script.js";
import { getProductData } from "./productData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  const url =
    "https://www.muscleandstrength.com/store/omega-3.html";
  await getProductData(url);
  // await getFeaturesListData();
  console.log("DONE scraping ✔");
};

main();
