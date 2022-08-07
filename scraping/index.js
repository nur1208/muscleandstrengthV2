import { getProductData } from "./productData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  const url =
    "https://www.muscleandstrength.com/store/perfect-sports-apex-grass-fed-whey-protein.html";
  await getProductData(url);
  console.log("DONE scraping ✔");
};

main();
