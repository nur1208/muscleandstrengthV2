import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { SwitchWrapper } from "./form.styles";

export const GetNotified = () => {
  const { userInput } = useSelector((state) => state.user_store);

  const { updateField } = useReduxActions();

  const [toggleSwitch, setToggleSwitch] = useState(true);
  //  setToggleSwitch(!toggleSwitch);
  const initIsNotified = userInput.signUp?.isNotified;
  const handleOnClick = () => {
    const newObject = {};
    newObject.signUp = { ...userInput.signUp };
    newObject.signUp.isNotified = !initIsNotified;
    updateField(newObject);
  };
  return (
    <div class="newsletter">
      <div class="switch-wrapper">
        <div class="switch small">
          <input
            onClick={handleOnClick}
            class="switch-input"
            id="is_subscribed"
            type="checkbox"
            name="is_subscribed"
            value="1"
            checked="checked"
          />
          <SwitchWrapper toggleSwitch={initIsNotified}>
            <label class="switch-paddle" for="is_subscribed">
              <span class="switch-active" aria-hidden="true">
                Yes
              </span>
              <span class="switch-inactive" aria-hidden="true">
                No
              </span>
            </label>
          </SwitchWrapper>
        </div>
      </div>
      <div class="subscribe-text">
        Get notified via email when we post new deals, coupons
        and free gift offers?{" "}
      </div>
    </div>
  );
};
