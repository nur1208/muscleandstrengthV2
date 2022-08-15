import React, { useEffect, useRef } from "react";
import { MainWrapper } from "./product.styles";
import { Button } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCT_DATA } from "../data";

export const Product = ({
  href,
  imgUrl,
  title,
  deal,
  price,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`product/${title.replaceAll(" ", "-")}`, {
      state: { productData: PRODUCT_DATA },
    });
  };
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
                src={imgUrl}
                alt={title}
              />
            </div>
            <div className="product-name">{title}</div>
          </span>
        </div>
        <div className="product-info">
          <span className="mns-label lbl-deal">{deal}</span>
          <div className="price-box">
            <span className="price">${price}</span>
          </div>
          <div className="button-wrap">
            <Button text="View Product" isBlue isSmall />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
