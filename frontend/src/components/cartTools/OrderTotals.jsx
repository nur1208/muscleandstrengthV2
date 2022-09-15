import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button/Button";

export const OrderTotals = () => {
  const { userData } = useSelector((state) => state.user_store);
  const initialValue = 0;
  let totalPrice = userData?.cart.reduce(
    (
      previousValue,
      { buyingOptionId, product: { buyingOptions }, isFree, qty }
    ) => {
      const buyingOption = buyingOptions?.find(
        ({ _id }) => _id === buyingOptionId
      );
      if (isFree) return previousValue + 0;
      return (
        previousValue + buyingOption.cost.regularPrice * qty
      );
    },
    initialValue
  );
  totalPrice = Number(totalPrice).toFixed(2);
  return (
    <>
      <div class="orderTotals" id="shopping-cart-totals-table">
        <div class="table-row">
          <div class="price-label">Subtotal </div>
          <div class="price-wrap">
            <span class="price">${totalPrice}</span>{" "}
          </div>
        </div>
        <div class="table-row grand">
          <div class="price-label">
            <strong>Order Total</strong>
          </div>
          <div class="price-wrap">
            <strong>
              <span class="price">${totalPrice}</span>
            </strong>
          </div>
        </div>
        <div class="table-row">
          <div class="price-label">Points Earned </div>
          <div class="price-wrap">
            {Number(totalPrice * 2).toFixed(2)} points{" "}
          </div>
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
