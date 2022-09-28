import React from "react";

import {
  Header,
  FrontHero,
  InPageNav,
  Banner,
  Articles,
  EmailSignUp,
  Footer,
} from "../../components";
import {
  articlesData,
  BANNER_BLOCK_12,
  BANNER_BLOCK_19,
} from "../../components/data";
import { FRONT_HERO_TYPE } from "../../components/frontHero/utils";

import { MainWrapper } from "./home.styles";
export const Home = () => {
  return (
    <MainWrapper id="page">
      <div>
        <div id="screen">
          <Banner {...BANNER_BLOCK_12} />
          <Header />
          <FrontHero type={FRONT_HERO_TYPE.HOME} />
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

        <EmailSignUp />
        <Footer />
      </div>
    </MainWrapper>
  );
};
