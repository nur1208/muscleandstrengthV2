import React from "react";
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
import { MainWrapper } from "./productsDeals.styles";

export const ProductsDeals = () => {
  const { data, loading } = useSelector(
    (state) => state.product_store
  );
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
                showNum={data.brandProducts.length}
                countStore={data.brandProductsCount}
              />
              {false && <AjaxErrors />}
              <ProductsWrapper
                hasAddCardBtn
                showNext={20}
                // handleShowNext={handleShowNext}
                count={data.brandProductsCount}
                products={data.brandProducts}
                loading={loading}
              />
            </div>
          </section>
        </article>
      </main>
    </MainWrapper>
  );
};
