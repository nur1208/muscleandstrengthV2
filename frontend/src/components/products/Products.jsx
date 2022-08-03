import React from "react";
import { Product } from "../product/Product";
import { MainWrapper } from "./products.styles";

export const Products = ({ title, products }) => {
  const slides = [];

  for (let i = 0; i < 12; i++) {
    slides.push(<Product />);
  }
  return (
    <MainWrapper>
      <h2 className="grey-stripe">
        {title || "Top Rated Products"}
      </h2>
      <div
        id="promotions-carousel_1"
        class="mns-carousel swiper-container hybrid-carousel-grid"
      >
        <div class="swiper-wrapper grid-products-wrapper grid-x grid-margin-x medium-up-6">
          {products.map((product) => (
            <div className="carousel-cell swiper-slide cell">
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};
