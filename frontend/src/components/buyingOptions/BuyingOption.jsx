import React from "react";
import { Selector } from "../selector/Selector";
import { Qty } from "./Qty";
const selectorStyle = `
    .sod_list_wrapper {
        min-width: 13em;
        border: 1px solid #ddd;
        color: #777;
    }    

`;
export const BuyingOption = ({
  cost,
  serving,
  title,
  deal,
  options,
}) => {
  return (
    <div
      class={`group ${options.length === 0 ? "no-options" : ""}`}
    >
      <div class="group-header">
        <div class="cost">
          {cost.beforeDiscount ? (
            <div class="before-discount">
              <span class="price">${cost.beforeDiscount}</span>{" "}
            </div>
          ) : undefined}

          <span class="calc">
            <span class="regular-price" id="product-price-38914">
              <span class="price">${cost.regularPrice}</span>{" "}
            </span>
            <span class="points-per-unit">
              {cost.regularPrice + "00"}
            </span>
          </span>
        </div>
        <div class="title">{title}</div>
        <div class="serving-info">
          {serving} Servings | $
          {Math.floor((cost.regularPrice / serving) * 100) / 100}{" "}
          Per Serving
        </div>{" "}
        <div class="deal">
          <span class="mns-label lbl-deal">{deal} </span>
        </div>
      </div>
      <div class="fields">
        <div class="row">
          {options.length !== 0 && (
            <div class="option-field field">
              <Selector
                customStyle={selectorStyle}
                label="Pick a Flavor"
                isBlue
                options={options}
              />
            </div>
          )}
          <div class="qty-field field">
            <Qty />
          </div>
        </div>
      </div>
    </div>
  );
};
