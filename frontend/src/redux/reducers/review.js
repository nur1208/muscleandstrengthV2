import { REVIEW_ACTIONS } from "../constants";

const initialState = {
  loading: false,
  data: { reviews: [] },
  error: null,
};

export const reviewReducer = (
  state = { ...initialState, loading: true },
  action
) => {
  switch (action.type) {
    case REVIEW_ACTIONS.REVIEW_FETCH.LOADING:
      return { ...state, ...initialState, loading: true };

    case REVIEW_ACTIONS.REVIEW_FETCH.SUCCESS:
      return {
        ...state,
        ...initialState,
        data: { ...state.data, ...action.payload },
      };

    case REVIEW_ACTIONS.REVIEW_FETCH.FAIL:
      return {
        ...state,
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
