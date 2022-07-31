import React from "react";

import {
  Header,
  SitewideBanner,
  FrontHero,
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
        </div>
        <MenuMask />
      </div>
    </MainWrapper>
  );
};
