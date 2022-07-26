import React from "react";
import { Button } from "../button/Button";
import { PRODUCT_DATA } from "../data";
import { Product } from "../product/Product";
import { MainWrapper } from "./productsWrapper.styleds";

export const ProductsWrapper = ({
  count,
  hasAddCardBtn,
  products,
  showNext,
  handleShowNext,
  loading,
}) => {
  const initProducts = products || [];
  return (
    <MainWrapper loading={loading} hasAddCardBtn={hasAddCardBtn}>
      <div class="search-result-products ajax-loading-overlay">
        <div class="css-loader-container ajax-loader-block">
          <span class="css-loader-block please-wait">
            <span class="ajax-loading"></span>
          </span>
        </div>
        <ul class="grid-x grid-margin-x grid-products-wrapper">
          {initProducts.map((product, index) => (
            <li
              key={`${index}-index`}
              class="cell small-12 bp600-6 bp960-4 large-3 grid-product"
              itemscope=""
              itemtype="http://schema.org/Product"
            >
              <div class="inner-wrap">
                <Product
                  hasAddCardBtn={hasAddCardBtn}
                  hasRating
                  hasDetailsPrice
                  {...product}
                />
              </div>
            </li>
          ))}
        </ul>
        {count > products.length && (
          <div class="toolbar-bottom clearBoth">
            <div class="toolbar clearfix">
              <div class="view-more-wrap">
                <Button
                  isBlue
                  loading={loading}
                  onClick={handleShowNext}
                  text={`View Next ${
                    count - products.length > showNext
                      ? showNext
                      : count - products.length
                  } Products`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </MainWrapper>
  );
};
