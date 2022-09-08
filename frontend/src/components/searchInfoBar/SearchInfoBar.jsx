import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { MainWrapper } from "./searchInfoBar.styles";

export const SearchInfoBar = ({ hasSort, countStore, q }) => {
  return (
    <MainWrapper>
      <div class="text-wrap">Showing results for '{q}' </div>
      {hasSort ? (
        <div class="sort-wrap">
          <div class="option-wrap">
            <div class="option active">
              <a
                href="https://www.muscleandstrength.com/store/category/protein.html?___store=us&amp;dir=asc&amp;order=sales_ranking"
                class="inner-wrap"
              >
                Most Popular
              </a>
            </div>
            <div class="option">
              <a
                href="https://www.muscleandstrength.com/store/category/protein.html?___store=us&amp;dir=asc&amp;order=price"
                class="inner-wrap"
              >
                Price
              </a>
            </div>
            <div class="option">
              <a
                href="https://www.muscleandstrength.com/store/category/protein.html?___store=us&amp;dir=asc&amp;order=name"
                class="inner-wrap"
              >
                Name
              </a>
            </div>
            <div class="option option-toggle">
              <div class="inner">
                <a href="https://www.muscleandstrength.com/store/category/protein.html?___store=us&amp;dir=desc&amp;order=sales_ranking">
                  ASC
                  {getIconById(ICONS_ID.IconAsc)}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="store-control sort-wrap"
          id="search-result-tabs"
        >
          <ul>
            <li>
              <a
                href="https://www.muscleandstrength.com/store/search?q=Perfect+Sports"
                class="store-control__link
             store-control__link--current            "
              >
                <span class="store-control__link__title">
                  Store
                </span>
                <span class="store-control__link__count">
                  ({countStore || 0})
                </span>
              </a>
            </li>
            <li class="toggle-switch">
              <a
                href="https://www.muscleandstrength.com/store/search/articles?q=Perfect+Sports"
                class="products"
              >
                <div class="switch-node"></div>
              </a>
            </li>
            <li>
              <a
                href="https://www.muscleandstrength.com/store/search/articles?q=Perfect+Sports"
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
      )}
    </MainWrapper>
  );
};
