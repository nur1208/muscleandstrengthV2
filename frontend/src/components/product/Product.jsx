import React, { useEffect, useRef } from "react";
import { MainWrapper } from "./product.styles";
import { Button } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCT_DATA } from "../data";

export const Product = (props) => {
  const navigate = useNavigate();

  const {
    href,
    imgUrl,
    title,
    deal,
    price,
    name,
    brand,
    buyingOptions,
    _id,
  } = props;

  const handleClick = () => {
    navigate(`product/${name.replaceAll(" ", "-")}`, {
      state: { id: _id, productData: props },
    });
  };
  const buyOption =
    buyingOptions && buyingOptions[buyingOptions.length - 1];
  return (
    <MainWrapper>
      <div className="height-setter">
        <div
          className="dynamic-height"
          style={{
            // paddingBottom: title.length > 30 ? 106 : 125,
            paddingBottom: 106,
          }}
        >
          {/* <Link className="product-link" to={href || "#"}> */}
          <span className="product-link" onClick={handleClick}>
            <div className="image-wrap">
              <img
                className="product-image lazyloaded"
                src={imgUrl[400]?.split(" ")[0]}
                alt={title}
              />
            </div>
            <div className="product-name">{`${
              brand?.name
            } ${name}, ${
              buyOption ? buyOption.title : ""
            }`}</div>
          </span>
        </div>
        <div className="product-info">
          <span className="mns-label lbl-deal">
            {buyOption ? buyOption.deal : deal}
          </span>
          <div className="price-box">
            <span className="price">
              $
              {buyOption
                ? buyOption.cost.beforeDiscount
                  ? buyOption.cost.beforeDiscount
                  : buyOption.cost.regularPrice
                : price}
            </span>
          </div>
          <div className="button-wrap">
            <Button text="View Product" isBlue isSmall />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
