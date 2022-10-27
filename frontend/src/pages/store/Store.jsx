import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Banner,
  Brands,
  EmailSignUp,
  Footer,
  Header,
  MoreOn,
  NavbarInfo,
  PerksFooter,
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
import { useFetch, useReduxActions } from "../../hooks";
import { MainWrapper } from "./store.styles";
import { useStorProps } from "./utils";

export const Store = () => {
  const isNotPC = useMediaQuery({ maxWidth: 1028 });
  const { fetchStoreProducts } = useReduxActions();
  const { topDealsProps, topRatedProps, trendingProps } =
    useStorProps();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      !topDealsProps.length ||
      !topRatedProps.length ||
      !trendingProps.length
    )
      fetchStoreProducts();
  }, []);

  // if (loading) {
  //   return <div>loading...</div>;
  // }
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
          <section
            id="content-block"
            class="transparent margin-bottom-none"
          >
            <MoreOn />
          </section>
        </article>
      </main>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
