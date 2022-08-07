import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { RatingBox } from "../ratingBox/RatingBox";
import { MainWrapper } from "./productHeader.styles";

export const ProductHeader = () => {
  return (
    <MainWrapper>
      <div class="ship-to-block tooltip tooltipstered">
        <div class="ship-to-wrapper">
          <span class="svg_flag svg_flag-hk"></span>
          <i class="svg-express-delivery svg-icon"></i>
        </div>
      </div>
      <div class="product-image">
        <picture class="large">
          <source
            width="400"
            height="400"
            srcset="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/400x400/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apex_whey_5lbs_chocolate_ice_cream_1.jpg 400w"
            media="(max-width: 400px)"
          />
          <source
            width="600"
            height="600"
            srcset="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/600x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apex_whey_5lbs_chocolate_ice_cream_1.jpg 600w"
            media="(max-width: 1080px)"
          />
          <img
            itemprop="image"
            id="image"
            width="700"
            height="700"
            src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apex_whey_5lbs_chocolate_ice_cream_1.jpg"
            alt="Apex Grass-Fed Whey Protein"
            title="Apex Grass-Fed Whey Protein"
          />
        </picture>
      </div>
      <div class="product-title-wrap">
        <h1 class="product-title" itemprop="name">
          Perfect Sports Apex Grass-Fed Whey Protein{" "}
        </h1>
      </div>
      <div class="product-info">
        <span
          class="brand"
          itemprop="brand"
          itemscope=""
          itemtype="http://schema.org/Brand"
        >
          A{" "}
          <a itemprop="url" href="/store/brands/muscletech">
            <span itemprop="name">MuscleTech</span>
          </a>{" "}
          Product{" "}
        </span>
        <div class="tagline">
          Fuels Muscles Quickly So You Can Continue To Perform at
          a High Level
        </div>
        <ul class="product-features">
          <li>24g of ultra-premium, clean protein</li>
          <li>Microfiltered for less carbs and fat</li>
          <li>5.5g of BCAAs and 4g of glutamine</li>
          <li>Gluten free, easy-to-mix delicious flavors</li>
        </ul>
      </div>
      <div class="product-data">
        <a
          tabindex="0"
          href="#reviews"
          class="review-status-button"
          itemprop="aggregateRating"
          itemscope=""
          itemtype="http://schema.org/AggregateRating"
        >
          <RatingBox width={91} />
          <span class="button-text">
            179 <span class="button-text-label">Reviews</span>
          </span>
        </a>
        <div
          tabindex="0"
          class="product-share-btn addthis_toolbox"
        >
          <span class="addthis_button_more">
            <div class="icon-wrap">
              {getIconById(ICONS_ID.IconShare, {
                width: "1em",
                height: "1em",
              })}
            </div>

            <span class="button-text">Share</span>
          </span>
          <div class="atclear"></div>
        </div>
      </div>
    </MainWrapper>
  );
};
