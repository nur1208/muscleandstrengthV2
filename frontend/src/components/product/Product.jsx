import React, { useEffect, useRef } from "react";
import { MainWrapper } from "./product.styles";
import { Button } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCT_DATA } from "../data";
import { RatingBox } from "../ratingBox/RatingBox";

export const Product = (props) => {
  const navigate = useNavigate();

  const {
    reviewsNum,
    ratingPercentage,
    href,
    imgUrl,
    title,
    deal,
    price,
    name,
    brand,
    buyingOptions,
    _id,
    hasRating,
    hasDetailsPrice,
    hasAddCardBtn,
  } = props;

  const handleClick = () => {
    navigate(
      `/store/product/${name.replaceAll(
        " ",
        "-"
      )}/${_id}`.replace("%", ""),
      {
        state: { id: _id, productData: props },
      }
    );
  };

  const buyOption =
    buyingOptions &&
    buyingOptions.length !== 0 &&
    // select fist buying option with deal,
    // If all buying options without deal than select the first option
    (buyingOptions.find(({ deal }) => deal) || buyingOptions[0]);
  return (
    <MainWrapper hasRating={hasRating}>
      <div className="height-setter">
        <div className="image-wrap">
          <img
            className="product-image lazyloaded"
            src={imgUrl[400]?.split(" ")[0]}
            alt={title}
          />
        </div>
        <div
          className="dynamic-height"
          style={{
            // paddingBottom: title.length > 30 ? 106 : 125,
            paddingBottom: 106,
          }}
        >
          {/* <Link className="product-link" to={href || "#"}> */}
          <span className="product-link" onClick={handleClick}>
            <div className="product-name">{`${
              brand?.title
            } ${name}, ${
              buyOption ? buyOption.title : ""
            }`}</div>
          </span>
        </div>
        <div className="product-info">
          <span
            className="mns-label lbl-deal"
            style={{
              display: !buyOption.deal ? "none" : undefined,
            }}
          >
            {buyOption ? buyOption.deal : deal}
          </span>
          {hasRating && (
            <div className="rating-stars">
              <RatingBox width={ratingPercentage} />
              {/* reviewsNum, ratingPercentage, */}
              <span class="review-count">({reviewsNum})</span>
            </div>
          )}

          <div className="price-box">
            {hasDetailsPrice && !!buyOption.cost.beforeDiscount && (
              <div class="before-discount">
                <span class="price">
                  ${buyOption.cost.beforeDiscount}
                </span>{" "}
              </div>
            )}
            <span className="price">
              ${buyOption ? buyOption.cost.regularPrice : price}
            </span>
            {hasDetailsPrice && (
              <div class="green stock-label">IN STOCK</div>
            )}
          </div>
          <div className="button-wrap">
            {hasAddCardBtn && (
              <Button
                text="Add Card"
                isBlue
                isSmall
                onClick={handleClick}
              />
            )}
            <Button
              text="View Product"
              isBlue={!hasAddCardBtn}
              isSmall
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
