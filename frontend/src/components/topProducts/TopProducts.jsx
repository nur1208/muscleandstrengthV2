import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { Button } from "../button/Button";
import { MainWrapper } from "./topProducts.styles";

export const TopProducts = () => {
  return (
    <MainWrapper>
      <ol class="reviewProductList">
        {Array(50)
          .fill(true)
          .map((_, index) => (
            <li key={`product-${index}`}>
              <div class="prodRank">
                <span class="rank">{1 + index}</span>
              </div>
              <div class="prodImg">
                <a href="https://www.muscleandstrength.com/store/combat-powder.html">
                  <img
                    class=" lazyloaded"
                    data-src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/combat_protein_powder_4lbs_chocolate_milk_2.jpg"
                    alt="Combat Protein Powder"
                    src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/combat_protein_powder_4lbs_chocolate_milk_2.jpg"
                  />
                </a>
              </div>
              <h4 class="product-title">
                <a
                  style={{ color: "#333" }}
                  href="https://www.muscleandstrength.com/store/combat-powder.html"
                >
                  MusclePharm Combat Protein Powder
                </a>
              </h4>
              <div class="brand">
                <a
                  class="brand-img"
                  href="https://www.muscleandstrength.com/store/brands/musclepharm"
                >
                  <img
                    class=" lazyloaded"
                    data-src="https://cdn.muscleandstrength.com/store/media/aitmanufacturers/logo/95.jpg"
                    alt="MusclePharm Supplements: Lowest Price at Muscle &amp; Strength!"
                    src="https://cdn.muscleandstrength.com/store/media/aitmanufacturers/logo/95.jpg"
                  />
                </a>
                <div class="deal-count">
                  <div class="count-box">10</div>
                  <span class="label-title">Deals</span>
                  <span class="label-dsc">running</span>
                </div>
                <div class="prod-count">
                  <div class="count-box">25</div>
                  <span class="label-title">Products</span>
                  <span class="label-dsc">available</span>
                </div>
                <Button text="View Brand" isSmall isBlue />
              </div>
              <div class="prodData">
                <div class="font-s-small brand-label">
                  By:{" "}
                  <a href="https://www.muscleandstrength.com/store/brands/musclepharm">
                    MusclePharm
                  </a>
                </div>
                <div class="tagline">
                  Advanced Time Release Protein Feeds Muscles For
                  8 Hours*
                </div>
                <a
                  class="promo-label label success"
                  href="/store/combat-powder.html"
                  title="LIMITED TIME PRICE CUT"
                >
                  <SvgWrapper childStyle="width: 1em; height: 1em; margin-bottom: -0.1em; margin-right: 0.2em;">
                    {getIconById(ICONS_ID.IconDealWhite)}
                  </SvgWrapper>
                  {/* <svg style=>
                    <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-deal-white"></use>
                  </svg> */}
                  LIMITED TIME PRICE CUT{" "}
                </a>
                <Button text="View Product" isSmall isBlue />
              </div>
            </li>
          ))}
      </ol>
    </MainWrapper>
  );
};
