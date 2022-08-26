import React from "react";
import { Button } from "../button/Button";
import { MainWrapper } from "./addressBox.styles";

export const AddressBox = () => {
  return (
    <MainWrapper>
      <h3 class="bottomBorder margBot15">Address Book</h3>
      <div class="address-list">
        <div class="wrap-grid">
          <h6 class="complete">
            Primary Billing&nbsp;&nbsp;
            <a
              class="ashake right"
              href="https://www.muscleandstrength.com/store/customer/address/edit/"
            >
              <svg width="13" height="13">
                <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-edit"></use>
              </svg>
            </a>
          </h6>
          <div class="address">
            You have not set a default billing address.{" "}
          </div>
        </div>
        <div class="wrap-grid">
          <h6 class="complete">
            Primary Shipping&nbsp;&nbsp;
            <a
              class="ashake right"
              href="https://www.muscleandstrength.com/store/customer/address/edit/"
            >
              <svg width="13" height="13">
                <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-edit"></use>
              </svg>
            </a>
          </h6>
          <div class="address">
            You have not set a default shipping address.{" "}
          </div>
        </div>
        <div class="buttons">
          <Button text="Manage All Addresses" isSmall />
          {/* <a
            class="btn btn-white btn-sm"
            href="https://www.muscleandstrength.com/store/customer/address/"
          >
            Manage All Addresses
          </a> */}
        </div>
      </div>
    </MainWrapper>
  );
};
