import React from "react";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";
import { MainWrapper } from "./header.styles";

export const Header = () => {
  return (
    <MainWrapper>
      <div class="header-inner">
        <div class="grid-x">
          <HamburgerMenu />
        </div>
      </div>
    </MainWrapper>
  );
};
