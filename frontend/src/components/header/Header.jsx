import React from "react";
import {
  HamburgerMenu,
  Flag,
  WebsiteLogo,
  Card,
  CustomerAccount,
  SearchBar,
  Navbar,
  CustomerSupport,
} from "../index";

import { useSelector } from "react-redux";

import { MainWrapper } from "./header.styles";
import { OPENED_TYPES } from "../../redux/constants";

export const Header = () => {
  const { isOpen, openedType } = useSelector(
    (state) => state.navbar_store
  );
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
          <div class="cell site-search">
            <SearchBar />
            <Navbar />
          </div>
          <div class="cell customer-support">
            <CustomerSupport />
          </div>
        </div>
      </div>
      {isOpen && openedType === OPENED_TYPES.NAVBAR && (
        <div class="menu-sys-overlay"></div>
      )}
    </MainWrapper>
  );
};
