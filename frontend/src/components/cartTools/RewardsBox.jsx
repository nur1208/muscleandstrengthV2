import React from "react";
import { Button } from "../button/Button";

export const RewardsBox = () => {
  return (
    <>
      <div class="rewards-box-spend-minicart sweettooth-point-spender cart-points-spender discount points-spender-theme-mnsv4">
        <h2>Spend your points</h2>
        <div class="box-content">
          <div class="cartSlider">
            <div class="slider">
              <div class="slider-wrap">
                <div
                  style={{ verticalAlign: "middle" }}
                  class="btn-slider-reduce-points-container"
                >
                  <img
                    class="btn-slider-reduce-points"
                    alt="Spend one point less"
                    src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/rewards/slider/decr_points.gif"
                    id="slider_reduce_points"
                    style={{ position: "relative", top: "9px" }}
                  />
                </div>
                <div class="sliderRail" id="sliderRail">
                  <a
                    style={{ left: "0px", top: "0px" }}
                    class="sliderHandle ui-slider-handle selected"
                    id="sliderHandle"
                  ></a>
                </div>
                <div
                  style={{ verticalAlign: "middle" }}
                  class="btn-slider-increase-points-container"
                >
                  <img
                    class="btn-slider-increase-points"
                    alt="Spend one point more"
                    src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/rewards/slider/incr_points.gif"
                    id="slider_increase_points"
                    style={{ position: "relative", top: "9px" }}
                  />
                </div>
                <div valign="top" class="cartSlider_cell">
                  <div
                    align="center"
                    id="slider-wait"
                    style={{ display: "none" }}
                  >
                    <img
                      src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/rewards/loading/loading1.gif"
                      class="v-middle"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div id="sliderCaption" class="cartSlider_caption">
                You Will Spend: 0 Points
              </div>
              <input
                type="hidden"
                name="redemption_uses"
                id="redemption_rule_uses"
              />
            </div>
          </div>
          <div
            class="maximize-points"
            style={{ display: "none" }}
          >
            <input
              type="checkbox"
              name="use_all_points"
              id="use_all_points"
            />
            <label for="use_all_points">
              Maximize my discount with points
            </label>
          </div>
          <div class="text-center font-s-small">
            <a
              rel="nofollow"
              href="/store/rewards/catalog"
              alt="shop rewards catalog"
            >
              Shop Rewards Catalog
            </a>{" "}
            |
            <a
              rel="nofollow"
              href="/store/rewards"
              alt="learn about rewards"
            >
              Learn About Rewards
            </a>
          </div>
        </div>
      </div>
      <form
        id="discount-coupon-form"
        action="https://www.muscleandstrength.com/store/checkout/cart/couponPost/"
        method="post"
      >
        <div class="discount-form">
          <label for="coupon_code" class="padBot5">
            Enter coupon code here:
          </label>
          <input
            type="hidden"
            name="remove"
            id="remove-coupon"
            value="0"
          />
          <div class="input-box">
            <input
              placeholder="Enter code..."
              class="input-text"
              id="coupon_code"
              name="coupon_code"
              value=""
            />
          </div>
          <div
            style={{ paddingTop: 0, paddingLeft: 0 }}
            class="buttons-set"
          >
            <Button text="Apply Coupon" isSmall />
          </div>
        </div>
      </form>
      <div class="font-s-small margTop15 margBot10">
        Don't have a coupon?{" "}
        <a target="_blank" href="/store/promos.html">
          Find one here
        </a>
      </div>
    </>
  );
};
