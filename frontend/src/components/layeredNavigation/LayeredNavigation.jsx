import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { Button } from "../button/Button";
import { layeredNavigationData } from "./data";
import { Item } from "./Item";
import { MainWrapper } from "./layeredNavigation.styles";

export const LayeredNavigation = () => {
  return (
    <MainWrapper>
      <div class="block block-layered-nav">
        <div class="block-content">
          <div class="block-subtitle">
            <div class="text">
              Showing results for 'Perfect Sports'{" "}
            </div>
            <div class="btn-tab-container">
              <h2 class="blue-stripe btn-tab">All Products</h2>
              <Button
                isSmall
                isLightBlue
                text="Sort &amp; Filter"
              />
              {/* <div class="btn btn-sm btn-light-blue btn-tab">
                
              </div> */}
            </div>
          </div>
          <div
            class="block-content__filters refine-search-wrap"
            style={{ display: "block" }}
          >
            <div class="sorting-bar a-promo-sort-bar">
              <div class="option-wrap">
                <div class="option">
                  <a
                    href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=asc&amp;order=sales_ranking&amp;q=Perfect+Sports+"
                    class="inner-wrap"
                  >
                    Most Popular
                  </a>
                </div>
                <div class="option">
                  <a
                    href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=asc&amp;order=price&amp;q=Perfect+Sports+"
                    class="inner-wrap"
                  >
                    Price
                  </a>
                </div>
                <div class="option">
                  <a
                    href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=asc&amp;order=name&amp;q=Perfect+Sports+"
                    class="inner-wrap"
                  >
                    Name
                  </a>
                </div>
              </div>
              <div class="option option-toggle">
                <div class="inner">
                  <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=desc&amp;order=position&amp;q=Perfect+Sports+">
                    ASC {getIconById(ICONS_ID.IconAsc)}
                  </a>
                </div>
              </div>
            </div>
            {layeredNavigationData.map((item) => (
              <Item {...item} />
            ))}

            <div class="filter-process button-row">
              <Button isSmall isBlue text="Apply Filters" />
              {/* <button
                id="layered-navigation-apply"
                class="filters-done btn btn-blue btn-sm"
              ></button> */}
              <Button isSmall text="Reset" />
              {/* 
              <button
                data-clear="https://www.muscleandstrength.com/store/search?___store=us&amp;q=Perfect+Sports+"
                class="clear-filters btn btn-sm"
              >
                Reset
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
