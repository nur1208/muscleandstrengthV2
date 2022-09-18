import React from "react";
import { useSelector } from "react-redux";
import { getIconById, ICONS_ID } from "../../icons";
import { MainWrapper } from "./checkoutProgress.styles";

export const CheckoutProgress = () => {
  const {
    userInput: { checkout },
  } = useSelector((state) => state.user_store);

  if (!checkout.steps.length) return <></>;
  return (
    <MainWrapper>
      <div className="checkoutProgressWrapper">
        <h3 className="title">Your Checkout Progress</h3>
        <div className="block-progress opc-block-progress">
          <div className="block-content checkoutProgress">
            <dl>
              <div id="billing-progress-opcheckout">
                {checkout.steps[1].isDone ? (
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
                      {`${checkout.addressBilling.firstName}  ${checkout.addressBilling.lastName}`}
                      <br />
                      {checkout.addressBilling.company}
                      <br />
                      {checkout.addressBilling.street}
                      <br />
                      {checkout.addressBilling.street_2}
                      <br />
                      {checkout.addressBilling.city},{" "}
                      {checkout.addressBilling.postcode}
                      <br />
                      {checkout.addressBilling.country_id}
                      <br />
                      T: {checkout.addressBilling.telephone}
                    </div>
                  </div>
                ) : (
                  <h4>Billing Address</h4>
                )}

                {/* <h4>Billing Address</h4> */}
              </div>
              <div id="shipping-progress-opcheckout">
                {checkout.steps[2].isDone ? (
                  <div class="wrap-grid">
                    <h4 class="complete">
                      Shipping Address&nbsp;&nbsp;
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
                      {`${checkout.addressShipping.firstName}  ${checkout.addressShipping.lastName}`}
                      <br />
                      {checkout.addressShipping.company}
                      <br />
                      {checkout.addressShipping.street}
                      <br />
                      {checkout.addressShipping.street_2}
                      <br />
                      {checkout.addressShipping.city},{" "}
                      {checkout.addressShipping.postcode}
                      <br />
                      {checkout.addressShipping.country_id}
                      <br />
                      T: {
                        checkout.addressShipping.telephone
                      }{" "}
                    </div>
                  </div>
                ) : (
                  <h4>Shipping Address</h4>
                )}
              </div>
              <div id="shipping_method-progress-opcheckout">
                {checkout.steps[3].isDone ? (
                  <div class="wrap-grid">
                    <h4 class="complete">
                      Shipping Method&nbsp;&nbsp;
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
                      {checkout.shippingMethod}
                    </div>
                  </div>
                ) : (
                  <h4>Shipping Method</h4>
                )}
              </div>
              <div id="payment-progress-opcheckout">
                {checkout.steps[4].isDone ? (
                  <div class="wrap-grid">
                    <h4 class="complete">
                      Payment Method&nbsp;&nbsp;
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
                      {checkout.paymentMethod}
                    </div>
                  </div>
                ) : (
                  <h4>Payment Method</h4>
                )}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
