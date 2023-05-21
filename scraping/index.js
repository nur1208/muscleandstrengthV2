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
  const { data } = await GenericEndpoints.get(
    `articles?limit=100&&page${2}`
  );

  for (let index = 16; index < data.data.doc.length; index++) {
    console.log("current:" + index);

    const { sourceUrl } = data.data.doc[index];
    await getArticleData(sourceUrl, {
      scrapWriter: true,
      checkHasHeaderVideo: true,
    });
  }

  console.log("DONE scraping ✔");
};

main();
