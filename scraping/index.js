import { getFeaturesListData } from "./featuresListData/script.js";
import { topDealsProductsData } from "./productData/data.js";
import { getProductData } from "./productData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  const url =
    // "https://www.muscleandstrength.com/store/omega-3.html";
    "https://www.muscleandstrength.com/store/perfect-sports-apex-grass-fed-whey-protein.html";
  for (
    let index = 0;
    index < topDealsProductsData.length;
    index++
  ) {
    const { href } = topDealsProductsData[index];

    await getProductData(
      `https://www.muscleandstrength.com${href}`,
      "topDeals"
    );
    console.log({ index });
  }
  // await getFeaturesListData();
  console.log("DONE scraping ✔");
};

main();
