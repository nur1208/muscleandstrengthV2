import { useEffect, useRef, useState } from "react";
import { OPENED_TYPES } from "../redux/constants";

// Hook
export function useHover(setReduxValue) {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = setReduxValue
    ? () => {
        setReduxValue({
          isOpen: true,
          openedType: OPENED_TYPES.NAVBAR,
        });
        setValue(true);
      }
    : () => setValue(true);
  const handleMouseOut = setReduxValue
    ? () => {
        setReduxValue({
          isOpen: false,
          openedType: undefined,
        });
        setValue(false);
      }
    : () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
