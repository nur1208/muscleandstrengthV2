import React from "react";
import { MainWrapper } from "./brandHeader.styles";

export const BrandHeader = () => {
  return (
    <MainWrapper>
      <div class="brand-logo">
        <img
          height="100"
          width="211"
          alt="MuscleTech Supplements: Lowest Prices at Muscle &amp; Strength"
          src="https://cdn.muscleandstrength.com/store/media/mnsresized/catalog/category/0aefbb/100/MT_logo_2020_black_400.jpg"
          title="MuscleTech Supplements: Lowest Prices at Muscle &amp; Strength"
          itemprop="image"
        />
      </div>
      <div class="brand-about-btn">
        About MuscleTech <span class="caret-right"></span>
      </div>
    </MainWrapper>
  );
};
