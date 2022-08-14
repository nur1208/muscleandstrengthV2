import React from "react";
import { Button } from "../button/Button";
import { Review } from "../review/Review";
import { MainWrapper } from "./reviews.styles";

export const Reviews = ({ reviews }) => {
  return (
    <MainWrapper>
      <div class="review-wrapper">
        {reviews.map((review) => (
          <Review {...review} />
        ))}
      </div>
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
      <div class="button-columns btn-row-mobile">
        <Button text="View 10 More Reviews" isBlue />

        <Button text="View All Reviews" isBlue isEllipsis />
      </div>
    </MainWrapper>
  );
};
