import React from "react";
import { MainWrapper } from "./mobileTabs.styles";

export const MobileTabs = () => {
  return (
    <MainWrapper>
      <div
        class="store-control sort-wrap"
        id="search-result-tabs"
      >
        <ul>
          <li>
            <a
              href="https://www.muscleandstrength.com/store/search?q=Perfect+Sports+"
              class="store-control__link
             store-control__link--current            "
            >
              <span class="store-control__link__title">
                Store
              </span>
              <span class="store-control__link__count">
                (39)
              </span>
            </a>
          </li>
          <li class="toggle-switch">
            <a
              href="https://www.muscleandstrength.com/store/search/articles?q=Perfect+Sports+"
              class="products"
            >
              <div class="switch-node"></div>
            </a>
          </li>
          <li>
            <a
              href="https://www.muscleandstrength.com/store/search/articles?q=Perfect+Sports+"
              class="store-control__link
             store-control__link--other            "
            >
              <span class="store-control__link__title">
                Articles
              </span>
              <span class="store-control__link__count">
                (242)
              </span>
            </a>
          </li>
        </ul>
      </div>
    </MainWrapper>
  );
};
