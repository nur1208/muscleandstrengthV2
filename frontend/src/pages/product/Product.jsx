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
              <ProductHeader {...PRODUCT_DATA_2} />
              <FeaturesList />
              <Deals deals={PRODUCT_DATA_2.deals} />
            </div>
            <div class="aside aside-after">
              <BuyingOptions
                options={PRODUCT_DATA_2.buyingOptions}
              />
              <div class="product-aside"></div>
              <Nutrition nutrition={PRODUCT_DATA_2.nutrition} />
            </div>
            <div class="main-content continued">
              <ProductInfo
                productInfo={PRODUCT_DATA_2.productInfo}
              />
              <ReviewsOverall
                {...PRODUCT_DATA_2.reviewsOverall}
              />
              <Reviews reviews={PRODUCT_DATA_2.reviews} />
            </div>
          </div>
        </div>
        {/* <PerksFooter />
        <EmailSignUp />
        <Footer /> */}
      </MainWrapper>
      <FeatherLight />
      <SecureTransaction />
    </>
  );
};
