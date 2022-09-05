import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MainWrapper } from "./categories.styles";

export const Categories = () => {
  return (
    <MainWrapper>
      {Array(12)
        .fill(true)
        .map(() => (
          <div class="cell small-12 bp740-6 large-4">
            <h2 class="grey-stripe">
              <a
                class="main-cat"
                href="/store/category/protein.html"
              >
                Protein<span class="caret-right"></span>
              </a>
            </h2>
            <ul class="sub-cats">
              <li>
                <a href="https://www.muscleandstrength.com/store/promos.html?filter=eyJvcmRlciI6InNvcnRfb3JkZXIgZGVzYyxzYWxlc19yYW5raW5nIGFzYyIsImJyYW5kZmlsdGVyIjpbXSwiY2F0ZWdvcnlmaWx0ZXIiOlsiOSJdLCJjbGFzc2ZpbHRlciI6W119">
                  <SvgWrapper childStyle="width:.9em; height:.9em; margin-right:.2em; margin-bottom:-.1em">
                    {getIconById(
                      ICONS_ID.IconDeal,
                      null,
                      "#079c3a"
                    )}
                  </SvgWrapper>
                  Protein Deals (152)
                </a>
              </li>
              <li>
                <a href="/store/category/protein/whey-protein.html">
                  Whey Protein
                </a>
              </li>
              <li>
                <a href="/store/category/protein/vegan-protein-supplements.html">
                  Vegan Protein
                </a>
              </li>
              <li>
                <a href="/store/category/protein/bars.html">
                  Protein Bars
                </a>
              </li>
              <li>
                <a href="/store/category/protein/whey-protein-isolate.html">
                  Whey Protein Isolate
                </a>
              </li>
              <li class="last">
                <a href="/store/category/protein.html">
                  Shop all Protein
                </a>
              </li>
            </ul>
            <a
              class="img-wrap"
              href="/store/category/protein.html"
            >
              <picture>
                <source
                  media="(max-width: 739px)"
                  data-srcset="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/category/category-main/top/protein-mobile.jpg"
                  srcset="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/category/category-main/top/protein-mobile.jpg"
                />
                <source
                  media="(min-width: 740px)"
                  data-srcset="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/category/category-main/top/protein-desktop.jpg"
                  srcset="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/category/category-main/top/protein-desktop.jpg"
                />
                <img
                  class=" lazyloaded"
                  data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/category/category-main/top/protein-desktop.jpg"
                  alt="Tubs of Protein"
                  src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/category/category-main/top/protein-desktop.jpg"
                />
              </picture>
            </a>
          </div>
        ))}
    </MainWrapper>
  );
};
