import React from "react";
import { Link } from "react-router-dom";
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
            <Link
              class="main-cat"
              to={`/store/category/${title.toLocaleLowerCase()}`}
            >
              {title}
              <span class="caret-right"></span>
            </Link>
          </h2>
          <ul class="sub-cats">
            {items.map((item, index) => (
              <li key={`${index}-index`}>
                <Link
                  to={
                    index === items.length - 1
                      ? `/store/category/${title.toLocaleLowerCase()}`
                      : `/store/category/${title.toLocaleLowerCase()}/${item
                          .replace(" ", "-")
                          .toLocaleLowerCase()}`
                  }
                >
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
                </Link>
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
