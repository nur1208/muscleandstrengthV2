import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AjaxErrors,
  Banner,
  Header,
  LayeredNavigation,
  MobileTabs,
  NavbarInfo,
  PageTitle,
  ProductsWrapper,
  SearchInfoBar,
  StoreSectionSwiper,
  SubCategories,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { capitalizeFirstLetter } from "../../utils";
import { MainWrapper } from "./category.styles";
import { proteinCategories } from "./data";

export const Category = () => {
  const { type } = useParams();
  const { data } = useSelector((state) => state.product_store);

  const trendingProps = {
    title: "Trending Products",
    products: data?.trendingProducts,
  };

  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle
        title={capitalizeFirstLetter(`${type} Supplements`)}
      />
      <main id="main-wrapper">
        <article className="before-content">
          {proteinCategories.bannerData && (
            <section>
              <Banner
                noImageDownloaded
                {...proteinCategories.bannerData}
              />
            </section>
          )}
          <section>
            <SubCategories
              categories={proteinCategories.subCategories.map(
                ({ title }) => title
              )}
            />
          </section>
          <section>
            <StoreSectionSwiper {...trendingProps} />
          </section>
          <section>
            <h2 class="blue-stripe show-for-medium all-products">
              All Products
            </h2>
          </section>
        </article>
        <article className="col2-container">
          <aside className="left-aside">
            <div>
              <MobileTabs />
              <LayeredNavigation />
            </div>
          </aside>
          <section className="content">
            <div className="result-content-wrap">
              <SearchInfoBar hasSort />
              {false && <AjaxErrors />}
              <ProductsWrapper hasAddCardBtn />
            </div>
          </section>
        </article>
      </main>
    </MainWrapper>
  );
};
