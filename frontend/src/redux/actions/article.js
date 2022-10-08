import { fetchData } from "../../utils";
import { ARTICLE_ACTIONS } from "../constants";

export const fetchArticles =
  (query, payloadReturn, isCount) => (dispatch) =>
    fetchData(
      `articles${isCount ? "/count" : ""}?${query}`,
      ARTICLE_ACTIONS.ARTICLE_FETCH_ARTICLES,
      dispatch,
      payloadReturn
    );

export const fetchSingleArticle = (id) => {
  return (dispatch) =>
    fetchData(
      `articles/${id}`,
      ARTICLE_ACTIONS.ARTICLE_FETCH_SINGLE,
      dispatch,
      (data) => ({ article: data.doc })
    );
};
