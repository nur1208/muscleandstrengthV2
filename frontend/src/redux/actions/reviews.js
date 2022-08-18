import { fetchData } from "../../utils";
import { REVIEW_ACTIONS } from "../constants";

export const fetchReviews = (id, page) => {
  return (dispatch) =>
    fetchData(
      `reviews?productId=${id}${page ? `&page=${page}` : ""}`,
      REVIEW_ACTIONS.REVIEW_FETCH,
      dispatch,
      (data) => ({ reviews: data.doc })
    );
};
