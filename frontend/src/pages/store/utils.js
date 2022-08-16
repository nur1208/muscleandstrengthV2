import { useSelector } from "react-redux";
import {
  topDealsProductsData,
  topRatedProductsData,
  trendingProductsData,
} from "../../components/data";

export const topDealsProps = {
  title: "THIS WEEK'S TOP DEALS",
  products: topDealsProductsData,
};
export const topRatedProps = {
  title: "Top Rated Products",
  products: topRatedProductsData,
};
export const trendingProps = {
  title: "Trending Products",
  products: trendingProductsData,
};

export const useStorProps = () => {
  const { data, loading } = useSelector(
    (state) => state.product_store
  );

  const topDealsProps = {
    title: "THIS WEEK'S TOP DEALS",
    products: data?.topProducts,
  };

  return { topDealsProps, loading };
};
