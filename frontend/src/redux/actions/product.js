import { fetchData } from "../../utils";
import { PRODUCT_ACTIONS } from "../constants";

export const fetchStoreProducts = () => {
  return (dispatch) =>
    fetchData(
      "products?limit=12",
      PRODUCT_ACTIONS.PRODUCT_FETCH_STORE,
      dispatch,
      (data) => ({ topProducts: data.doc })
    );
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
