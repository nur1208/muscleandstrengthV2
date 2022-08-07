import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { MainWrapper, SvgWrapper } from "./featuresList.styles";

export const FeaturesList = () => {
  return (
    <MainWrapper>
      <ul class="features-list">
        <li>
          <a
            href="#"
            data-featherlight="#features-list-rewards"
            data-featherlight-variant="fancy"
          >
            <span class="inner-icon">
              <SvgWrapper childStyle="width:1em; height:1em; margin-bottom: -.21em; margin-left:.3em;">
                {getIconById(ICONS_ID.IconMnsRewards)}
              </SvgWrapper>
              {/* <svg >
                  <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-mns-rewards"></use>
                </svg> */}
            </span>
            Earn Rewards{" "}
            <span class="new-line">On Everything</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            data-featherlight="#features-list-samples"
            data-featherlight-variant="fancy"
          >
            <span class="inner-icon">
              <SvgWrapper childStyle="width:1em; height:1em; margin-bottom: -.15em; margin-left:.3em;">
                {getIconById(ICONS_ID.IconDeal)}
              </SvgWrapper>
            </span>
            Unbeatable <span class="new-line">Deals</span>
          </a>
        </li>
        <li>
          <a
            href=""
            class="modal-dialog same-day-shipping-block"
            onclick="return false;"
          >
            <span class="inner-icon">
              <SvgWrapper childStyle="width:1.1em; height:1.1em; margin-bottom: -.18em; margin-left:.3em;">
                {getIconById(ICONS_ID.IconTruck)}
              </SvgWrapper>
            </span>
            Same Day <span class="new-line">Shipping</span>{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            data-featherlight="#features-list-returns"
            data-featherlight-variant="fancy"
          >
            <span class="inner-icon">
              <SvgWrapper childStyle="width:1em; height:1em; margin-bottom: -.15em; margin-left:.3em;">
                {getIconById(ICONS_ID.IconSavedCards)}
              </SvgWrapper>
            </span>
            Money Back <span class="new-line">Guarantee</span>
          </a>
        </li>
      </ul>
    </MainWrapper>
  );
};
