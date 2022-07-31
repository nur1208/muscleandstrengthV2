import React from "react";

import {
  Header,
  SitewideBanner,
  FrontHero,
  InPageNav,
} from "../../components";
import { MainWrapper } from "./home.styles";
import { MenuMask } from "./MenuMask";

export const Home = () => {
  return (
    <MainWrapper>
      <div>
        <div>
          <SitewideBanner />
          <Header />
          <FrontHero />
          <InPageNav />
        </div>
        <MenuMask />
      </div>
    </MainWrapper>
  );
};
