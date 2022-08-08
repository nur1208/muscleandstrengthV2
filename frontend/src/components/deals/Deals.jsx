import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { Slider } from "../slider/Slider";
import { MainWrapper } from "./deals.styles";

export const Deals = () => {
  const silds = Array(4)
    .fill(true)
    .map((_, INDEX) => (
      <>
        <img
          width="98"
          height="98"
          class="deal-image lazyloaded"
          data-src="https://cdn.muscleandstrength.com/store/media/mnsresized/catalog/product/a/p/e7aba0/98/98/apex_whey_5lbs_chocolate_ice_cream.jpg"
          alt="LIMITED TIME PRICE CUT"
          src="https://cdn.muscleandstrength.com/store/media/mnsresized/catalog/product/a/p/e7aba0/98/98/apex_whey_5lbs_chocolate_ice_cream.jpg"
        />
        <div class="deal-info-wrap">
          <div>
            <span class="deal-label">
              {INDEX}LIMITED TIME PRICE CUT
            </span>
          </div>
          <div class="deal-desc">
            Buy 1 PERFECT Sports APEX Grass-Fed 100% Pure Whey
            Protein for only $49.99! Limited time only.
          </div>
        </div>
      </>
    ));
  return (
    <MainWrapper isSolo>
      <div class="deals-coupons-title section-title">
        <SvgWrapper childStyle="width: 1em; height: 1em; margin-bottom: -0.15em; margin-right: .3em;">
          {getIconById(ICONS_ID.IconDealWhite)}
        </SvgWrapper>
        Deals
      </div>
      <div class="section-inner-wrap">
        <Slider
          loop={silds.length > 1}
          hasNextBtn={silds.length > 1}
        >
          {silds}
        </Slider>
        {silds.length > 1 && (
          <div class="swiper-button-next deals-next arrow-next arrow-btn">
            ›
          </div>
        )}
      </div>
    </MainWrapper>
  );
};
