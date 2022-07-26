import React from "react";
import { HamburgerMenu, Flag, WebsiteLogo } from "../index";
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
        </div>
      </div>
    </MainWrapper>
  );
};
