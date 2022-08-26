import { getAccountNavData } from "./accountNav/script.js";
import { getFeaturesListData } from "./featuresListData/script.js";
import {
  topDealsProductsData,
  topRatedProductsData,
  trendingProductsData,
} from "./productData/data.js";
import {
  getProductData,
  getProductReviews,
} from "./productData/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getAccountNavData();
  // const url =
  //   // "https://www.muscleandstrength.com/store/omega-3.html";
  //   "https://www.muscleandstrength.com/store/perfect-sports-apex-grass-fed-whey-protein.html";
  // // re scrap { index: 7 }
  // for (
  //   let index = 0;
  //   index < trendingProductsData.length;
  //   index++
  // ) {
  //   const { href } = trendingProductsData[index];

  //   await getProductData(
  //     `https://www.muscleandstrength.com${href}`,
  //     "trending"
  //   );
  //   console.log({ index });
  // }

  // const element = topDealsProductsData.find(
  //   ({ title }) => title === "JNX Sports The Ripper, 30 Servings"
  // );
  // {
  //   index: 2;
  // }
  // const element = topDealsProductsData[11];

  // await getProductData(
  //   `https://www.muscleandstrength.com${element.href}`,
  //   "topRated"
  // );

  console.log("DONE scraping ✔");
};

main();
