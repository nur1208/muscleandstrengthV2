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
  categoryArticle,
} from "../../components/data";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./workoutCategory.styles";

export const WorkoutCategory = ({ isArticle }) => {
  const { type } = useParams();
  let currentCategory;

  const findCurrentCategory = ({ href }) => {
    return href.split("/")[href.split("/").length - 1] === type;
  };
  if (isArticle) {
    currentCategory = categoryArticle.find(findCurrentCategory);
  } else {
    currentCategory = categoryWorkout.find(findCurrentCategory);
  }

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticles(
      `category[all]=${
        currentCategory?.categoryName
      }&category[all]=${isArticle ? "Articles" : "Workouts"}`,
      (data) => ({
        categoryArticles: data.doc,
      })
    );

    fetchArticles(
      `category[all]=${
        currentCategory?.categoryName
      }&category[all]=${
        isArticle ? "Articles" : "Workouts"
      }&sort=-createdAt&limit=3`,
      (data) => ({
        categoryNewArticles: data.doc,
      })
    );

    // createdAt;
  }, [type, isArticle]);

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
