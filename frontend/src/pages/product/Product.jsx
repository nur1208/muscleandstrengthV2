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
  PerksFooter,
  ProductHeader,
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
