import React from "react";
import { useReduxActions } from "../../hooks";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MODAL_TYPES } from "../../redux/constants/modal";
import { Button } from "../button/Button";
import { featuresListData } from "../featuresList/data";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { BuyingOption } from "./BuyingOption";
import { MainWrapper } from "./buyingOptions.styles";

export const BuyingOptions = ({ options: buyingOptions }) => {
  const { updateModalState } = useReduxActions();
  const handleClick = () => {
    updateModalState({
      isOpen: true,
      type: MODAL_TYPES.FEATHER_LIGHT,
      content: featuresListData[0].content,
    });
  };

  const handleClickSecure = () =>
    updateModalState({
      isOpen: true,
      type: MODAL_TYPES.SECURE_TRANSACTION,
    });
  return (
    <MainWrapper>
      <SectionTitle title="Buying Options" />
      <div>
        <div class="section-inner-wrap">
          <div class="group-wrap">
            {buyingOptions.map((data) => (
              <BuyingOption {...data} />
            ))}

            <div class="space-break">&nbsp;</div>
          </div>
        </div>
        <div class="section-separator"></div>
        <div class="section-inner-wrap add-to-cart-wrap">
          <div class="add-to-cart">
            <div>
              <Button
                text="Add to Cart"
                hasLoader
                isBlue
                isLarge
              />
              {/* <button
                class="btn btn-lg btn-submit btn-addtocartprodpage"
                // onclick="productAddToCartForm.submit(this, event); return false;"
              >
                <span class="css-loader-block">
                  <span class="css-loader"></span>
                </span>
              </button> */}
            </div>
          </div>
        </div>
        <div class="secure-transaction-notice">
          <span
            class="secure-transaction-link"
            onClick={handleClickSecure}
          >
            {getIconById(ICONS_ID.IconPadlock)}
            Secure Transaction
          </span>
        </div>
        <div class="section-inner-wrap reward-points-section">
          <div class="reward-points-wrap">
            <span
              href="#"
              onClick={handleClick}
              data-featherlight="#features-list-rewards"
              data-featherlight-variant="fancy"
              class="points-label"
            >
              Reward Points Earned{" "}
              <SvgWrapper childStyle="width: 1.3em; height: 1.3em; margin-bottom: -.3em!important;">
                {getIconById(ICONS_ID.IconQuestionMark)}
              </SvgWrapper>
            </span>
            <div class="points-earned">
              <span class="points">0</span> Points
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
