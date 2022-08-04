import React from "react";
import { MainWrapper } from "./brands.stylels";

export const Brands = () => {
  return (
    <MainWrapper>
      <h2 class="grey-stripe">Top Brands</h2>

      <ul class="top-brand-list grid-x grid-margin-x">
        {Array(16)
          .fill(true)
          .map(() => (
            <li class="cell small-6 bp740-4 large-3">
              <div class="manufacturer_box vmiddle">
                <a href="https://www.muscleandstrength.com/store/brands/muscletech">
                  <picture>
                    <source srcset="https://cdn.muscleandstrength.com/store/media/mnsresized/aitmanufacturers/0aefbb/250/180/53.jpg 2x" />
                    <img
                      src="https://cdn.muscleandstrength.com/store/media/mnsresized/aitmanufacturers/0aefbb/150/80/53.jpg"
                      alt="MuscleTech Brand Logo"
                    />
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
