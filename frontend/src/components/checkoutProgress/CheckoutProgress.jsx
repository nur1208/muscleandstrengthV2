import React from "react";
import { MainWrapper } from "./checkoutProgress.styles";

export const CheckoutProgress = () => {
  return (
    <MainWrapper>
      <div className="checkoutProgressWrapper">
        <h3 className="title">Your Checkout Progress</h3>
        <div className="block-progress opc-block-progress">
          <div className="block-content checkoutProgress">
            <dl>
              <div id="billing-progress-opcheckout">
                <h4>Billing Address</h4>
              </div>
              <div id="shipping-progress-opcheckout">
                <h4>Shipping Address</h4>
              </div>
              <div id="shipping_method-progress-opcheckout">
                <h4>Shipping Method</h4>
              </div>
              <div id="payment-progress-opcheckout">
                <h4>Payment Method</h4>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
