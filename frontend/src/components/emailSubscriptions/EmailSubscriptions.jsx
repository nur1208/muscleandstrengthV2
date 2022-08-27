import React from "react";
import { Button } from "../button/Button";
import { MainWrapper } from "./emailSubscriptions.styles";

export const EmailSubscriptions = () => {
  return (
    <MainWrapper>
      <h1>Email Subscriptions</h1>
      <div class="basic-form-wrapper">
        <form
          class="manage-subscriptions"
          method="post"
          action="https://www.muscleandstrength.com/store/customer/subscriptions/update/"
        >
          <input
            type="hidden"
            name="form_key"
            value="tUFaKo1vtihPxrLt"
          />
          <div class="row">
            <label class="left" for="newsletter">
              M&amp;S Newsletter
            </label>
            <input
              id="newsletter"
              type="checkbox"
              class="right"
              name="is_content"
              value="yes"
            />
            <div class="description">
              We teach you how to build muscle, burn fat and stay
              motivated.
            </div>
          </div>
          <div class="row">
            <label class="left" for="alerts">
              Deals &amp; Flash Sale Alerts
            </label>
            <input
              id="alerts"
              type="checkbox"
              class="right"
              name="is_ecommerce"
              //   checked="checked"
              value="yes"
            />
            <div class="description">
              Be the first to get notified when we post flash
              sales, coupon codes and new deals!
            </div>
          </div>
          <div class="button-wrap">
            <Button text="Update" isBlue />
          </div>
        </form>
      </div>
    </MainWrapper>
  );
};
