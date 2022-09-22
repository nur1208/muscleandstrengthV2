import React from "react";
import { MainWrapper } from "./featureHeader.styles";

export const FeatureHeader = () => {
  return (
    <MainWrapper>
      <h1 class="hstyle-one">Top 50 Products</h1>
      <div>
        <img
          class=" lazyloaded"
          data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/bestseller/main-page.jpg"
          alt="Top 50 Supplements"
          src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/bestseller/main-page.jpg"
        />
      </div>
      <div class="last-updated font-s-small">
        Last updated September 20, 2022
      </div>
    </MainWrapper>
  );
};
