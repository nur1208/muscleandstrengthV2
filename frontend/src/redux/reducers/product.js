import { PRODUCT_ACTIONS } from "../constants";

const initialState = {
  loading: false,
  data: {
    topProducts: [],
    productSingle: {},
    topRatedProducts: [],
    trendingProducts: [],
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
      return { ...state, ...initialState, loading: true };

    case PRODUCT_ACTIONS.PRODUCT_FETCH_STORE.SUCCESS:
    case PRODUCT_ACTIONS.PRODUCT_FETCH_SINGLE.SUCCESS:
      return {
        ...state,
        ...initialState,
        data: { ...state.data, ...action.payload },
      };

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
