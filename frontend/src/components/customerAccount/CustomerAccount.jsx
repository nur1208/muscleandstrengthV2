import React from "react";
import { Link } from "react-router-dom";
import { IconUserLogin } from "../../icons";
import { MainWrapper } from "./customerAccount.styles";

export const CustomerAccount = () => {
  return (
    <MainWrapper>
      <>
        <div class="user-account-link">
          <Link to="/store/customer/account/create">
            <IconUserLogin />
            <label>Account</label>
          </Link>
        </div>

        <div class="user-login-link">
          <Link to="/store/customer/account/login">
            <IconUserLogin />
            <label>Login</label>
          </Link>
        </div>
      </>
    </MainWrapper>
  );
};
