import { PRODUCT_ACTIONS } from "../constants";

const initialState = {
  loading: false,
  data: {
    topProducts: [],
    productSingle: {},
    topRatedProducts: [],
    trendingProducts: [],
    categoryProducts: [],
    searchedProducts: [],
    brandProducts: [],
  },
  error: null,
};

export const productReducer = (
  state = { ...initialState, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.PRODUCT_FETCH_STORE.LOADING:
    case PRODUCT_ACTIONS.PRODUCT_FETCH_SINGLE.LOADING:
    case PRODUCT_ACTIONS.PRODUCT_FETCH_PRODUCTS.LOADING:
      return { ...state, error: null, loading: true };

    case PRODUCT_ACTIONS.PRODUCT_FETCH_STORE.SUCCESS:
    case PRODUCT_ACTIONS.PRODUCT_FETCH_SINGLE.SUCCESS:
    case PRODUCT_ACTIONS.PRODUCT_FETCH_PRODUCTS.SUCCESS:
      return {
        ...state,
        ...initialState,
        data: { ...state.data, ...action.payload },
      };

    case PRODUCT_ACTIONS.PRODUCT_FETCH_PRODUCTS.FAIL:
    case PRODUCT_ACTIONS.PRODUCT_FETCH_STORE.FAIL:
    case PRODUCT_ACTIONS.PRODUCT_FETCH_SINGLE.FAIL:
      return {
        ...state,
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
