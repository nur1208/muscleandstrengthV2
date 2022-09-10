import React from "react";
import { useMediaQuery } from "react-responsive";
import { getIconById, ICONS_ID } from "../../icons";
import { Button } from "../button/Button";
import { MainWrapper } from "./cartHeader.styles";

export const CartHeader = () => {
  const isPhone = useMediaQuery({ maxWidth: 480 });

  return (
    <MainWrapper>
      <div class="cartHeader">
        <h1 class=" cart-title">
          <span class="cart-header-text">Shopping Cart</span>
          <div class="shopper badge">
            <a
              href="http://shopperapprovedreviews.com/reviews/muscleandstrength.com/"
              onclick="var nonwin=navigator.appName!='Microsoft Internet Explorer'?'yes':'no'; var certheight=screen.availHeight-90; window.open(this.href,'shopperapproved','location='+nonwin+',scrollbars=yes,width=620,height='+certheight+',menubar=no,toolbar=no'); return false;"
            >
              <img
                src="https://c683207.ssl.cf2.rackcdn.com/8633-m.gif"
                // style="border: 0"
                alt="Shopper Approved Business Rating Box"
              />
            </a>
          </div>
          <div class="bbb badge">
            <a
              href="https://www.bbb.org/columbia/business-reviews/vitamins-and-food-supplements/muscle-and-strength-in-columbia-sc-34013064"
              target="_blank"
            >
              <img
                src="https://www.muscleandstrength.com/sites/all/themes/mnsnew/images/bbb.png"
                alt="Better Business Bureau Rating Box"
              />
            </a>
          </div>
        </h1>
        <div class="cart-feature-wrap">
          <div class="feature-five">
            {getIconById(ICONS_ID.IconLowPrice)}

            <span class="text">Lowest Prices</span>
          </div>
          <div class="feature-one">
            {getIconById(ICONS_ID.IconDeal, null, "#AAA")}
            <span class="text">Best Deals</span>
          </div>
          <div class="feature-three">
            {getIconById(ICONS_ID.IconSale)}
            <span class="text">Money Back Guarantee</span>
          </div>
          <div class="feature-four">
            {getIconById(ICONS_ID.IconTruck, null, "#AAA")}

            <span class="text">Super Fast Shipping</span>
          </div>
          <div class="feature-two">
            {getIconById(
              ICONS_ID.IconSupportWhite,
              null,
              "#AAA"
            )}
            <span class="text">7 Day Support</span>
          </div>
        </div>
        <div class="button-row">
          <Button text="Continue Shopping" isSmall />
          {/* <button
            type="button"
            class="btn btn-white btn-sm btn-auto btn-shop"
            onclick="setLocation('https://www.muscleandstrength.com/store/')"
          >
            Continue Shopping
          </button> */}
          <div class="grid-spacer"></div>
          <Button
            text={isPhone ? "Checkout" : "Proceed to Checkout"}
            isGreen
            isLarge
          />
        </div>
      </div>
    </MainWrapper>
  );
};
