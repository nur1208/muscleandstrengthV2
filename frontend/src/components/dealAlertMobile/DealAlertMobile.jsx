import React from "react";
import { ICONS_ID } from "../../icons";
import { Button } from "../button/Button";
import { MainWrapper } from "./dealAlertMobile.styles";

export const DealAlertMobile = () => {
  return (
    <MainWrapper>
      <div class="text">
        Get notified when we post flash sales and deals
      </div>
      <Button
        isLarge
        text="Get Alerts"
        isGreen
        icon={{ id: ICONS_ID.IconDealWhite }}
      />
    </MainWrapper>
  );
};
