import React from "react";
import { HamburgerMenu, Flag } from "../index";
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
        </div>
      </div>
    </MainWrapper>
  );
};
