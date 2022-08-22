import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { isValidEmail } from "../../utils";
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
  const { signUp, login, createUserError } = useReduxActions();
  const { userInput } = useSelector((state) => state.user_store);

  const isValid = (type) => {
    if (!userInput[type]?.email) {
      createUserError("Email is required");
      return false;
    }

    if (!isValidEmail(userInput[type]?.email)) {
      createUserError("please enter a valid email");
      return false;
    }

    if (!userInput[type]?.password) {
      createUserError("Password is required");
      return false;
    }

    if (type === "login") return true;

    if (!userInput[type]?.lastName) {
      createUserError("Last name is required");
      return false;
    }

    if (!userInput[type]?.firstName) {
      createUserError("First name is required");
      return false;
    }

    if (!userInput[type]?.confirmation) {
      createUserError("Confirm password is required");
      return false;
    }
    if (
      userInput[type]?.password !== userInput[type]?.confirmation
    ) {
      createUserError("confirm password must equal password");
      return false;
    }

    return true;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (type === FORM_TYPES.SIGN_UP) {
      if (isValid("signUp")) signUp(userInput.signUp);
    } else {
      if (isValid("login")) login(userInput.login);
    }
  };

  useEffect(() => {
    return () => {
      createUserError(null);
    };
  }, []);

  return (
    <MainWrapper>
      <div class="login-wrapper">
        <div class="grid-x">
          <div
            class={
              type !== FORM_TYPES.LOGIN_MODAL
                ? "cell bp740-8 customer-login"
                : ""
            }
          >
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
                  <Field {...data} formType={type} />
                ))}
              </div>
              {type === FORM_TYPES.SIGN_UP && <GetNotified />}

              <div class="button-wrap">
                <Button
                  text={
                    type === FORM_TYPES.SIGN_UP
                      ? "Create Account"
                      : "Login"
                  }
                  isBlue
                  onClick={handleOnClick}
                  isExpanded
                  hasLoader
                />
                {type === FORM_TYPES.LOGIN_MODAL && (
                  <Button
                    text="Create Account"
                    // isBlue
                    isExpanded
                    hasLoader
                  />
                )}
              </div>
              {(type === FORM_TYPES.LOGIN ||
                type === FORM_TYPES.LOGIN_MODAL) && (
                <ForgotPassword />
              )}
            </form>
          </div>
          {type !== FORM_TYPES.LOGIN_MODAL && (
            <div class="cell bp740-4 new-customer-create-account">
              <h3>{sideInfoTitle}</h3>
              {type === FORM_TYPES.LOGIN && <RightLoginInfo />}
              {type === FORM_TYPES.SIGN_UP && (
                <RightSignUpInfo />
              )}
            </div>
          )}
        </div>
      </div>
    </MainWrapper>
  );
};
