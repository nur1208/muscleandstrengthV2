import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MainWrapper } from "./categories.styles";
import { categoriesData } from "./data";

export const Categories = () => {
  return (
    <MainWrapper>
      {categoriesData.map(({ title, items, img }, index) => (
        <div
          key={`${title}-${index}-index`}
          class="cell small-12 bp740-6 large-4"
        >
          <h2 class="grey-stripe">
            <a
              class="main-cat"
              href="/store/category/protein.html"
            >
              {title}
              <span class="caret-right"></span>
            </a>
          </h2>
          <ul class="sub-cats">
            {items.map((item, index) => (
              <li key={`${index}-index`}>
                <a href="https://www.muscleandstrength.com/store/promos.html?filter=eyJvcmRlciI6InNvcnRfb3JkZXIgZGVzYyxzYWxlc19yYW5raW5nIGFzYyIsImJyYW5kZmlsdGVyIjpbXSwiY2F0ZWdvcnlmaWx0ZXIiOlsiOSJdLCJjbGFzc2ZpbHRlciI6W119">
                  {index === 0 && (
                    <SvgWrapper childStyle="width:.9em; height:.9em; margin-right:.2em; margin-bottom:-.1em">
                      {getIconById(
                        ICONS_ID.IconDeal,
                        null,
                        "#079c3a"
                      )}
                    </SvgWrapper>
                  )}
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            class="img-wrap"
            href="/store/category/protein.html"
          >
            <picture>
              <source
                media="(max-width: 739px)"
                srcset={img.srcsetMobile}
              />
              <source
                media="(min-width: 740px)"
                srcset={img.srcsetMobile}
              />
              <img
                class=" lazyloaded"
                alt="Tubs of Protein"
                src={img.src}
              />
            </picture>
          </a>
        </div>
      ))}
    </MainWrapper>
  );
};
