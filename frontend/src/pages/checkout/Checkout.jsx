import React from "react";
import {
  CartHeader,
  CheckoutHeader,
  CheckoutProgress,
  CheckoutSteps,
} from "../../components";
import { MainWrapper } from "./checkout.styles";

export const Checkout = () => {
  return (
    <MainWrapper>
      <div id="page">
        <CheckoutHeader />
        <div id="main-wrap">
          <CartHeader text="Secure Checkout" />
          <div className="aside">
            <CheckoutProgress />
          </div>
          <div className="main-content">
            <CheckoutSteps />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
