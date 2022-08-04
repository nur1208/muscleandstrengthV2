import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  Banner,
  Brands,
  Header,
  NavbarInfo,
  Products,
  QuickNavBar,
  Slider,
  StoreSectionSwiper,
} from "../../components";
import {
  BANNER_BLOCK_12,
  MERCH_BANNER,
  MERCH_BANNER_2,
  MERCH_BANNER_3,
  STORE_TOP_BANNER,
} from "../../components/data";
import { MainWrapper } from "./store.styles";
import {
  topDealsProps,
  topRatedProps,
  trendingProps,
} from "./utils";

export const Store = () => {
  const isNotPC = useMediaQuery({ maxWidth: 1028 });
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo />
      <main id="main-wrapper">
        <article className="content">
          <section id="top-banner">
            <Slider>
              {STORE_TOP_BANNER.map((bannerData) => (
                <Banner noImageDownloaded {...bannerData} />
              ))}
            </Slider>
          </section>
          <section id="quick-nav">
            <QuickNavBar />
          </section>
          <section id="top-deals">
            {isNotPC ? (
              <StoreSectionSwiper {...topDealsProps} />
            ) : (
              <Products {...topDealsProps} />
            )}
          </section>
          <section id="merch-banner">
            <Banner noImageDownloaded {...MERCH_BANNER} />
          </section>
          <section id="top-rated-products">
            <StoreSectionSwiper {...topRatedProps} />
          </section>
          <section id="trending-products">
            <StoreSectionSwiper {...trendingProps} />
          </section>
          <section id="mns-merch-banner-2">
            <Banner noImageDownloaded {...MERCH_BANNER_2} />
          </section>
          <section
            id="top-brands"
            class="top-brands-block grid-container"
          >
            <Brands />
          </section>
          <section id="mns-merch-banner">
            <Banner noImageDownloaded {...MERCH_BANNER_3} />
          </section>
        </article>
      </main>
    </MainWrapper>
  );
};
