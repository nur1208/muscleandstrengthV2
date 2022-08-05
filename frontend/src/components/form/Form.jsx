import React from "react";
import { Button } from "../button/Button";
import { loginFields } from "./data";
import { Field } from "./Field";
import { MainWrapper } from "./form.styles";
import { Messages } from "./Messages";
import { RightLoginInfo } from "./RightLoginInfo";

export const Form = () => {
  return (
    <MainWrapper>
      <div class="login-wrapper">
        <div class="grid-x">
          <div class="cell bp740-8 customer-login">
            <Messages />
            <h1 class="page-title text-center">
              Login to Your Account
            </h1>
            <form
              class="pre-validate"
              action="https://www.muscleandstrength.com/store/customer/account/loginPost/"
              method="post"
              id="login-form"
            >
              <div class="invalid-message message red"></div>
              <input
                name="form_key"
                type="hidden"
                value="6dO6dYf0HXqCs6KS"
              />
              <div class="row">
                {loginFields.map((data) => (
                  <Field {...data} />
                ))}
              </div>
              <div class="button-wrap">
                <Button
                  text="Login"
                  isBlue
                  isExpanded
                  hasLoader
                />
                {/* <button
                  type="submit"
                  onclick="$j(this).addClass('animating');mnsAuthSubmitLoginBefore(this.form);"
                  class="btn btn-blue btn-submit has-recaptcha btn-expanded"
                  name="send"
                  id="send2"
                >
                  Login{" "}
                  <span class="css-loader-block">
                    <span class="css-loader"></span>
                  </span>
                </button> */}
              </div>
              <div class="font-s-small forgot-pass">
                <a href="https://www.muscleandstrength.com/store/customer/account/forgotpassword/">
                  Forgot your password?
                </a>
              </div>
              <input
                type="hidden"
                name="client_validation"
                value=""
              />
            </form>
          </div>
          <div class="cell bp740-4 new-customer-create-account">
            <h3>Don't Have an Account?</h3>
            <RightLoginInfo />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
