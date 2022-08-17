import { fetchData } from "../../utils";
import { REVIEW_ACTIONS } from "../constants";

export const fetchReviews = (id) => {
  return (dispatch) =>
    fetchData(
      `reviews?productId=${id}`,
      REVIEW_ACTIONS.REVIEW_FETCH,
      dispatch,
      (data) => ({ reviews: data.doc })
    );
};
