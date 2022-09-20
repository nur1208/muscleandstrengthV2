import React from "react";
import { useSelector } from "react-redux";
import { ICONS_ID } from "../../icons";
import { Button } from "../button/Button";
import { MainWrapper } from "./dealAlertMobile.styles";

export const DealAlertMobile = () => {
  const {
    userInput: { isDealAlert },
  } = useSelector((state) => state.user_store);

  return (
    <MainWrapper isDealAlert={isDealAlert}>
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
