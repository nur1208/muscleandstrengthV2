import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Banner,
  EmailSignUp,
  Footer,
  Header,
  TaxonomyBody,
  TaxonomyFeatured,
  TaxonomyHeading,
} from "../../components";
import {
  BANNER_BLOCK_12,
  categoryWorkout,
} from "../../components/data";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./workoutCategory.styles";

export const WorkoutCategory = () => {
  const { type } = useParams();
  const currentCategory = categoryWorkout.find(({ href }) => {
    return href.split("/")[href.split("/").length - 1] === type;
  });

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(
      `category[all]=${currentCategory?.categoryName}&category[all]=Workouts`,
      (data) => ({
        categoryArticles: data.doc,
      })
    );

    fetchArticles(
      `category[all]=${currentCategory?.categoryName}&category[all]=Workouts&sort=-createdAt&limit=3`,
      (data) => ({
        categoryNewArticles: data.doc,
      })
    );

    // createdAt;
  }, [type]);

  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <div id="main-wrap">
        <div className="content">
          <TaxonomyHeading
            heading={currentCategory?.categoryName}
            subheading={currentCategory?.decs}
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
