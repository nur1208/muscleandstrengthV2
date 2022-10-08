import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GridX } from "../../app.styles";
import { Button } from "../button/Button";
import { MainWrapper } from "./taxonomyFeatured.styles";

export const TaxonomyFeatured = () => {
  const {
    data: { categoryNewArticles },
  } = useSelector((state) => state.article_store);

  return (
    <MainWrapper>
      <h2>What's New</h2>
      <div class="featured-taxonomy-content">
        <GridX>
          <div class="grid-x grid-margin-x grid-margin-y">
            {categoryNewArticles.map(
              (
                { imgAlt, imgUrl, title, _id, shortSummary },
                index
              ) => (
                <div
                  class="cell small-12 bp600-4"
                  key={`cell-${index}`}
                >
                  <Link to={`articles/${_id}`}>
                    <img
                      //   data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj"
                      class=" lazyloaded"
                      width="800"
                      height="500"
                      alt={imgAlt}
                      src={imgUrl[0] || imgUrl[1]}
                    />
                  </Link>
                  <Link to={`articles/${_id}`}>
                    <h5>{title}</h5>
                  </Link>
                  <p>{shortSummary}</p>
                  <Link to={`articles/${_id}`}>
                    <Button text="View Workout" isBlue />
                  </Link>
                </div>
              )
            )}
          </div>
        </GridX>
      </div>
    </MainWrapper>
  );
};
