import { PRODUCT_ACTIONS } from "../constants";

const initialState = {
  loading: false,
  data: { topProducts: [] },
  error: null,
};

export const productReducer = (
  state = { ...initialState, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.PRODUCT_FETCH_STORE.LOADING:
      return { ...state, ...initialState, loading: true };

    case PRODUCT_ACTIONS.PRODUCT_FETCH_STORE.SUCCESS:
      return { ...state, ...initialState, data: action.payload };

    case PRODUCT_ACTIONS.PRODUCT_FETCH_STORE.FAIL:
      return {
        ...state,
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
