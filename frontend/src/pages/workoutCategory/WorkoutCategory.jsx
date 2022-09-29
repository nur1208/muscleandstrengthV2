import React from "react";
import {
  Banner,
  EmailSignUp,
  Footer,
  Header,
  TaxonomyBody,
  TaxonomyFeatured,
  TaxonomyHeading,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./workoutCategory.styles";

export const WorkoutCategory = () => {
  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <div id="main-wrap">
        <div className="content">
          <TaxonomyHeading
            heading="Workouts For Men"
            subheading="We have a huge range of free downloadable workouts for men designed by fitness experts and trainers. Find the best workout for your goal, experience, desired training style and equipment access."
          />
          <TaxonomyFeatured />
          <TaxonomyBody />
        </div>
      </div>
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
