import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
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
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./search.styles";

export const Search = () => {
  const [searchParams, _] = useSearchParams({});
  const { fetchProducts } = useReduxActions();
  const {
    data: { searchedProducts },
  } = useSelector((state) => state.product_store);

  useEffect(() => {
    fetchProducts(
      `q=${searchParams.get("q").replaceAll("+", " ")}`,
      (data) => ({
        searchedProducts: data.doc,
      })
    );
  }, [searchParams]);

  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle title="Search Results" />
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
              <ProductsWrapper products={searchedProducts} />
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
