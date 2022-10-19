import React from "react";
import { Link } from "react-router-dom";
import { GridX } from "../../app.styles";
import { MainWrapper } from "./mainPageCategory.styles";

export const MainPageCategory = ({ category, isSmall }) => {
  return (
    <MainWrapper>
      <GridX>
        <div
          class={`grid-x grid-margin-x grid-margin-y small-up-2 ${
            isSmall ? "" : "bp600-up-3 medium-up-4"
          }`}
        >
          {category.map(({ href, imgUrl, categoryName }) => (
            <div class="cell">
              <Link to={href}>
                <img
                  data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP"
                  class=" ls-is-cached lazyloaded"
                  width="400"
                  height="250"
                  alt={categoryName}
                  src={imgUrl}
                />
              </Link>
              <Link to={href}>
                <div class="category-name">{categoryName}</div>
              </Link>
            </div>
          ))}
        </div>
      </GridX>
    </MainWrapper>
  );
};
