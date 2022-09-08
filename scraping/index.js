import { getAccountNavData } from "./accountNav/script.js";
import { getFeaturesListData } from "./featuresListData/script.js";
import { getLayeredNavigationData } from "./layeredNavigation/script.js";
import {
  topDealsProductsData,
  topRatedProductsData,
  trendingProductsData,
  proteinCategories,
  preWorkoutCategories,
} from "./productData/data.js";
import {
  getProductData,
  getProductReviews,
} from "./productData/script.js";
import { scrapProductsByCategory } from "./productsByCategory/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  // await scrapProductsByCategory(
  //   "https://www.muscleandstrength.com/store/category/pre-workout.html"
  //   // "https://www.muscleandstrength.com/store/category/general-health.html"
  // );
  // const url =
  //   "https://www.muscleandstrength.com/store/now-mega-d-3-and-mk-7.html";
  // // "https://www.muscleandstrength.com/store/combat-powder.html";

  // await getProductData(url, "trending");

  // await getProductData(url, "topDeals");

  // // re scrap { index: 7 }
  console.log(preWorkoutCategories.subCategories.length);
  // 11 limit
  // const currentSubIndex = 0;
  for (
    let currentSubIndex = 2;
    currentSubIndex < proteinCategories.subCategories.length;
    currentSubIndex++
  ) {
    console.log(`current subCategory ${currentSubIndex}`);
    const { products, title } =
      proteinCategories.subCategories[currentSubIndex];
    for (let index = 0; index < products.length; index++) {
      const href = products[index];

      console.log({
        href,
        title,
      });
      console.log(`current product ${index}... ⌛`);

      await getProductData(
        `https://www.muscleandstrength.com${href}`,
        null,
        {
          category: proteinCategories.title,
          subCategory: title,
        }
      );

      console.log(`DONE scraping ${index} ✅`);
    }
  }

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
