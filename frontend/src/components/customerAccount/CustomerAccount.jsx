import React from "react";
import { useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useReduxActions } from "../../hooks";
import {
  getIconById,
  ICONS_ID,
  IconUserLogin,
  SvgWrapper,
} from "../../icons";
import { MODAL_TYPES } from "../../redux/constants";
import { MainWrapper } from "./customerAccount.styles";

export const CustomerAccount = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { updateModalState, logout } = useReduxActions();

  const { userData } = useSelector((state) => state.user_store);

  const handleOnClick = () => {
    if (pathname.includes("store")) {
      updateModalState({
        isOpen: true,
        type: MODAL_TYPES.LOGIN,
      });
    } else navigate("/store/customer/account/login");
  };
  const handleLogout = (e) => {
    e.stopPropagation();
    logout();
    navigate("/store/customer/account/logoutSuccess");
  };

  const handleClickAccount = () => {
    if (!pathname.includes("store"))
      navigate("/store/customer/account");
  };
  return (
    <MainWrapper>
      <>
        {userData ? (
          <div class="user-account-link">
            <a onClick={handleClickAccount}>
              <IconUserLogin />
              <label>
                Account <span class="caret-down"></span>
              </label>
              <div class="store-dropdown">
                <div class="user-account">
                  <div class="welcome">Welcome, md</div>
                  <ul class="account-menu">
                    <li>
                      <a
                        rel="nofollow"
                        onClick={() =>
                          navigate("/store/customer/account")
                        }
                      >
                        <SvgWrapper childStyle="width:1.3em!important; height:1.3em!important; margin-bottom:-.3em!important; margin-right: 0.1em;">
                          {getIconById(ICONS_ID.IconAccount)}
                        </SvgWrapper>{" "}
                        My Account
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.muscleandstrength.com/store/sales/order/history/"
                      >
                        <SvgWrapper childStyle="width:1.3em!important; height:1.3em!important; margin-bottom:-.3em!important; margin-right: 0.1em;">
                          {getIconById(ICONS_ID.IconHistory)}
                        </SvgWrapper>{" "}
                        Order History
                      </a>
                    </li>
                    <li class="logout">
                      <a rel="nofollow" onClick={handleLogout}>
                        <SvgWrapper childStyle="width:1.3em!important; height:1.3em!important; margin-bottom:-.3em!important; margin-right: 0.1em;">
                          {getIconById(ICONS_ID.IconLogout)}
                        </SvgWrapper>{" "}
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        ) : (
          <div class="user-login-link">
            <a onClick={handleOnClick}>
              <IconUserLogin />
              <label>Login</label>
            </a>
          </div>
        )}

        {/* <div class="store-action account has-dropdown"> */}
        {/* <IconUserLogin /> */}
        {/* <span class="text show-auth">
            Account <span class="caret-down"></span>
          </span> */}
        {/* <span class="text hide-auth">Login</span> */}
        {/* </div> */}
      </>
    </MainWrapper>
  );
};
