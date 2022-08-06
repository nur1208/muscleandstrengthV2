import React from "react";
import { getIconById, ICONS_ID } from "../../icons";

export const RightSignUpInfo = () => {
  return (
    <>
      <div class="benefit">
        <div class="icon">
          {getIconById(ICONS_ID.IconMnsRewardsWhite)}
        </div>
        <div class="text">
          Reward points to use on exclusive products or order
          discounts
        </div>
      </div>
    </>
  );
};
