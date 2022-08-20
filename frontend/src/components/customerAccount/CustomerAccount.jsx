import React from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useReduxActions } from "../../hooks";
import { IconUserLogin } from "../../icons";
import { MODAL_TYPES } from "../../redux/constants";
import { MainWrapper } from "./customerAccount.styles";

export const CustomerAccount = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { updateModalState } = useReduxActions();

  const handleOnClick = () => {
    if (pathname.includes("store")) {
      updateModalState({
        isOpen: true,
        type: MODAL_TYPES.LOGIN,
      });
    } else navigate("/store/customer/account/login");
  };
  return (
    <MainWrapper>
      <>
        <div class="user-account-link">
          <a onClick={handleOnClick}>
            <IconUserLogin />
            <label>Account</label>
          </a>
        </div>

        <div class="user-login-link">
          <a onClick={handleOnClick}>
            <IconUserLogin />
            <label>Login</label>
          </a>
        </div>
      </>
    </MainWrapper>
  );
};
