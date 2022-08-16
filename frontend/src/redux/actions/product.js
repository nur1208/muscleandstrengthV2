import { fetchData } from "../../utils";
import { PRODUCT_ACTIONS } from "../constants";

export const fetchStoreProducts = (data) => {
  return (dispatch) =>
    fetchData(
      "products?limit=12",
      PRODUCT_ACTIONS.PRODUCT_FETCH_STORE,
      dispatch,
      (data) => ({ topProducts: data.doc })
    );
};
