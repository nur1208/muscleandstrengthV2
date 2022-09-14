import React from "react";

export const Price = ({ buyingOption, isFree }) => {
  return isFree ? (
    <span class="price">Free</span>
  ) : (
    <>
      {buyingOption.cost.beforeDiscount ? (
        <div class="before-deal-price">
          <span class="price">
            ${buyingOption.cost.beforeDiscount}
          </span>
        </div>
      ) : (
        ""
      )}
      <span class="price">
        ${buyingOption.cost.regularPrice}
      </span>{" "}
    </>
  );
};
