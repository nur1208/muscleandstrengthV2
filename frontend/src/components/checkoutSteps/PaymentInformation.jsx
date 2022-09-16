import React from "react";
import { Button } from "../button/Button";

export const PaymentInformation = () => {
  return (
    <>
      <form action="" id="co-payment-form">
        <dl id="checkout-payment-method-load">
          {/* <dt class="usaepay">
            <input
              id="p_method_usaepay"
              value="usaepay"
              type="radio"
              name="payment[method]"
              title="Credit Card"
              onclick="payment.switchMethod('usaepay')"
              class="radio"
            />
            <label for="p_method_usaepay">Credit Card</label>
          </dt>
          <dd>
            <div
              class="form-list"
              id="payment_form_gene_braintree_paypal"
              //   style={{ display: "none" }}
            >
              <div class="paypal-info">
                <p>
                  You will complete your payment via PayPal after
                  the order review step.
                </p>

                <input
                  type="hidden"
                  name="payment[payment_method_nonce]"
                  id="paypal-payment-nonce"
                  disabled=""
                />
              </div>
            </div>
          </dd> */}
          <dt class="gene_braintree_paypal">
            <input
              id="p_method_gene_braintree_paypal"
              value="gene_braintree_paypal"
              type="radio"
              name="payment[method]"
              title="PayPal"
              onclick="payment.switchMethod('gene_braintree_paypal')"
              checked="checked"
              class="radio"
            />
            <label for="p_method_gene_braintree_paypal">
              PayPal
            </label>
          </dt>
          <dd>
            <div
              class="form-list"
              id="payment_form_gene_braintree_paypal"
              //   style={{ display: "none" }}
            >
              <div class="paypal-info">
                <p>
                  You will complete your payment via PayPal after
                  the order review step.
                </p>

                <input
                  type="hidden"
                  name="payment[payment_method_nonce]"
                  id="paypal-payment-nonce"
                  disabled=""
                />
              </div>
            </div>
          </dd>
          <dt
            class="gene_braintree_applepay"
            style={{ display: "none" }}
          >
            <input
              id="p_method_gene_braintree_applepay"
              value="gene_braintree_applepay"
              type="radio"
              name="payment[method]"
              title="Apple Pay"
              onclick="payment.switchMethod('gene_braintree_applepay')"
              class="radio"
            />
            <label for="p_method_gene_braintree_applepay">
              Apple Pay
            </label>
          </dt>
          <dd>
            <div
              class="form-list"
              id="payment_form_gene_braintree_applepay"
              style={{ display: "none" }}
            >
              <div class="applepay-info">
                <img
                  src="https://cdn.muscleandstrength.com/store/skin/frontend/base/default/images/gene/braintree/apple-pay-logo.png"
                  width="100"
                  style={{ margin: "12px 0 6px 0" }}
                  alt="ApplePay Logo"
                />
                <p>
                  You will be presented with Apple Pay at the end
                  of the checkout process.
                </p>
                <input
                  type="hidden"
                  name="payment[payment_method_nonce]"
                  id="applepay-payment-nonce"
                  disabled=""
                />
              </div>
            </div>
          </dd>
          <dt class="gene_braintree_googlepay">
            <input
              id="p_method_gene_braintree_googlepay"
              value="gene_braintree_googlepay"
              type="radio"
              name="payment[method]"
              title="Google Pay"
              onclick="payment.switchMethod('gene_braintree_googlepay')"
              class="radio"
            />
            <label for="p_method_gene_braintree_googlepay">
              Google Pay
            </label>
          </dt>
          <dd>
            <div
              class="form-list"
              id="payment_form_gene_braintree_googlepay"
              style={{ display: "none" }}
            >
              <div class="googlepay-info">
                <p>
                  You will complete your payment via Google Pay
                  after the order review step.
                </p>
                <input
                  type="hidden"
                  name="payment[payment_method_nonce]"
                  id="googlepay-payment-nonce"
                  disabled=""
                />
              </div>
            </div>
          </dd>
        </dl>
        <input
          name="form_key"
          type="hidden"
          value="XFH7z8TBLHR2yYA4"
        />
        <input
          type="hidden"
          name="payment[device_data]"
          id="braintree-device-data"
          value='{"device_session_id":"b442aed706a67b4043c04a77be2b51c9","fraud_merchant_id":null,"correlation_id":"4cb83bebeab768d6fda9f807df9351e4"}'
          disabled=""
        />
      </form>
      <div class="buttons-set" id="payment-buttons-container">
        <Button text="Next Step" isGreen />
      </div>
    </>
  );
};
