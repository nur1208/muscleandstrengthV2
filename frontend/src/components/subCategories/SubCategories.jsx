import React from "react";
import { GridX } from "../../app.styles";
import { MainWrapper } from "./subCategories.styles";

export const SubCategories = ({ categories }) => {
  return (
    <MainWrapper>
      <div class="grey-stripe">
        <h2>Protein Categories</h2>
      </div>
      <GridX>
        <div className="grid-x grid-margin-x">
          {categories.map((title) => (
            <a
              class="cell small-12 bp600-4 bp960-3 bp1280-3"
              href="https://www.muscleandstrength.com/store/category/protein/whey-protein.html"
            >
              <div class="inner-wrap">
                <div class="title">{title}</div>
                <span class="caret-right"></span>
              </div>
            </a>
          ))}
        </div>
      </GridX>
    </MainWrapper>
  );
};
