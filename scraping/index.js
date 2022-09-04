import { getAccountNavData } from "./accountNav/script.js";
import { getFeaturesListData } from "./featuresListData/script.js";
import { getLayeredNavigationData } from "./layeredNavigation/script.js";
import {
  topDealsProductsData,
  topRatedProductsData,
  trendingProductsData,
} from "./productData/data.js";
import {
  getProductData,
  getProductReviews,
} from "./productData/script.js";
import { scrapProductsByCategory } from "./productsByCategory/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  // await scrapProductsByCategory(
  //   "https://www.muscleandstrength.com/store/category/protein.html"
  //   // "https://www.muscleandstrength.com/store/category/general-health.html"
  // );
  const url =
    "https://www.muscleandstrength.com/store/now-mega-d-3-and-mk-7.html";
  // "https://www.muscleandstrength.com/store/combat-powder.html";

  await getProductData(url, "trending");

  // await getProductData(url, "topDeals");

  // // re scrap { index: 7 }
  // for (
  //   let index = 9;
  //   index < topRatedProductsData.length;
  //   index++
  // ) {
  //   const { href } = topRatedProductsData[index];

  //   await getProductData(
  //     `https://www.muscleandstrength.com${href}`,
  //     "topRated"
  //   );
  //   console.log({ index });
  // }

  // const element = topDealsProductsData.find(
  //   ({ title }) => title === "JNX Sports The Ripper, 30 Servings"
  // );
  // {
  //   index: 2;
  // }
  // const element = topRatedProductsData[7];

  // await getProductData(
  //   `https://www.muscleandstrength.com${element.href}`,
  //   "topRated"
  // );

  console.log("DONE scraping ✔");
};

main();
