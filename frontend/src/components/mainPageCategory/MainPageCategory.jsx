import React from "react";
import { GridX } from "../../app.styles";
import { category } from "./data";
import { MainWrapper } from "./mainPageCategory.styles";

export const MainPageCategory = () => {
  return (
    <MainWrapper>
      <GridX>
        <div class="grid-x grid-margin-x grid-margin-y small-up-2 bp600-up-3 medium-up-4">
          {category.map(({ href, imgUrl, categoryName }) => (
            <div class="cell">
              <a href="/workouts/men">
                <img
                  data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP"
                  class=" ls-is-cached lazyloaded"
                  width="400"
                  height="250"
                  alt={categoryName}
                  src={imgUrl}
                />
              </a>
              <a href={href}>
                <div class="category-name">{categoryName}</div>
              </a>
            </div>
          ))}
        </div>
      </GridX>
    </MainWrapper>
  );
};
