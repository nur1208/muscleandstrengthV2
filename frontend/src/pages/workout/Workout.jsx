import React from "react";
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
import { MainWrapper } from "./workout.styles";

export const Workout = () => {
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
            {articlesWorkout.map((data) => (
              <Articles {...data} />
            ))}
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
