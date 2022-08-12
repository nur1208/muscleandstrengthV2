import React, { useEffect } from "react";
import { useReduxActions } from "../../hooks";
import { getIconById, ICONS_ID } from "../../icons";
import { RatingBox } from "../ratingBox/RatingBox";
import { MainWrapper } from "./productHeader.styles";

export const ProductHeader = ({
  imgUrl,
  brand,
  name,
  tagline,
  features,
  ratingPercentage,
  reviews,
}) => {
  const { updateCustomNavInfo } = useReduxActions();
  useEffect(() => {
    updateCustomNavInfo(`> Store > ${name}`);

    return () => {
      updateCustomNavInfo(null);
    };
  }, [name]);

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
            srcset={imgUrl["400"]}
            media="(max-width: 400px)"
          />
          <source
            width="600"
            height="600"
            srcset={imgUrl["600"]}
            media="(max-width: 1080px)"
          />
          <img
            itemprop="image"
            id="image"
            width="700"
            height="700"
            src={imgUrl["700"]}
            alt={name}
            title={name}
          />
        </picture>
      </div>
      <div class="product-title-wrap">
        <h1 class="product-title" itemprop="name">
          {brand.title} {name}
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
          <a itemprop="url" href={brand.href}>
            <span itemprop="name">{brand.title}</span>
          </a>{" "}
          Product{" "}
        </span>
        <div class="tagline">{tagline}</div>
        <ul class="product-features">
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
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
          <RatingBox width={ratingPercentage} hasGrayBg />
          <span class="button-text">
            {reviews}{" "}
            <span class="button-text-label">Reviews</span>
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
