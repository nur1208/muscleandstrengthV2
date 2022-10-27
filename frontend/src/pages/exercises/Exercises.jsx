import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Articles,
  Banner,
  CategoryStats,
  EmailSignUp,
  Footer,
  FrontHero,
  Header,
  MainPageCategory,
  TaxonomyHeading,
} from "../../components";
import {
  BANNER_BLOCK_12,
  exercisesByEquCategory,
  exercisesByMachCategory,
  exercisesCategory,
  exercisesState,
} from "../../components/data";
import { FRONT_HERO_TYPE } from "../../components/frontHero/utils";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./exercises.styles";

export const Exercises = () => {
  const {
    data: { mostPopularExercises },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticles(
      `type=Most Popular Exercises&limit=12`,
      (data) => ({
        mostPopularExercises: data.doc,
      })
    );
  }, []);

  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <FrontHero type={FRONT_HERO_TYPE.EXERCISE} />
      <CategoryStats stats={exercisesState} />
      <div id="main-wrap">
        <div className="main-content">
          <div className="content">
            {/* <Articles
              title="Diet Guides"
              subTitle="Confused about what diet you should follow? Our guides explain the different approaches to nutrition in detail. Read these guides and choose a diet style that best suits your goals, food preferences and lifestyle."
              articles={[]}
            /> */}
            <TaxonomyHeading
              heading="Excercises by Muscle Group"
              subheading="Choose the muscle group you want to target. Once in the muscle group, use the sort and filter options to find the best exercises for the equipment you have, your training experience, and goals."
            />
            <MainPageCategory category={exercisesCategory} />
            <Articles
              title="Most Popular Exercises"
              subTitle="These exercises are the most used by our visitors. Workout creators frequently choose these exercises in their workout plans because they are effective for their goal."
              articles={mostPopularExercises}
            />
            <TaxonomyHeading
              heading="Excercises by Equipment"
              subheading="Don't have access to a gym? No problem. You can view exercises by equipment required. Check out our 5 day dumbbell workout for a dumbbell-only plan"
            />
            <MainPageCategory
              category={exercisesByEquCategory}
            />
            <TaxonomyHeading
              heading="Excercises by Mechanics"
              subheading="View all exercises by mechanics."
            />
            <MainPageCategory
              isSmall
              category={exercisesByMachCategory}
            />
          </div>
        </div>
      </div>
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
