import React from "react";
import { OPENED_TYPES } from "../../redux/constants";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./menuMask.styles";

export const MenuMask = ({ open, onClickH }) => {
  const {
    navbar_store: { isOpen, openedType },
  } = useSelector((state) => state);

  const { updateIsOpen } = useReduxActions();

  return !open &&
    isOpen &&
    openedType === OPENED_TYPES.SIDE_NAVBAR ? (
    <MainWrapper
      onClick={() => updateIsOpen({ isOpen: false })}
      class="menu-mask"
    />
  ) : open ? (
    <MainWrapper
      onClick={() => onClickH()}
      class="menu-mask"
      position="fixed"
    />
  ) : (
    <></>
  );
};
