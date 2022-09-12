import React, { useState } from "react";
import { useEffect } from "react";
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
  setCart,
  isError,
  _id,
}) => {
  const [qty, setQty] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  useEffect(() => {
    // check if qty bigger than 0
    if (qty > 0) {
      //add or update buying option
      setCart((currentItems) =>
        // check if this buying option exist
        currentItems.find(
          ({ buyingOptionId }) => buyingOptionId === _id
        )
          ? // buying option is exist then just update qty's value
            currentItems.map((item) =>
              item.buyingOptionId === _id
                ? { ...item, qty, selectedFlavor }
                : item
            )
          : // otherwise add new buying option to cart state
            [
              ...currentItems,
              { buyingOptionId: _id, qty, selectedFlavor },
            ]
      );
    }
    //else remove buying option from cart state
    else
      setCart((currentItems) =>
        currentItems.filter(
          ({ buyingOptionId }) => buyingOptionId !== _id
        )
      );
  }, [qty, _id, selectedFlavor]);
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
        <div
          class="deal"
          style={{
            display: !deal ? "none" : undefined,
          }}
        >
          <span class="mns-label lbl-deal">{deal} </span>
        </div>
      </div>
      <div class="fields">
        <div class="row">
          {options.length !== 0 && (
            <div class="option-field field">
              <Selector
                getSelectedValue={setSelectedFlavor}
                customStyle={selectorStyle}
                label="Pick a Flavor"
                isBlue
                isError={isError}
                options={options}
              />
            </div>
          )}
          <div class="qty-field field">
            <Qty qty={qty} setQty={setQty} />
          </div>
        </div>
      </div>
    </div>
  );
};
