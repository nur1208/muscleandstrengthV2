import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { Button } from "../button/Button";
import { Review } from "../review/Review";
import { MainWrapper } from "./reviews.styles";

export const Reviews = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    product_store: {
      data: { productSingle },
    },
    review_store: { loading },
  } = useSelector((state) => state);

  const { fetchReviews } = useReduxActions();

  const handleOnClick = () => {
    const nextPage = currentPage + 1;
    if (productSingle?._id) {
      fetchReviews(productSingle._id, nextPage);
      setCurrentPage(nextPage);
    }
  };
  return (
    <MainWrapper>
      <div class="review-wrapper">
        {reviews.map((review) => (
          <Review {...review} />
        ))}
      </div>
      {loading && (
        <div
          class="viewmore-loadingmessage"
          id="viewmore-loadingmessage"
        >
          <img
            class=" lazyloaded"
            style={{ width: "2em" }}
            data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/ajax-loader.gif"
            alt="Loading"
            src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/ajax-loader.gif"
          />
        </div>
      )}

      <div class="button-columns btn-row-mobile">
        <Button
          text="View 10 More Reviews"
          isBlue
          onClick={handleOnClick}
        />

        <Button text="View All Reviews" isBlue isEllipsis />
      </div>
    </MainWrapper>
  );
};
