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
  STORE_TOP_BANNER,
  topDealsProductsData,
} from "../../components/data";
import { MainWrapper } from "./store.styles";

export const Store = () => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  const isNotPC = useMediaQuery({ maxWidth: 1028 });
  const topDealsProps = {
    title: "Top Rated Products",
    products: topDealsProductsData,
  };
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
        </article>
      </main>
    </MainWrapper>
  );
};
