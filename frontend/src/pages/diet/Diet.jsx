import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Articles,
  Banner,
  EmailSignUp,
  Footer,
  FrontHero,
  Header,
  MainPageCategory,
  TaxonomyHeading,
} from "../../components";
import {
  BANNER_BLOCK_12,
  categoryDiet,
} from "../../components/data";
import { FRONT_HERO_TYPE } from "../../components/frontHero/utils";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./diet.styles";

export const Diet = () => {
  const {
    data: { dietGuidesArticles, trendingNutritionArticles },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(`type=Diet Guides&limit=10`, (data) => ({
      dietGuidesArticles: data.doc,
    }));

    fetchArticles(
      `type=Trending Nutrition Articles&limit=6`,
      (data) => ({
        trendingNutritionArticles: data.doc,
      })
    );
  }, []);

  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <FrontHero type={FRONT_HERO_TYPE.DIET} />
      <div id="main-wrap">
        <div className="main-content">
          <div className="content">
            <Articles
              title="Diet Guides"
              subTitle="Confused about what diet you should follow? Our guides explain the different approaches to nutrition in detail. Read these guides and choose a diet style that best suits your goals, food preferences and lifestyle."
              articles={dietGuidesArticles}
            />
            <TaxonomyHeading
              heading="Healthy Recipes"
              subheading="Learn how to prepare meals that taste great and support your fitness goals."
            />
            <MainPageCategory category={categoryDiet} />
            <Articles
              title="Trending Nutrition Articles"
              subTitle="These must-read nutrition articles are currently trending on Muscle & Strength."
              articles={trendingNutritionArticles}
            />
          </div>
        </div>
      </div>

      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
