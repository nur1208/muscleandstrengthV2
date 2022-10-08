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
  category,
} from "../../components/data";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./workoutCategory.styles";

export const WorkoutCategory = () => {
  const { type } = useParams();
  const currentCategory = category.find(({ href }) => {
    return href.split("/")[href.split("/").length - 1] === type;
  });

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(
      `category=${currentCategory?.categoryName}`,
      (data) => ({
        categoryArticles: data.doc,
      })
    );

    fetchArticles(
      `category=${currentCategory?.categoryName}&sort=-createdAt&limit=3`,
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
