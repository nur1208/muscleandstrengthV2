import React from "react";
import { useReduxActions } from "../../hooks";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MODAL_TYPES } from "../../redux/constants/modal";
import { Button } from "../button/Button";
import { featuresListData } from "../featuresList/data";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Selector } from "../selector/Selector";
import { MainWrapper } from "./buyingOptions.styles";
import { Qty } from "./Qty";
const selectorStyle = `
    .sod_list_wrapper {
        min-width: 13em;
        border: 1px solid #ddd;
        color: #777;
    }    

`;
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
            {buyingOptions.map(
              ({ cost, serving, title, deal, options }) => (
                <div class="group">
                  <div class="group-header">
                    <div class="cost">
                      {cost.beforeDiscount && (
                        <div class="before-discount">
                          <span class="price">
                            ${cost.beforeDiscount}
                          </span>{" "}
                        </div>
                      )}

                      <span class="calc">
                        <span
                          class="regular-price"
                          id="product-price-38914"
                        >
                          <span class="price">
                            ${cost.regularPrice}
                          </span>{" "}
                        </span>
                        <span class="points-per-unit">
                          {cost.regularPrice + "00"}
                        </span>
                      </span>
                    </div>
                    <div class="title">{title}</div>
                    <div class="serving-info">
                      {serving} Servings | $
                      {Math.floor(
                        (cost.regularPrice / serving) * 100
                      ) / 100}{" "}
                      Per Serving
                    </div>{" "}
                    <div class="deal">
                      <span class="mns-label lbl-deal">
                        {deal}{" "}
                      </span>
                    </div>
                  </div>
                  <div class="fields">
                    <div class="row">
                      <div class="option-field field">
                        <Selector
                          customStyle={selectorStyle}
                          label="Pick a Flavor"
                          isBlue
                          options={options}
                        />
                      </div>

                      <div class="qty-field field">
                        <Qty />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

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
