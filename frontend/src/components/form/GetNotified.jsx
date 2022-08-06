import React, { useState } from "react";
import { SwitchWrapper } from "./form.styles";

export const GetNotified = () => {
  const [toggleSwitch, setToggleSwitch] = useState(true);
  return (
    <div class="newsletter">
      <div class="switch-wrapper">
        <div class="switch small">
          <input
            onClick={() => setToggleSwitch(!toggleSwitch)}
            class="switch-input"
            id="is_subscribed"
            type="checkbox"
            name="is_subscribed"
            value="1"
            checked="checked"
          />
          <SwitchWrapper toggleSwitch={toggleSwitch}>
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
