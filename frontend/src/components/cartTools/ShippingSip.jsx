import React from "react";
import { Button } from "../button/Button";
import { Selector } from "../selector/Selector";

export const ShippingSip = () => {
  return (
    <>
      <form
        class="noborder"
        action="https://www.muscleandstrength.com/store/checkout/cart/estimatePost/"
        method="post"
        id="shipping-zip-form"
      >
        <div class="inner-wrap">
          <div class="title">Destination</div>
          <div class="country">
            <Selector />
          </div>
          <div class="zipcode field-row">
            <label class="is-hidden" for="postcode">
              Postal or Zipcode
            </label>
            <input
              class="input-text validate-capostcode validate-postcode validate-zip-international required-entry input-sm"
              placeholder="Zip Code"
              type="text"
              id="postcode"
              name="estimate_postcode"
              value=""
            />
            <Button text="Calculate" isSmall />
          </div>
        </div>
      </form>
      <div class="font-s-small margTop10 margBot10 text-center">
        <a
          class="shipping-info-modal-trigger"
          href="javascript:void(0)"
        >
          Learn more about shipping
        </a>
      </div>
    </>
  );
};
