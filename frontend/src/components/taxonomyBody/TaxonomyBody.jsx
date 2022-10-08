import React from "react";
import { useSelector } from "react-redux";
import { GridX } from "../../app.styles";
import { Article } from "../article/Article";
import { articlesWorkout } from "../data";
import { Pager } from "../pager/Pager";
import { ViewSortSwitcher } from "../viewSortSwitcher/ViewSortSwitcher";
import { MainWrapper } from "./taxonomyBody.styles";

export const TaxonomyBody = () => {
  const {
    data: { categoryArticles },
  } = useSelector((state) => state.article_store);

  return (
    <MainWrapper>
      <ViewSortSwitcher />
      <div id="mnsview-list" class="base-content-grid">
        <div class="css-loader-container ajax-loader-block">
          <span class="css-loader-block">
            <span class="ajax-loading"></span>
          </span>
        </div>
        <GridX>
          <div class="grid-x grid-margin-x grid-margin-y">
            {categoryArticles.map((article) => (
              <div
                key={article._id}
                className="cell small-12 bp600-6"
              >
                <Article {...article} isWorkout={false} />
              </div>
            ))}
          </div>
        </GridX>
        <Pager />
      </div>
    </MainWrapper>
  );
};
