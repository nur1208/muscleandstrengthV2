import React from "react";

import {
  Header,
  FrontHero,
  InPageNav,
  Banner,
  Articles,
} from "../../components";
import { articlesData } from "../../components/articles/data";
import {
  BANNER_BLOCK_12,
  BANNER_BLOCK_19,
} from "../../components/banner/data";
import { MainWrapper } from "./home.styles";
import { MenuMask } from "./MenuMask";
export const Home = () => {
  return (
    <MainWrapper>
      <div>
        <div>
          <Banner {...BANNER_BLOCK_12} />
          <Header />
          <FrontHero />
          <InPageNav />
          <main id="main-wrap">
            <div style={{ marginBottom: "25px" }}>
              <Banner {...BANNER_BLOCK_19} />
            </div>
            {articlesData.map((articleData) => (
              <Articles {...articleData} />
            ))}
          </main>
        </div>
        <MenuMask />
      </div>
    </MainWrapper>
  );
};
