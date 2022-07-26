import React from "react";
import { MainWrapper } from "./hamburgerMenu.styles";

export const HamburgerMenu = () => {
  return (
    <MainWrapper class="cell hamburger-menu">
      <div class="hamburger-button">
        <span class="ingredient"></span>
        <span class="ingredient"></span>
        <span class="ingredient"></span>
        <label>Menu</label>
      </div>
    </MainWrapper>
  );
};
