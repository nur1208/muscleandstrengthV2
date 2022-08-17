import { getFeaturesListData } from "./featuresListData/script.js";
import {
  topDealsProductsData,
  topRatedProductsData,
  trendingProductsData,
} from "./productData/data.js";
import { getProductData } from "./productData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  const url =
    // "https://www.muscleandstrength.com/store/omega-3.html";
    "https://www.muscleandstrength.com/store/perfect-sports-apex-grass-fed-whey-protein.html";
  // re scrap { index: 7 }
  for (
    let index = 1;
    index < trendingProductsData.length;
    index++
  ) {
    const { href } = trendingProductsData[index];

    await getProductData(
      `https://www.muscleandstrength.com${href}`,
      "trending"
    );
    console.log({ index });
  }
  // await getFeaturesListData();

  // const element = topDealsProductsData.find(
  //   ({ title }) => title === "JNX Sports The Ripper, 30 Servings"
  // );

  // const element = topDealsProductsData[11];

  // await getProductData(
  //   `https://www.muscleandstrength.com${element.href}`,
  //   "topRated"
  // );

  console.log("DONE scraping ✔");
};

main();
