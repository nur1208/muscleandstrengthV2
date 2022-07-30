import React from "react";

import { Header, SitewideBanner } from "../../components";
import { MainWrapper } from "./home.styles";
import { MenuMask } from "./MenuMask";

export const Home = () => {
  return (
    <MainWrapper>
      <div>
        <div>
          <SitewideBanner />
          <Header />
        </div>
        <MenuMask />
      </div>
    </MainWrapper>
  );
};
