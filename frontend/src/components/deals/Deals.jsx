import React, { useEffect, useState } from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { Slider } from "../slider/Slider";
import { Deal } from "./Deal";
import { MainWrapper } from "./deals.styles";

export const Deals = ({ deals }) => {
  const [isSolo, setIsSolo] = useState(deals.length === 1);

  useEffect(() => {
    setIsSolo(deals.length === 1);
  }, [deals]);
  return (
    <MainWrapper isSolo={isSolo}>
      <div class="deals-coupons-title section-title">
        <SvgWrapper childStyle="width: 1em; height: 1em; margin-bottom: -0.15em; margin-right: .3em;">
          {getIconById(ICONS_ID.IconDealWhite)}
        </SvgWrapper>
        Deals
      </div>
      <div class="section-inner-wrap">
        <Slider loop={!isSolo} hasNextBtn={!isSolo}>
          {deals.map((deal, index) => (
            <Deal key={`deal-${index}`} {...deal} />
          ))}
        </Slider>
        {!isSolo && (
          <div class="swiper-button-next deals-next arrow-next arrow-btn">
            ›
          </div>
        )}
      </div>
    </MainWrapper>
  );
};
