import React from "react";
import { IconUserLogin } from "../../icons";
import { MainWrapper } from "./customerAccount.styles";

export const CustomerAccount = () => {
  return (
    <MainWrapper>
      <>
        <div class="user-account-link">
          <a href="/store/customer/account">
            <IconUserLogin />
            <label>Account</label>
          </a>
        </div>

        <div class="user-login-link">
          <IconUserLogin />
          <label>Login</label>
        </div>
      </>
    </MainWrapper>
  );
};
