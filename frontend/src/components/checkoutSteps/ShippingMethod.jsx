import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions, useUpdateSteps } from "../../hooks";
import { LOCAL_STORAGE_KEYS } from "../../redux/constants";
import { Button } from "../button/Button";

export const ShippingMethod = () => {
  const [updateStep] = useUpdateSteps();
  const {
    userInput: { checkout },
  } = useSelector((state) => state.user_store);

  const { updateField } = useReduxActions();

  const handleNextStep = (e) => {
    e.preventDefault();
    updateStep((item, index) =>
      index === 4
        ? { ...item, isActive: true, isAllow: true }
        : { ...item, isActive: false }
    );
  };

  const handleOnChange = (e) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.CHECKOUT,
      JSON.stringify({
        ...checkout,
        shippingMethod: e.target.value,
        steps: undefined,
      })
    );
    updateField({
      checkout: { ...checkout, shippingMethod: e.target.value },
    });
  };
  return (
    <div>
      <form id="co-shipping-method-form" action="">
        <fieldset>
          <div id="checkout-shipping-method-load">
            <dl className="shipping-methods">
              <dd>
                <ul>
                  <li>
                    <input
                      name="shipping_method"
                      type="radio"
                      onChange={handleOnChange}
                      value="Economy ‐ $4.99"
                      id="s_method_60d300c4ec1c412cd4a4d3c7ae1050a633543895"
                      className="radio"
                      checked={
                        checkout.shippingMethod ===
                        "Economy ‐ $4.99"
                      }
                    />
                    <label
                      className="method-wrap"
                      for="s_method_60d300c4ec1c412cd4a4d3c7ae1050a633543895"
                    >
                      <div className="method-radio-element"></div>

                      <span className="method-name">
                        Economy ‐ $4.99{" "}
                      </span>
                      <span className="details">
                        Expected Delivery: 3-7 Days{" "}
                      </span>
                    </label>
                  </li>
                  <li>
                    <input
                      name="shipping_method"
                      type="radio"
                      onChange={handleOnChange}
                      value={"Standard ‐ $9.99"}
                      checked={
                        checkout.shippingMethod ===
                        "Standard ‐ $9.99"
                      }
                      id="s_method_61c6f5676c9bd736276601b4ad7e90acc4fb1b16"
                      className="radio"
                    />
                    <label
                      className="method-wrap"
                      for="s_method_61c6f5676c9bd736276601b4ad7e90acc4fb1b16"
                    >
                      <div className="method-radio-element"></div>

                      <span className="method-name">
                        Standard ‐ $9.99{" "}
                      </span>
                      <span className="details">
                        Expected Delivery: 2-4 Days{" "}
                      </span>
                    </label>
                  </li>
                  <li>
                    <input
                      name="shipping_method"
                      type="radio"
                      onChange={handleOnChange}
                      value={"Overnight ‐ $63.99"}
                      checked={
                        checkout.shippingMethod ===
                        "Overnight ‐ $63.99"
                      }
                      id="s_method_6b0c6e21ca734029969e13bc4f22dad584031c4d"
                      className="radio"
                    />
                    <label
                      className="method-wrap"
                      for="s_method_6b0c6e21ca734029969e13bc4f22dad584031c4d"
                    >
                      <div className="method-radio-element"></div>

                      <span className="method-name">
                        Overnight ‐ $63.99{" "}
                      </span>
                      <span className="details">
                        Expected Delivery: 1-2 Days{" "}
                      </span>
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>

          <div id="onepage-checkout-shipping-method-additional-load"></div>
          <div
            className="buttons-set"
            id="shipping-method-buttons-container"
          >
            <Button
              text="Next Step"
              isGreen
              onClick={handleNextStep}
            />
          </div>
        </fieldset>
        <input
          name="form_key"
          type="hidden"
          value="XFH7z8TBLHR2yYA4"
        />
      </form>
    </div>
  );
};
