import { ARTICLE_ACTIONS } from "../constants";

const initialState = {
  loading: false,
  data: {
    article: {},
    categoryArticles: [],
    categoryNewArticles: [],
    mostPopularArticles: [],
    dietGuidesArticles: [],
    trendingNutritionArticles: [],
    mostPopularExercises: [],
    newRecipesArticles: [],
    trendingRecipesArticles: [],
    newArticles: [],
  },
  error: null,
};

export const articleReducer = (
  state = { ...initialState, loading: true },
  action
) => {
  switch (action.type) {
    case ARTICLE_ACTIONS.ARTICLE_FETCH_ARTICLES.LOADING:
    case ARTICLE_ACTIONS.ARTICLE_FETCH_SINGLE.LOADING:
      return { ...state, error: null, loading: true };

    case ARTICLE_ACTIONS.ARTICLE_FETCH_ARTICLES.SUCCESS:
    case ARTICLE_ACTIONS.ARTICLE_FETCH_SINGLE.SUCCESS:
      return {
        ...state,
        ...initialState,
        data: { ...state.data, ...action.payload },
      };

    case ARTICLE_ACTIONS.ARTICLE_FETCH_ARTICLES.FAIL:
    case ARTICLE_ACTIONS.ARTICLE_FETCH_SINGLE.FAIL:
      return {
        ...state,
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
