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
import { MainWrapper } from "./recipes.styles";

export const Recipes = () => {
  const {
    data: { newRecipesArticles, trendingRecipesArticles },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(`type=New Recipes&limit=6`, (data) => ({
      newRecipesArticles: data.doc,
    }));

    fetchArticles(`type=Trending Recipes&limit=6`, (data) => ({
      trendingRecipesArticles: data.doc,
    }));
  }, []);

  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <FrontHero type={FRONT_HERO_TYPE.RECIPES} />
      <div id="main-wrap">
        <div className="main-content">
          <div className="content">
            <TaxonomyHeading
              heading="Recipe Categories"
              subheading="Eating for your fitness goal doesn't mean bland, tasteless food. Find delicious and easy to prepare recipes by meal type or diet preferences."
            />
            <MainPageCategory category={categoryDiet} />
            <Articles
              title="New Recipes"
              subTitle="New recipes just added. Stay up-to-date with new recipes, workouts, guides and more by subscribing to our weekly newsletter. It's free, spam not included."
              articles={newRecipesArticles}
            />
            <Articles
              title="Trending Recipes"
              subTitle="Popular recipes our visitors are preparing this week. Let our contributors know what you think of their recipes! Leave a comment at the bottom of the recipe page."
              articles={trendingRecipesArticles}
            />
          </div>
        </div>
      </div>

      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
