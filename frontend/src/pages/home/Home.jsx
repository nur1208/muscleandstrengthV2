import React from "react";

import {
  Header,
  FrontHero,
  InPageNav,
  Banner,
} from "../../components";
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
            <Banner {...BANNER_BLOCK_19} />
          </main>
        </div>
        <MenuMask />
      </div>
    </MainWrapper>
  );
};
