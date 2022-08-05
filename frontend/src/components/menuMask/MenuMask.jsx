import React from "react";
import { OPENED_TYPES } from "../../redux/constants";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./menuMask.styles";

export const MenuMask = () => {
  const { isOpen, openedType } = useSelector(
    (state) => state.navbar_store
  );
  const { updateIsOpen } = useReduxActions();

  return isOpen && openedType === OPENED_TYPES.SIDE_NAVBAR ? (
    <MainWrapper
      onClick={() => updateIsOpen({ isOpen: false })}
      class="menu-mask"
    />
  ) : (
    <></>
  );
};
