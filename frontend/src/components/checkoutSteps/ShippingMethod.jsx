import React from "react";
import { Button } from "../button/Button";

export const ShippingMethod = () => {
  return (
    <div>
      <form id="co-shipping-method-form" action="">
        <fieldset>
          <div id="checkout-shipping-method-load">
            <dl class="shipping-methods">
              <dd>
                <ul>
                  <li>
                    <input
                      name="shipping_method"
                      type="radio"
                      value="60d300c4ec1c412cd4a4d3c7ae1050a633543895"
                      id="s_method_60d300c4ec1c412cd4a4d3c7ae1050a633543895"
                      class="radio"
                    />
                    <label
                      class="method-wrap"
                      for="s_method_60d300c4ec1c412cd4a4d3c7ae1050a633543895"
                    >
                      <div class="method-radio-element"></div>

                      <span class="method-name">
                        Economy ‐ $4.99{" "}
                      </span>
                      <span class="details">
                        Expected Delivery: 3-7 Days{" "}
                      </span>
                    </label>
                  </li>
                  <li>
                    <input
                      name="shipping_method"
                      type="radio"
                      value="61c6f5676c9bd736276601b4ad7e90acc4fb1b16"
                      id="s_method_61c6f5676c9bd736276601b4ad7e90acc4fb1b16"
                      class="radio"
                    />
                    <label
                      class="method-wrap"
                      for="s_method_61c6f5676c9bd736276601b4ad7e90acc4fb1b16"
                    >
                      <div class="method-radio-element"></div>

                      <span class="method-name">
                        Standard ‐ $9.99{" "}
                      </span>
                      <span class="details">
                        Expected Delivery: 2-4 Days{" "}
                      </span>
                    </label>
                  </li>
                  <li>
                    <input
                      name="shipping_method"
                      type="radio"
                      value="6b0c6e21ca734029969e13bc4f22dad584031c4d"
                      id="s_method_6b0c6e21ca734029969e13bc4f22dad584031c4d"
                      class="radio"
                    />
                    <label
                      class="method-wrap"
                      for="s_method_6b0c6e21ca734029969e13bc4f22dad584031c4d"
                    >
                      <div class="method-radio-element"></div>

                      <span class="method-name">
                        Overnight ‐ $63.99{" "}
                      </span>
                      <span class="details">
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
            class="buttons-set"
            id="shipping-method-buttons-container"
          >
            <Button text="Next Step" isGreen />
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
