import React from "react";
import { MainWrapper } from "./product.styles";
import { Button } from "../index";

export const Product = () => {
  return (
    <MainWrapper>
      <div className="height-setter">
        <div
          className="dynamic-height"
          style={{ paddingBottom: 106 }}
        >
          <a className="product-link" href="/store/shield.html">
            <div className="image-wrap">
              <img
                className="product-image lazyloaded"
                src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/05fbe4/240/0/shield_immunity_plus_ultra_orange_3.jpg"
                data-src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/943b37/240/0/cherry_lemonade_1_2.jpg"
                alt="Primeval Labs EAA MAX, 30 Servings"
              />
            </div>
            <div className="product-name">
              PERFECT Sports Shield Immunity+, 30 Servings
            </div>
          </a>
        </div>
        <div className="product-info">
          <span className="mns-label lbl-deal">
            PRICE CUT + FREE WORKOUT MASK
          </span>
          <div className="price-box">
            <span className="price">€16.09</span>
          </div>
          <div className="button-wrap">
            {/* <a
                href="/store/shield.html"
                className="btn btn-blue btn-sm btn-addtocart"
              >
                View Product
              </a> */}
            <Button text="View Product" isBlue isSmall />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
