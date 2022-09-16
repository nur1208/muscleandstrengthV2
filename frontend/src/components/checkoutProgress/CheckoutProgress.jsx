import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
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
                <div class="wrap-grid">
                  <h4 class="complete">
                    Billing Address&nbsp;&nbsp;
                    <a
                      class="ashake right"
                      href="#billing"
                      onclick="checkout.changeSection('opc-billing'); return false;"
                    >
                      {getIconById(ICONS_ID.IconEdit)}
                      <span class="is-hidden">
                        Edit Billing Address
                      </span>
                    </a>
                  </h4>
                  <div class="complete_div">
                    md nur
                    <br />
                    nur
                    <br />
                    Henry Ave
                    <br />
                    782 Rosewood St. Chicago Heights, IL 60411
                    <br />
                    Charlottesville, Virginia, 22903
                    <br />
                    United States
                    <br />
                    T: 615-236-8032
                  </div>
                </div>
                {/* <h4>Billing Address</h4> */}
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
