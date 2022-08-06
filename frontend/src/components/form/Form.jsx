import React from "react";
import { Button } from "../button/Button";
import { FORM_TYPES, loginFields } from "./data";
import { Field } from "./Field";
import { ForgotPassword } from "./ForgotPassword";
import { MainWrapper } from "./form.styles";
import { GetNotified } from "./GetNotified";
import { Messages } from "./Messages";
import { RightLoginInfo } from "./RightLoginInfo";
import { RightSignUpInfo } from "./RightSignUpInfo";

export const Form = ({ fields, title, type, sideInfoTitle }) => {
  return (
    <MainWrapper>
      <div class="login-wrapper">
        <div class="grid-x">
          <div class="cell bp740-8 customer-login">
            <Messages />
            <h1 class="page-title text-center">{title}</h1>
            <form
              class="pre-validate"
              // action="https://www.muscleandstrength.com/store/customer/account/loginPost/"
              // method="post"
              id="login-form"
            >
              <div class="row">
                {fields.map((data) => (
                  <Field {...data} />
                ))}
              </div>
              {type === FORM_TYPES.SIGN_UP && <GetNotified />}

              <div class="button-wrap">
                <Button
                  text="Login"
                  isBlue
                  isExpanded
                  hasLoader
                />
              </div>
              {type === FORM_TYPES.LOGIN && <ForgotPassword />}
            </form>
          </div>
          <div class="cell bp740-4 new-customer-create-account">
            <h3>{sideInfoTitle}</h3>
            {type === FORM_TYPES.LOGIN && <RightLoginInfo />}
            {type === FORM_TYPES.SIGN_UP && <RightSignUpInfo />}
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
