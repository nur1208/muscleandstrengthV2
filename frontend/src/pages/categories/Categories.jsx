import React from "react";
import {
  Banner,
  Header,
  NavbarInfo,
  PageTitle,
  SectionTitle,
  Categories as CategoriesCom,
  AlphablockCategories,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./categories.styles";

export const Categories = () => {
  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle title="Shop by Category" />
      <main id="main-wrapper">
        <article className="content">
          <div className="main-content grid-container full">
            <SectionTitle title="Top Categories" />
            <CategoriesCom />
            <AlphablockCategories />
          </div>
        </article>
      </main>
    </MainWrapper>
  );
};
