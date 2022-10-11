import React from "react";
import { GridX } from "../../app.styles";
import { MainWrapper } from "./categoryStats.styles";

export const CategoryStats = ({ stats }) => {
  return (
    <MainWrapper>
      <GridX>
        <div class="inner grid-x">
          {stats.map(({ text, number }) => (
            <div class="cell small-4 text-center">
              {number} <span class="stat-text">{text}</span>
            </div>
          ))}
        </div>
      </GridX>
    </MainWrapper>
  );
};
