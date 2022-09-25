import React from "react";
import { GridX } from "../../app.styles";
import { MainWrapper } from "./categoryStats.styles";

export const CategoryStats = () => {
  return (
    <MainWrapper>
      <GridX>
        <div class="inner grid-x">
          <div class="cell small-4 text-center">
            1000+ <span class="stat-text">Workouts</span>
          </div>
          <div class="cell small-4 text-center">
            297M<span class="stat-text">Downloads</span>
          </div>
          <div class="cell small-4 text-center">
            120+ <span class="stat-text">Contributors</span>
          </div>
        </div>
      </GridX>
    </MainWrapper>
  );
};
