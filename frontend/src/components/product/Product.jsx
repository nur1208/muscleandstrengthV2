import React from "react";
import { MainWrapper } from "./product.styles";
import { Button } from "../index";
import { Link } from "react-router-dom";

export const Product = ({
  href,
  imgUrl,
  title,
  deal,
  price,
}) => {
  return (
    <MainWrapper>
      <div className="height-setter">
        <div
          className="dynamic-height"
          style={{ paddingBottom: 106 }}
        >
          <Link className="product-link" to={href || "#"}>
            <div className="image-wrap">
              <img
                className="product-image lazyloaded"
                src={imgUrl}
                alt={title}
              />
            </div>
            <div className="product-name">{title}</div>
          </Link>
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
