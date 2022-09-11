import React from "react";
import { Button } from "../button/Button";

export const OrderTotals = () => {
  return (
    <>
      <div class="orderTotals" id="shopping-cart-totals-table">
        <div class="table-row">
          <div class="price-label">Subtotal </div>
          <div class="price-wrap">
            <span class="price">$9.99</span>{" "}
          </div>
        </div>
        <div class="table-row grand">
          <div class="price-label">
            <strong>Order Total</strong>
          </div>
          <div class="price-wrap">
            <strong>
              <span class="price">$9.99</span>
            </strong>
          </div>
        </div>
        <div class="table-row">
          <div class="price-label">Points Earned </div>
          <div class="price-wrap">19 points </div>
        </div>
      </div>
      <div
        align="center"
        id="payment-please-wait"
        class="rewards-opc-please-wait"
        style={{ display: "none" }}
      >
        <img
          src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/rewards/loading/loading1.gif"
          class="v-middle"
          alt=""
        />{" "}
        &nbsp; Updating Points Information... &nbsp;
      </div>
      <div class="checkoutBtnWrapper checkout-types">
        <Button isLarge isGreen text="Proceed to Checkout" />
      </div>
    </>
  );
};
