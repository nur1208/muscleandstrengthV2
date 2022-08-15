import React from "react";
import {
  Banner,
  BuyingOptions,
  Deals,
  EmailSignUp,
  FeatherLight,
  FeaturesList,
  Footer,
  Header,
  NavbarInfo,
  Nutrition,
  PerksFooter,
  ProductHeader,
  ProductInfo,
  Reviews,
  ReviewsOverall,
  SecureTransaction,
} from "../../components";
import {
  BANNER_BLOCK_12,
  PRODUCT_DATA,
  PRODUCT_DATA_2,
} from "../../components/data";
import { MainWrapper } from "./product.styles";

export const Product = () => {
  return (
    <>
      <MainWrapper>
        <div id="page">
          <Banner {...BANNER_BLOCK_12} />
          <Header />
          <NavbarInfo />
          <div id="main-wrap">
            <div className="main-content">
              <ProductHeader {...PRODUCT_DATA} />
              <FeaturesList />
              <Deals deals={PRODUCT_DATA.deals} />
            </div>
            <div class="aside aside-after">
              <BuyingOptions
                options={PRODUCT_DATA.buyingOptions}
              />
              <div class="product-aside"></div>
              <Nutrition nutrition={PRODUCT_DATA.nutrition} />
            </div>
            <div class="main-content continued">
              <ProductInfo
                productInfo={PRODUCT_DATA.productInfo}
              />
              <ReviewsOverall {...PRODUCT_DATA.reviewsOverall} />
              <Reviews reviews={PRODUCT_DATA.reviews} />
              <div id="results-disclaimer">
                {" "}
                * Muscle &amp; Strength does not imply any
                medical claims from this review. There are no
                guarantees of specific results and results may
                vary.
              </div>
            </div>
            <div class="main-content end">
              <div class="fdaWarning font-s-small">
                * These statements have not been evaluated by the
                Food and Drug Administration. This product is not
                intended to diagnose, treat, cure, or prevent any
                disease.
              </div>
            </div>
          </div>
        </div>
        <div>
          <PerksFooter />
          <EmailSignUp />
          <Footer />
        </div>
      </MainWrapper>

      <FeatherLight />
      <SecureTransaction />
    </>
  );
};
