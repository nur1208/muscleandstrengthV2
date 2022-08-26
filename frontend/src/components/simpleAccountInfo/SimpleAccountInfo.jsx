import React from "react";
import { Button } from "../button/Button";
import { MainWrapper } from "./simpleAccountInfo.styles";

export const SimpleAccountInfo = () => {
  return (
    <MainWrapper>
      <div class="card">
        <div class="box-account box-info dashboard-points-summary inner-wrap">
          <div class="margBot10 card-header">
            <h3 class="bottomBorder">Reward Points</h3>
          </div>
          <div class="dashboard-points-wrap">
            <div class="currency-image-wrap">
              <img
                src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/reward-program/RC_Coin-stack-coin-on-top.png"
                alt="currency"
              />
            </div>
            <div class="points">
              <span class="point-wrap">50</span>
            </div>
            <Button text="View Rewards" isSmall />
            {/* <a
              class="btn btn-white btn-sm points-button"
              href="https://www.muscleandstrength.com/store/rewards/customer/"
            >
              {" "}
            </a> */}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="contactInfo inner-wrap">
          <div class="margBot10 card-header">
            <h3 class="bottomBorder">Profile Info</h3>
          </div>
          <div class="margBot5 row qg-full">
            <div class="margBot10">
              <div class="blue font-s-small upper">
                Contact Name
              </div>{" "}
              md nur
              <br />
            </div>
            <div class="margBot10 ellipsis">
              <div class="blue font-s-small upper">
                Contact Email
              </div>{" "}
              mdnuur1208@gmail.com
              <br />
            </div>
          </div>
          <div class="buttons qg-full margBot10">
            <Button text="Edit Contact Info" isSmall />
            {/* <a
              class="btn btn-white btn-sm"
              href="https://www.muscleandstrength.com/store/customer/account/edit/"
            ></a>{" "} */}
            <Button text="Change Password" isSmall />
            {/* 
            <a
              class="btn btn-white btn-sm"
              href="https://www.muscleandstrength.com/store/customer/account/edit/changepass/1/"
            >
              Change Password
            </a> */}
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
