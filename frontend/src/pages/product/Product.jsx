import React from "react";
import {
  Banner,
  EmailSignUp,
  FeaturesList,
  Footer,
  Header,
  NavbarInfo,
  PerksFooter,
  ProductHeader,
} from "../../components";
import {
  BANNER_BLOCK_12,
  PRODUCT_DATA,
} from "../../components/data";
import { MainWrapper } from "./product.styles";

export const Product = () => {
  return (
    <MainWrapper>
      <div id="page">
        <Banner {...BANNER_BLOCK_12} />
        <Header />
        <NavbarInfo />
        <div id="main-wrap">
          <div className="main-content">
            <ProductHeader {...PRODUCT_DATA} />
            <FeaturesList />
          </div>
        </div>
      </div>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
