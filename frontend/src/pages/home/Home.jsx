import React from "react";
import { Header, SitewideBanner } from "../../components";
import { MainWrapper } from "./home.styles";

export const Home = () => {
  return (
    <MainWrapper>
      <div>
        <SitewideBanner />
        <Header />
      </div>
    </MainWrapper>
  );
};
