import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import {
  AjaxErrors,
  Banner,
  BrandHeader,
  BrandModal,
  EmailSignUp,
  Footer,
  Header,
  LayeredNavigation,
  NavbarInfo,
  PageTitle,
  PerksFooter,
  ProductsWrapper,
  SearchInfoBar,
  StoreSectionSwiper,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./brand.styles";

export const Brand = () => {
  const { name } = useParams();

  const isNotPC = useMediaQuery({ minWidth: 840 });
  const { data, loading } = useSelector(
    (state) => state.product_store
  );
  const { fetchProducts } = useReduxActions();

  const trendingProps = {
    title: "Trending Products",
    products: data?.trendingProducts,
  };

  useEffect(() => {
    let localName = name;
    if (localName === "muscletech") {
      localName = localName.replace("m", "M").replace("t", "T");
    }
    fetchProducts(
      `brand.title=${localName}&limit=20`,
      (data) => ({
        brandProducts: data.doc,
      })
    );

    fetchProducts(
      `brand.title=${localName}`,
      (data) => ({
        brandProductsCount: data.count,
      }),
      true
    );
  }, [name]);

  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle title={"MuscleTech"} />
      <BrandHeader />
      <main id="main-wrapper">
        <article className="before-content">
          <section>
            <StoreSectionSwiper {...trendingProps} />
          </section>
          {isNotPC && (
            <section>
              <h2 class="blue-stripe show-for-medium all-products">
                All Products
              </h2>
            </section>
          )}
        </article>
        <article className="col2-container">
          <aside className="left-aside">
            <div>
              <LayeredNavigation />
            </div>
          </aside>
          <section className="content">
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
      <PerksFooter />
      <EmailSignUp />
      <Footer />

      <BrandModal />
    </MainWrapper>
  );
};
