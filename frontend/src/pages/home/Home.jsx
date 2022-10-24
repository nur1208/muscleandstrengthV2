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
    data: {
      trendingInArticles,
      newAtMSArticles,
      trendingInWorkoutsArticles,
      mostViewedExerciseGuides,
    },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(
      `type=New at Muscle and Strength&limit=6`,
      (data) => ({
        newAtMSArticles: data.doc,
      })
    );
    fetchArticles(
      `type=Trending in Workouts&limit=6`,
      (data) => ({
        trendingInWorkoutsArticles: data.doc,
      })
    );

    fetchArticles(
      `type=Trending in Articles&limit=6`,
      (data) => ({
        trendingInArticles: data.doc,
      })
    );

    fetchArticles(
      `type=Most Viewed Exercise Guides&limit=6`,
      (data) => ({
        mostViewedExerciseGuides: data.doc,
      })
    );

    //
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
            <Articles
              title="Trending in Workouts"
              articles={trendingInWorkoutsArticles}
            />
            <Articles
              title="Trending in Articles"
              articles={trendingInArticles}
            />
            <Articles
              title="Most Viewed Exercise Guides"
              articles={mostViewedExerciseGuides}
            />
          </main>
        </div>

        <EmailSignUp />
        <Footer />
      </div>
    </MainWrapper>
  );
};
