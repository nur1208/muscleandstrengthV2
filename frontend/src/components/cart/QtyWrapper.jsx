import React, { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useReduxActions } from "../../hooks";
import colors from "../../styles/colors";
import { Button } from "../button/Button";
import { useNotification } from "../Notification";

const Wrapper = ({
  qty,
  handleOnChange,
  handleOnKeyDown,
  handleOnClick,
  loading,
  index,
  isFree,
  hasFreeProduct,
}) => (
  <>
    <input
      // id="cart[47515693][qty]"
      // type="number"
      class="qty text-center input-dynxs"
      // name="cart[47515693][qty]"
      onChange={handleOnChange}
      value={qty}
      onKeyDown={handleOnKeyDown}
      // size="2"
      // maxlength="3"
    />{" "}
    {!isFree && (
      <span className="update-text">
        <Button
          text="Update Qty"
          isDynxs
          onClick={(e) =>
            handleOnClick(e, qty, index, hasFreeProduct)
          }
          loading={loading}
        />
      </span>
    )}
  </>
);

export const QtyWrapper = ({
  qty: intQty,
  index,
  loading,
  handleOnClickQty,
  isFree,
  hasFreeProduct,
}) => {
  const [qty, setQty] = useState(intQty);
  useEffect(() => {
    setQty(intQty);
  }, [intQty]);
  const isNotPC = useMediaQuery({ maxWidth: 839 });
  const handleOnKeyDown = (e) => {
    if (["Backspace", "ArrowUp", "ArrowDown"].includes(e.key))
      e.preventDefault();

    if ("ArrowUp" === e.key) {
      setQty("" + (Number(qty) + 1));
    }

    if ("ArrowDown" === e.key) {
      setQty("" + (Number(qty) - 1));
    }

    if ("Backspace" === e.key) {
      console.log(qty.slice(0, qty.length - 1));
      setQty(qty.slice(0, qty.length - 1));
    }
  };

  const handleOnChange = (e) => {
    if (!Number(e.target.value)) return;

    setQty(e.target.value);
  };

  //   const dispatch = useNotification();
  //   const { updateUserInfo } = useReduxActions();

  //   const handleOnClick = (e) => {
  //     e.preventDefault();
  //     if (qty <= 0)
  //       return dispatch({
  //         type: "error",
  //         message: `qty must be bigger than 0`,
  //         title: `inValid value for qty`,
  //         position: "bottomL",
  //         iconColor: colors.red,
  //       });
  //     setCurrentActiveIndex(index);

  //     const newObject = {};
  //     const key = "cart.<index>" + index + ".qty";
  //     newObject[key] = qty;
  //     updateUserInfo(newObject);
  //   };
  const props = {
    handleOnClick: handleOnClickQty,
    handleOnKeyDown,
    handleOnChange,
    qty,
    loading,
    index,
    isFree,
    hasFreeProduct,
  };
  return isNotPC ? (
    <div>
      <Wrapper {...props} />
    </div>
  ) : (
    <>
      <Wrapper {...props} />
    </>
  );
};
