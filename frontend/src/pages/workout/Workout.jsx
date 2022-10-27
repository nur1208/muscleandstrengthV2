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
  MainPageQuestions,
  TaxonomyHeading,
} from "../../components";
import {
  articlesWorkout,
  BANNER_BLOCK_12,
  categoryWorkout,
  workoutStats,
} from "../../components/data";
import { FRONT_HERO_TYPE } from "../../components/frontHero/utils";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./workout.styles";

export const Workout = () => {
  const {
    data: { bestWorkoutsArticles, newWorkoutsArticles },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticles(`type=Best Workouts&limit=6`, (data) => ({
      bestWorkoutsArticles: data.doc,
    }));

    fetchArticles(`type=New Workouts&limit=6`, (data) => ({
      newWorkoutsArticles: data.doc,
    }));

    //
  }, []);

  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <FrontHero type={FRONT_HERO_TYPE.WORKOUT} />
      <CategoryStats stats={workoutStats} />
      <div id="main-wrap">
        <div className="main-content">
          <div className="content">
            <TaxonomyHeading
              heading="Workout Categories"
              subheading="Choose a category that best suits the workout you're
        searching for. Once in the category, use the sort and
        filter options to find the right workout for your
        experience and goals."
            />
            <MainPageCategory category={categoryWorkout} />
            <Articles
              title="Best Workouts"
              subTitle='The most downloaded workouts in our database during the past 24 hours. You can also find top/trending workouts by choosing a category (above) and scrolling to the "trending" view.'
              articles={bestWorkoutsArticles}
            />
            <Articles
              title="New Workouts"
              subTitle="Just added to the database. To keep up with new workouts we add (and other articles, expert guides, tools etc.) "
              articles={newWorkoutsArticles}
            />

            <TaxonomyHeading heading="Workout Tips & Advice" />
            <MainPageQuestions />
          </div>
        </div>
      </div>
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
