import React from "react";
import { MainWrapper } from "./ratingBox.styles";

export const RatingBox = ({ width }) => {
  return (
    <MainWrapper>
      <div class="rating-box">
        <div class="star-overlay gray-bg"></div>
        <div class="rating" style={{ width: `${width}%` }}></div>
      </div>
    </MainWrapper>
  );
};
