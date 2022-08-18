import { useEffect, useRef, useState } from "react";
import { OPENED_TYPES } from "../redux/constants";
import { useReduxActions } from "./useReduxActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Hook
export function useSubmenu() {
  const { updateIsOpen } = useReduxActions();
  const { isOpen, openedType } = useSelector(
    (state) => state.navbar_store
  );
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => {
    updateIsOpen({
      isOpen: true,
      openedType: OPENED_TYPES.NAVBAR,
    });
    setValue(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    updateIsOpen({
      isOpen: false,
      openedType: undefined,
    });
    setValue(false);
  };

  const handleClick = () => {
    updateIsOpen({
      isOpen: true,
      openedType: OPENED_TYPES.SIDE_NAVBAR,
    });
    setValue(true);
  };

  const handleBack = () => {
    setValue(false);
  };

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        if (isOpen && openedType === OPENED_TYPES.SIDE_NAVBAR) {
          node.addEventListener("click", handleClick);
          return () => {
            node.removeEventListener("click", handleClick);
          };
        } else {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleClose);
          return () => {
            node.removeEventListener(
              "mouseover",
              handleMouseOver
            );
            node.removeEventListener("mouseout", handleClose);
          };
        }
      }
    },
    [ref.current, isOpen, openedType] // Recall only if ref changes
  );

  const navigate = useNavigate();
  const handleClickItemBtn = (href) => {
    if (isOpen && openedType === OPENED_TYPES.NAVBAR) {
      updateIsOpen({ isOpen: false });
      navigate(href);
    }
  };

  const handleClickGoTo = (href) => {
    updateIsOpen({ isOpen: false });
    navigate(href);
  };
  return [
    ref,
    value,
    handleBack,
    handleClickItemBtn,
    handleClickGoTo,
  ];
}
