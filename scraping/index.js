import { getAccountNavData } from "./accountNav/script.js";
import {
  getArticleData,
  removeDuplicateArticle,
} from "./article/script.js";
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
import GenericEndpoints from "./services/generic.js";

const main = async () => {
  console.log("start scraping... ⌛");
  // await getArticleData(
  //   "https://www.muscleandstrength.com/exercises/lat-pull-down.html",
  //   {
  //     checkHasHeaderVideo: true,
  //     extraImage:
  //       "https://cdn.muscleandstrength.com/sites/default/files/lat-pull-down.jpg",
  //   }
  // );
  await removeDuplicateArticle(1);
  console.log("DONE scraping ✔");
};

main();
