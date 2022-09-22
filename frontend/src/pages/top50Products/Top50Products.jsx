import React from "react";
import {
  Banner,
  BulkAdAside,
  EmailSignUp,
  FeatureHeader,
  Footer,
  Header,
  NavbarInfo,
  PerksFooter,
  ProductFinderAside,
  TopProducts,
  TopSellersAside,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { useUpdateCustomNavInfo } from "../../hooks";
import { MainWrapper } from "./top50Products.styles";

export const Top50Products = () => {
  useUpdateCustomNavInfo(" > Store > Top 50 Selling Products");
  return (
    <MainWrapper>
      <div id="page">
        <Banner {...BANNER_BLOCK_12} />
        <Header />
        <NavbarInfo />
        <div id="main-wrap">
          <div className="aside">
            <ProductFinderAside />
            <TopSellersAside />
            <BulkAdAside />
          </div>
          <div className="main-content">
            <FeatureHeader />
            <TopProducts />
          </div>
        </div>
      </div>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
