import React from "react";
import { Link } from "react-router-dom";
import { GridX } from "../../app.styles";
import { MainWrapper } from "./subCategories.styles";

export const SubCategories = ({ categories, category }) => {
  return (
    <MainWrapper>
      <div class="grey-stripe">
        <h2>Protein Categories</h2>
      </div>
      <GridX>
        <div className="grid-x grid-margin-x">
          {categories.map((title) => (
            <Link
              class="cell small-12 bp600-4 bp960-3 bp1280-3"
              to={`/store/category/${category}/${title
                .replace(" ", "-")
                .toLowerCase()}`}
            >
              <div class="inner-wrap">
                <div class="title">{title}</div>
                <span class="caret-right"></span>
              </div>
            </Link>
          ))}
        </div>
      </GridX>
    </MainWrapper>
  );
};
