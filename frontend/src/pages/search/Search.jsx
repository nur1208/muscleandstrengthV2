import React from "react";
import {
  AjaxErrors,
  Banner,
  EmailSignUp,
  Footer,
  Header,
  LayeredNavigation,
  MobileTabs,
  NavbarInfo,
  PageTitle,
  PerksFooter,
  ProductsWrapper,
  SearchInfoBar,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./search.styles";

export const Search = () => {
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle />
      <div id="main-wrapper">
        <h2 class="blue-stripe show-for-medium all-products">
          All Products
        </h2>
        <article className="col2-container">
          <aside className="left-aside">
            <div>
              <MobileTabs />
              <LayeredNavigation />
            </div>
          </aside>
          <section className="content">
            <div className="result-content-wrap">
              <SearchInfoBar />
              {false && <AjaxErrors />}
              <ProductsWrapper />
            </div>
          </section>
        </article>
      </div>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
