import React from "react";
import { MainWrapper } from "./myPoints.styles";

export const MyPoints = () => {
  return (
    <MainWrapper>
      <div class="mypoints-page dashboard">
        <div class="box-account box-info mypoints-summary">
          <div class="point-header-wrap">
            <div class="left">Reward</div>
            <div class="middle">
              <img
                src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/reward-program/RC-point-coin-stack.png"
                alt="coin stack"
              />
            </div>
            <div class="right">Points</div>
          </div>
          <a href="/store/rewards" class="ribbon-wrap">
            <div class="ribbon-body">
              <div class="number">50</div>
            </div>
            <div class="ribbon-left">
              <div class="corner"></div>
            </div>
            <div class="ribbon-right">
              <div class="corner"></div>
            </div>
            <div class="label-text">
              Learn more about M&amp;S rewards
            </div>
          </a>
          <div class="expiry-points">
            Your points balance will expire in 360 days.
          </div>
          <div class="msg"></div>
          <div class="swap-img-block">
            <a
              rel="nofollow"
              href="/store/rewards/catalog"
              alt="shop rewards catalog"
            >
              <div class="show-desktop">
                <img
                  src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/reward-program/shop-rewards-catalog-800x220.jpg"
                  alt="Reward Program Header"
                />
              </div>
              <div class="show-mobile">
                <img
                  src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/reward-program/shop-rewards-catalog-600x500.jpg"
                  alt="Reward Program Header"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="basic-tabs twoup-tabs">
        <div class="tab-content-wrap">
          <div class="tab-content mypoints-transfers-earnings active">
            <div class="box-account box-info mypoints-transfers">
              <div class="content">
                <div id="transfers_earnings">
                  <div
                    class="data-grid"
                    id="transfers_earnings_table"
                  >
                    <div class="data-line ">
                      <div class="data-wrap status appr">
                        <span class="data-label">Status ID</span>
                        <span class="data ">Approved</span>
                      </div>
                      <div class="data-wrap pointsearned">
                        <span class="data-label">
                          Points Earned
                        </span>
                        <span class="data ">50 </span>
                      </div>
                      <div class="data-wrap date">
                        <span class="data-label">Date</span>
                        <span class="data ">Aug 21, 2022</span>
                      </div>
                      <div class="data-wrap comment">
                        <span class="data-label">Comment</span>
                        <span class="data ">
                          Points received for signing up.
                        </span>
                      </div>
                      <div class="data-wrap action-buttons">
                        <span class="data-label">Buttons</span>
                        <span class="data last"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content mypoints-transfers-spendings"></div>
        </div>
      </div>
    </MainWrapper>
  );
};
