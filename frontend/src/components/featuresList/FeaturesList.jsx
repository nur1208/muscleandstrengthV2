import React from "react";
import { useReduxActions } from "../../hooks";
import { getIconById, SvgWrapper } from "../../icons";
import { MODAL_TYPES } from "../../redux/constants/modal";
import { featuresListData } from "./data";
import { MainWrapper } from "./featuresList.styles";

export const FeaturesList = () => {
  const { updateModalState } = useReduxActions();
  const handleClick = (content) => {
    updateModalState({
      isOpen: true,
      type: MODAL_TYPES.FEATHER_LIGHT,
      content,
    });
  };
  return (
    <MainWrapper>
      <ul class="features-list">
        {featuresListData.map(
          ({ title, iconID, content }, index) => (
            <li key={`index-${index}`}>
              <span
                onClick={() => handleClick(content)}
                class="click-span"
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
              </span>
            </li>
          )
        )}
      </ul>
    </MainWrapper>
  );
};
