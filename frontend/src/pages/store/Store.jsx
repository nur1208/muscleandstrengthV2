import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  Banner,
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
        </article>
      </main>
    </MainWrapper>
  );
};
