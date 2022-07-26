import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { MainWrapper } from "./smallProduct.styles";

export const SmallProduct = () => {
  const {
    product_store: {
      data: { productSingle },
    },
  } = useSelector((state) => state);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/store/product/${productSingle?.name.replaceAll(
        " ",
        "-"
      )}/${productSingle?._id}`.replace("%", ""),
      {
        state: {
          id: productSingle?._id,
          productData: productSingle,
        },
      }
    );
  };

  return (
    <MainWrapper>
      <div class="image-wrap">
        <a onClick={handleClick}>
          <picture>
            <source
              width="350"
              height="350"
              srcset={productSingle?.imgUrl[400]}
              media="(max-width: 500px)"
            />
            <img
              alt="col"
              width="450"
              height="450"
              src={productSingle?.imgUrl[700]}
            />
          </picture>
        </a>
      </div>
      <div class="info-wrap">
        <div class="product-name">
          <a href="/store/force-factor-test-x180-boost.html">
            {productSingle?.brand?.title} {productSingle?.name}
          </a>
        </div>
        <div class="brand-name">
          By:{" "}
          <a href="/store/brands/force-factor">
            {productSingle?.brand?.title}
          </a>
        </div>
        <div class="product-text">{productSingle.tagline}</div>
        <Button
          text="View Product"
          isBlue
          isLarge
          isExpanded
          onClick={handleClick}
        />
        {/* <a
          href="/store/force-factor-test-x180-boost.html"
          class="btn btn-lg btn-blue"
        >
          View Product
        </a> */}
      </div>
    </MainWrapper>
  );
};
