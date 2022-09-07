import React from "react";
import { Button } from "../button/Button";
import { PRODUCT_DATA } from "../data";
import { Product } from "../product/Product";
import { MainWrapper } from "./productsWrapper.styleds";

export const ProductsWrapper = ({ hasAddCardBtn }) => {
  return (
    <MainWrapper hasAddCardBtn={hasAddCardBtn}>
      <div class="search-result-products ajax-loading-overlay">
        <div class="css-loader-container ajax-loader-block">
          <span class="css-loader-block please-wait">
            <span class="ajax-loading"></span>
          </span>
        </div>
        <ul class="grid-x grid-margin-x grid-products-wrapper">
          {Array(11)
            .fill(true)
            .map((_, index) => (
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
                    {...PRODUCT_DATA}
                  />
                </div>
              </li>
            ))}
        </ul>
        <div class="toolbar-bottom clearBoth">
          <div class="toolbar clearfix">
            <div class="view-more-wrap">
              <Button isBlue text="View Next 19 Products" />
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
