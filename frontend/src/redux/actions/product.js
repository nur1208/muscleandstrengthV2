import { fetchData } from "../../utils";
import { PRODUCT_ACTIONS } from "../constants";

export const fetchProducts =
  (query, payloadReturn, isCount) => (dispatch) =>
    fetchData(
      `products${isCount ? "/count" : ""}?${query}`,
      PRODUCT_ACTIONS.PRODUCT_FETCH_PRODUCTS,
      dispatch,
      payloadReturn
      // (data) => ({ topProducts: data.doc })
    );
export const fetchStoreProducts = () => {
  return (dispatch) => {
    fetchData(
      "products?limit=12&type=topDeals",
      PRODUCT_ACTIONS.PRODUCT_FETCH_STORE,
      dispatch,
      (data) => {
        localStorage.setItem(
          "topProducts",
          JSON.stringify(data.doc)
        );
        return { topProducts: data.doc };
      }
    );
    fetchData(
      "products?limit=12&type=topRated",
      PRODUCT_ACTIONS.PRODUCT_FETCH_STORE,
      dispatch,
      (data) => {
        localStorage.setItem(
          "topRatedProducts",
          JSON.stringify(data.doc)
        );
        return { topRatedProducts: data.doc };
      }
    );
    fetchData(
      "products?limit=12&type=trending",
      PRODUCT_ACTIONS.PRODUCT_FETCH_STORE,
      dispatch,
      (data) => {
        localStorage.setItem(
          "trendingProducts",
          JSON.stringify(data.doc)
        );
        return { trendingProducts: data.doc };
      }
    );
  };
};

export const fetchStoreSingleProduct = (id) => {
  return (dispatch) =>
    fetchData(
      `products/${id}`,
      PRODUCT_ACTIONS.PRODUCT_FETCH_SINGLE,
      dispatch,
      (data) => ({ productSingle: data.doc })
    );
};
