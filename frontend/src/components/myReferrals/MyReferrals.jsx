import React from "react";
import { MainWrapper } from "./myReferrals.styles";

export const MyReferrals = () => {
  return (
    <MainWrapper>
      <div class="my-account">
        <div class="referrals dashboard">
          <img
            class="margBot20 lazyloaded"
            data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/reward-program/Reward-Referral-Header-500.jpg"
            alt="Earn 500 points when your friend places their first order at M&amp;S"
            src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/reward-program/Reward-Referral-Header-500.jpg"
          />
          <div class="box-account border-section">
            <div class="inner">
              <div class="box-head margBot10">
                <h3 class="bottomBorder">Your Referrals</h3>
              </div>
              <p>You don't have any referrals yet.</p>
            </div>
          </div>
          <div class="block-buster border-section margTop20 my_referrals-urlcode_group">
            <div class="inner">
              <div class="box-head margBot10">
                <h3 class="bottomBorder">
                  How to get Referrals
                </h3>
              </div>
              <div class="margTop20">
                <span class="h4">1. Give them your code</span>
              </div>
              <div class="urlcode-input-box ">
                <input
                  type="text"
                  readonly=""
                  name="referral_code"
                  value="MNUR4"
                  title="Your Referral Code"
                  class="input-text"
                  id="referral_code"
                />
              </div>
              <div class="urlcode_comment">
                Referrals should enter the code at checkout or
                signup.
              </div>
              <div class="margTop20">
                <span class="h4">2. Send them your link</span>
              </div>
              <div class="urlcode-input-box">
                <input
                  type="text"
                  readonly=""
                  name="referral_url"
                  value="https://www.muscleandstrength.com/r/830786"
                  title="Your Referral URL"
                  class="input-text"
                  id="referral_url"
                />
              </div>
              <div class="urlcode_comment">
                Referrals that access this URL are connected as
                referrals once they signup or place an order.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
