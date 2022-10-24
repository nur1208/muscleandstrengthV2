import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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
import { useReduxActions } from "../../hooks";

import { MainWrapper } from "./home.styles";
export const Home = () => {
  const {
    data: { newAtMSArticles },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(
      `type=New at Muscle and Strength&limit=6`,
      (data) => ({
        newAtMSArticles: data.doc,
      })
    );
  }, []);

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
            <Articles
              title="New at Muscle & Strength"
              articles={newAtMSArticles}
            />

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
