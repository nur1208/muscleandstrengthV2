import React from "react";
import { MainWrapper } from "./brands.stylels";
import { brandsData } from "./data";

export const Brands = () => {
  return (
    <MainWrapper>
      <h2 class="grey-stripe">Top Brands</h2>

      <ul class="top-brand-list grid-x grid-margin-x">
        {brandsData.map(({ href, srcset, imgUrl, alt }) => (
          <li class="cell small-6 bp740-4 large-3">
            <div class="manufacturer_box vmiddle">
              <a href={href}>
                <picture>
                  <source srcset={srcset} />
                  <img src={imgUrl} alt={alt} />
                </picture>
              </a>
              <br />
            </div>
          </li>
        ))}
      </ul>
    </MainWrapper>
  );
};
