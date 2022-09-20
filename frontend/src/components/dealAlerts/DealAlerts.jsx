import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import {
  COOKIES_CONSTANTS,
  getCookie,
  setCookie,
} from "../../utils";
import { Button } from "../button/Button";
import { MainWrapper } from "./dealAlerts.styles";

export const DealAlerts = () => {
  const {
    userInput: { isDealAlert },
  } = useSelector((state) => state.user_store);

  const { updateField } = useReduxActions();
  const handleClick = () => {
    updateField({ isDealAlert: false });
    setCookie(COOKIES_CONSTANTS.IS_DEAL_ALERT, false, 7);
  };
  return (
    <MainWrapper isDealAlert={isDealAlert}>
      <div className="message-wrap">
        <div className="title">
          Deal{"  "}
          <SvgWrapper childStyle="width: 1.4em;height: 1.4em;margin-bottom: -0.3em;margin-left: -0.2em;">
            {getIconById(ICONS_ID.IconDealAlert)}
          </SvgWrapper>
          <span>Alerts</span>
        </div>
      </div>
      <div className="form-wrap">
        <div className="text">
          Be the first to get notified when we post flash sales,
          coupon codes and new deals!
        </div>
        <form
          className="newsletter-signup-form"
          accept-charset="UTF-8"
        >
          <label for="cta_fields_fname" className="is-hidden">
            First Name
          </label>
          <input
            id="cta_fields_fname"
            type="text"
            name="fields_fname"
            placeholder="First Name"
          />
          <label for="cta_fields_email" className="is-hidden">
            Email Address
          </label>
          <input
            id="cta_fields_email"
            type="email"
            name="fields_email"
            placeholder="Email Address"
            title="The domain portion of the email address is invalid (the portion after the @)."
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
            required=""
          />
          <Button text="Get Alerts" isGreen />
        </form>
      </div>
      <div className="close" onClick={handleClick}>
        <SvgWrapper childStyle="width:1em;height:1em; margin-bottom: -0.2em;">
          {getIconById(ICONS_ID.IconClose, undefined, "#fff")}
        </SvgWrapper>
      </div>
    </MainWrapper>
  );
};
