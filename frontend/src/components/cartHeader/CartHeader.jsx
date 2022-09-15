import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { getIconById, ICONS_ID } from "../../icons";
import { Button } from "../button/Button";
import { MainWrapper } from "./cartHeader.styles";

export const CartHeader = ({ text }) => {
  const isPhone = useMediaQuery({ maxWidth: 480 });

  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate("/store");
  };

  const handleCheckout = () => {
    navigate("/store/checkout/onpage");
  };
  return (
    <MainWrapper>
      <div className="cartHeader">
        <h1 className=" cart-title">
          <span className="cart-header-text">
            {text || "Shopping Cart"}
          </span>
          <div className="shopper badge">
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
          <div className="bbb badge">
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
        {!text && (
          <>
            <div className="cart-feature-wrap">
              <div className="feature-five">
                {getIconById(ICONS_ID.IconLowPrice)}

                <span className="text">Lowest Prices</span>
              </div>
              <div className="feature-one">
                {getIconById(ICONS_ID.IconDeal, null, "#AAA")}
                <span className="text">Best Deals</span>
              </div>
              <div className="feature-three">
                {getIconById(ICONS_ID.IconSale)}
                <span className="text">
                  Money Back Guarantee
                </span>
              </div>
              <div className="feature-four">
                {getIconById(ICONS_ID.IconTruck, null, "#AAA")}

                <span className="text">Super Fast Shipping</span>
              </div>
              <div className="feature-two">
                {getIconById(
                  ICONS_ID.IconSupportWhite,
                  null,
                  "#AAA"
                )}
                <span className="text">7 Day Support</span>
              </div>
            </div>
            <div className="button-row">
              <Button
                text="Continue Shopping"
                isSmall
                onClick={handleContinueShopping}
              />
              {/* <button
            type="button"
            className="btn btn-white btn-sm btn-auto btn-shop"
            onclick="setLocation('https://www.muscleandstrength.com/store/')"
          >
            Continue Shopping
          </button> */}
              <div className="grid-spacer"></div>
              <Button
                text={
                  isPhone ? "Checkout" : "Proceed to Checkout"
                }
                isGreen
                onClick={handleCheckout}
                isLarge
              />
            </div>
          </>
        )}
      </div>
    </MainWrapper>
  );
};
