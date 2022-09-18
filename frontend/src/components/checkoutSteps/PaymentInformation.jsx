import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions, useUpdateSteps } from "../../hooks";
import { LOCAL_STORAGE_KEYS } from "../../redux/constants";
import { Button } from "../button/Button";

export const PaymentInformation = () => {
  const [updateStep] = useUpdateSteps();
  const handleNextStep = (e) => {
    e.preventDefault();
    updateStep((item, index) =>
      index === 5
        ? { ...item, isActive: true, isAllow: true }
        : { ...item, isActive: false }
    );
  };
  const {
    userInput: { checkout },
  } = useSelector((state) => state.user_store);

  const { updateField } = useReduxActions();

  const handleOnChange = (e) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.CHECKOUT,
      JSON.stringify({
        ...checkout,
        paymentMethod: e.target.value,
        steps: undefined,
      })
    );
    updateField({
      checkout: {
        ...checkout,
        paymentMethod: e.target.value,
      },
    });
  };
  return (
    <>
      <form action="" id="co-payment-form">
        <dl id="checkout-payment-method-load">
          <dt className="gene_braintree_paypal">
            <input
              id="p_method_gene_braintree_paypal"
              value="PayPal"
              type="radio"
              name="payment[method]"
              title="PayPal"
              onChange={handleOnChange}
              checked={checkout.paymentMethod === "PayPal"}
              className="radio"
            />
            <label for="p_method_gene_braintree_paypal">
              PayPal
            </label>
          </dt>
          <dd>
            <div
              className="form-list"
              id="payment_form_gene_braintree_paypal"
              style={{
                display:
                  checkout.paymentMethod === "PayPal"
                    ? "block"
                    : "none",
              }}
            >
              <div className="paypal-info">
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
          {/* <dt className="gene_braintree_applepay" 
          >
            <input
              id="p_method_gene_braintree_applepay"
              value="Apple Pay"
              type="radio"
              name="payment[method]"
              title="Apple Pay"
              checked={checkout.paymentMethod === "Apple Pay"}
              onChange={handleOnChange}
              className="radio"
            />
            <label for="p_method_gene_braintree_applepay">
              Apple Pay
            </label>
          </dt>
          <dd>
            <div
              className="form-list"
              id="payment_form_gene_braintree_applepay"
              style={{
                display:
                  checkout.paymentMethod === "Apple Pay"
                    ? "block"
                    : "none",
              }}
            >
              <div className="applepay-info">
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
          </dd> */}
          <dt className="gene_braintree_googlepay">
            <input
              id="p_method_gene_braintree_googlepay"
              value="Google Pay"
              type="radio"
              checked={checkout.paymentMethod === "Google Pay"}
              onChange={handleOnChange}
              name="payment[method]"
              title="Google Pay"
              onclick="payment.switchMethod('gene_braintree_googlepay')"
              className="radio"
            />
            <label for="p_method_gene_braintree_googlepay">
              Google Pay
            </label>
          </dt>
          <dd>
            <div
              className="form-list"
              id="payment_form_gene_braintree_googlepay"
              style={{
                display:
                  checkout.paymentMethod === "Google Pay"
                    ? "block"
                    : "none",
              }}
            >
              <div className="googlepay-info">
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
      <div
        className="buttons-set"
        id="payment-buttons-container"
      >
        <Button
          text="Next Step"
          isGreen
          onClick={handleNextStep}
        />
      </div>
    </>
  );
};
