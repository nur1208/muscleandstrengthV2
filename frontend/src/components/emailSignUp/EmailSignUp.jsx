import React, { useState } from "react";
import { getIconById, ICONS_ID } from "../../icons";
import {
  COOKIES_CONSTANTS,
  getCookie,
  setCookie,
} from "../../utils";
import { Button } from "../button/Button";
import { MainWrapper } from "./emailSignUp.styles";

export const EmailSignUp = () => {
  const cookieIsStack = getCookie(
    COOKIES_CONSTANTS.IS_STICK,
    true
  );
  const [isSticky, setIsSticky] = useState(
    cookieIsStack === "" ? true : cookieIsStack
    // true
  );
  const handleClick = () => {
    setIsSticky(false);
    setCookie(COOKIES_CONSTANTS.IS_STICK, false, 7);
  };
  return (
    <MainWrapper isSticky={isSticky}>
      <div class="footer-email-signup--inner">
        <div class="grid-x grid-margin-x">
          <div class="cell small-12 medium-6">
            <span class="close" onClick={handleClick}>
              <span class="visually-hidden">Close Form</span>

              {getIconById(ICONS_ID.IconClose)}
            </span>
            <h4>Free Workouts &amp; Advice</h4>
            <p>
              We send you the latest workouts, videos, expert
              guides and deals.
            </p>
          </div>
          <div class="cell small-12 medium-6 aright-self-right align-self-middle">
            <form
              name="icpsignup"
              id="icpsignup6636_footer"
              accept-charset="UTF-8"
              class="newsletter-signup-form"
            >
              <label
                for="contact_me_by_fax_only_footer"
                class="visually-hidden"
              >
                Contact Me By Fax Only. Yes or No?
              </label>
              <input
                type="checkbox"
                id="contact_me_by_fax_only_footer"
                name="contact_me_by_fax_only"
                value="1"
                tabindex="-1"
                autocomplete="off"
              />
              <div class="input-group">
                <label
                  for="fields_email_footer"
                  class="visually-hidden"
                >
                  Email Address
                </label>
                <input
                  class="input-group-field"
                  id="fields_email_footer"
                  type="email"
                  name="fields_email"
                  placeholder="Email Address"
                  title="Please enter your email address"
                  pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                  required=""
                />
                <div class="input-group-button">
                  <Button text="Subscribe" isBlue hasLoader />
                  {/* <button
                    type="submit"
                    class="button"
                    value="Subscribe"
                    onclick="ga('send', 'event', 'button', 'submit', 'Email Signup - Footer')"
                  >
                    Subscribe
                    <span class="css-loader-block">
                      <span class="css-loader"></span>
                    </span>
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
