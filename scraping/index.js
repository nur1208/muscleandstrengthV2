import { getAccountNavData } from "./accountNav/script.js";
import { getFeaturesListData } from "./featuresListData/script.js";
import { getLayeredNavigationData } from "./layeredNavigation/script.js";
import {
  topDealsProductsData,
  topRatedProductsData,
  trendingProductsData,
  proteinCategories,
  preWorkoutCategories,
  generalHealthCategories,
  clothingCategories,
  functionalFoodsCategories,
  fatLossCategories,
  accessoriesCategory,
  top50Procuts,
} from "./productData/data.js";
import {
  getProductData,
  getProductReviews,
} from "./productData/script.js";
import { scrapProductsByCategory } from "./productsByCategory/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  // await scrapProductsByCategory(
  //   "https://www.muscleandstrength.com/store/category/accessories.html"
  //   // "https://www.muscleandstrength.com/store/category/general-health.html"
  // );
  // const url =
  //   "https://www.muscleandstrength.com/store/now-mega-d-3-and-mk-7.html";
  // // "https://www.muscleandstrength.com/store/combat-powder.html";

  // await getProductData(url, "trending");

  // await getProductData(url, "topDeals");

  for (let index = 0; index < top50Procuts.length; index++) {
    const element = top50Procuts[index];
    console.log(`current product ${index}... ⌛`);
    await getProductData(element, null, null, index + 1);
    console.log(`DONE scraping ${index} ✅`);
  }
  // // re scrap { index: 7 }
  // console.log(preWorkoutCategories.subCategories.length);
  // 11 limit
  // const currentSubIndex = 0;
  // for (
  //   let currentSubIndex = 7;
  //   currentSubIndex < accessoriesCategory.subCategories.length;
  //   currentSubIndex++
  // ) {
  //   console.log(`current subCategory ${currentSubIndex}`);
  //   const { products, title } =
  //     accessoriesCategory.subCategories[currentSubIndex];
  //   for (let index = 0; index < products.length; index++) {
  //     const href = products[index];

  //     console.log({
  //       href,
  //       title,
  //     });
  //     console.log(`current product ${index}... ⌛`);

  //     await getProductData(
  //       `https://www.muscleandstrength.com${href}`,
  //       null,
  //       {
  //         category: accessoriesCategory.title,
  //         subCategory: title,
  //       }
  //     );

  //     console.log(`DONE scraping ${index} ✅`);
  //   }
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
