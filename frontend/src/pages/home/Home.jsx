import React from "react";
import { SitewideBanner } from "../../components";
import { MainWrapper } from "./home.styles";

export const Home = () => {
  return (
    <MainWrapper>
      <div>
        <SitewideBanner />
      </div>
    </MainWrapper>
  );
};
