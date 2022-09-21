import React from "react";
import {
  Banner,
  Header,
  NavbarInfo,
  PageTitle,
  Brands as BrandsCompo,
  AlphablockCategories,
  PerksFooter,
  EmailSignUp,
  Footer,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./brands.styles";

export const Brands = () => {
  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle title="Shop by Brand" />
      <main id="main-wrapper">
        <article className="content">
          <article className="top-brands-block">
            <BrandsCompo />
          </article>
          <AlphablockCategories />
        </article>
      </main>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
