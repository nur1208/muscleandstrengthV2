import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AjaxErrors,
  Banner,
  DealAlertMobile,
  DealAlerts,
  Header,
  LayeredNavigation,
  NavbarInfo,
  PageTitle,
  ProductsWrapper,
  SearchInfoBar,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./productsDeals.styles";

export const ProductsDeals = () => {
  const { data, loading } = useSelector(
    (state) => state.product_store
  );

  const { fetchProducts } = useReduxActions();

  useEffect(() => {
    fetchProducts(`limit=20`, (data) => ({
      dealProducts: data.doc,
    }));

    fetchProducts(
      ``,
      (data) => ({
        dealProductsCount: data.count,
      }),
      true
    );
  }, []);

  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle title={"Deals & Coupons"} />
      <main id="main-wrapper">
        <article className="col2-container">
          <aside className="left-aside">
            {" "}
            <div>
              <DealAlertMobile />
              <LayeredNavigation />
            </div>
          </aside>
          <section className="content">
            <div className="call-to-action">
              <DealAlerts />
            </div>
            <div className="result-content-wrap">
              <SearchInfoBar
                hasSort
                showNum={data.dealProducts.length}
                countStore={data.dealProductsCount}
              />
              {false && <AjaxErrors />}
              <ProductsWrapper
                hasAddCardBtn
                showNext={20}
                // handleShowNext={handleShowNext}
                count={data.dealProductsCount}
                products={data.dealProducts}
                loading={loading}
              />
            </div>
          </section>
        </article>
      </main>
    </MainWrapper>
  );
};
