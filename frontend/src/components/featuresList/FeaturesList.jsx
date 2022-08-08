import React from "react";
import { getIconById } from "../../icons";
import { featuresListData } from "./data";
import { MainWrapper, SvgWrapper } from "./featuresList.styles";

export const FeaturesList = () => {
  return (
    <MainWrapper>
      <ul class="features-list">
        {featuresListData.map(
          ({ title, iconID, content }, index) => (
            <li key={`index-${index}`}>
              <a
                href="#"
                data-featherlight="#features-list-rewards"
                data-featherlight-variant="fancy"
              >
                <span class="inner-icon">
                  <SvgWrapper childStyle="width:1em; height:1em; margin-bottom: -.21em; margin-left:.3em;">
                    {getIconById(iconID)}
                  </SvgWrapper>
                  {/* <svg >
                  <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-mns-rewards"></use>
                </svg> */}
                </span>
                {title[0]}{" "}
                <span class="new-line">{title[1]}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </MainWrapper>
  );
};
