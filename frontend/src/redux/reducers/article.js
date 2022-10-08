import { ARTICLE_ACTIONS } from "../constants";

const initialState = {
  loading: false,
  data: {
    categoryArticles: [],
    categoryNewArticles: [],
  },
  error: null,
};

export const articleReducer = (
  state = { ...initialState, loading: true },
  action
) => {
  switch (action.type) {
    case ARTICLE_ACTIONS.ARTICLE_FETCH_ARTICLES.LOADING:
      return { ...state, error: null, loading: true };

    case ARTICLE_ACTIONS.ARTICLE_FETCH_ARTICLES.SUCCESS:
      return {
        ...state,
        ...initialState,
        data: { ...state.data, ...action.payload },
      };

    case ARTICLE_ACTIONS.ARTICLE_FETCH_ARTICLES.FAIL:
      return {
        ...state,
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
