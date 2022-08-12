import React from "react";
import { MainWrapper } from "./ratingBox.styles";

export const RatingBox = ({ width, hasGrayBg }) => {
  return (
    <MainWrapper hasGrayBg={hasGrayBg}>
      <div class="rating-box">
        <div
          class={`star-overlay ${hasGrayBg ? "gray-bg" : ""}`}
        ></div>
        <div class="rating" style={{ width: `${width}%` }}></div>
      </div>
    </MainWrapper>
  );
};
