import React from "react";
import { OPENED_TYPES } from "../../redux/constants";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";

export const MenuMask = () => {
  const { isOpen, openedType } = useSelector(
    (state) => state.navbar_store
  );
  const { updateIsOpen } = useReduxActions();

  return isOpen && openedType === OPENED_TYPES.SIDE_NAVBAR ? (
    <div
      onClick={() => updateIsOpen({ isOpen: false })}
      class="menu-mask"
    ></div>
  ) : (
    <></>
  );
};
