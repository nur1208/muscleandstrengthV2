import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { OPENED_TYPES } from "../../redux/constants";
import { MainWrapper } from "./hamburgerMenu.styles";

export const HamburgerMenu = () => {
  const { updateIsOpen } = useReduxActions();
  const { isOpen } = useSelector((state) => state.navbar_store);

  const handleOnClick = () => {
    updateIsOpen({
      isOpen: !isOpen,
      openedType: OPENED_TYPES.SIDE_NAVBAR,
    });
  };
  return (
    <MainWrapper
      onClick={handleOnClick}
      class="cell hamburger-menu"
    >
      <div class="hamburger-button">
        <span class="ingredient"></span>
        <span class="ingredient"></span>
        <span class="ingredient"></span>
        <label>Menu</label>
      </div>
    </MainWrapper>
  );
};
