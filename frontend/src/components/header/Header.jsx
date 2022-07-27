import React from "react";
import {
  HamburgerMenu,
  Flag,
  WebsiteLogo,
  Card,
  CustomerAccount,
} from "../index";
import { MainWrapper } from "./header.styles";

export const Header = () => {
  return (
    <MainWrapper>
      <div class="header-inner">
        <div class="grid-x">
          <HamburgerMenu />
          <div class="cell country-switcher">
            <Flag />
          </div>
          <div class="cell website-logo">
            <WebsiteLogo />
          </div>
          <div class="cell shopping-cart">
            <Card />
          </div>

          <div class="cell customer-account">
            <CustomerAccount />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
