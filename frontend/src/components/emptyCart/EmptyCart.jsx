import React from "react";
import { MainWrapper } from "./emptyCart.style";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <MainWrapper>
      <h1 class="lightblue padded">
        Your Shopping Cart is Empty
      </h1>
      <p>You have no items in your shopping cart.</p>
      <p>
        Please{" "}
        <Link to="/store/">
          <a>continue shopping</a>
        </Link>
        .
      </p>
    </MainWrapper>
  );
};
