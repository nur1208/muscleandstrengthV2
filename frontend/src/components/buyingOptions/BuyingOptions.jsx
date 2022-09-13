import React, { useState } from "react";
import { useReduxActions } from "../../hooks";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MODAL_TYPES } from "../../redux/constants/modal";
import { Button } from "../button/Button";
import { featuresListData } from "../featuresList/data";
import { useNotification } from "../Notification";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { BuyingOption } from "./BuyingOption";
import { MainWrapper } from "./buyingOptions.styles";
import colors from "../../styles/colors";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const BuyingOptions = ({ options: buyingOptions }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [unSelectedF, setUnSelectedF] = useState([]);
  const { updateModalState, updateUserInfo } = useReduxActions();
  const { userData, loading } = useSelector(
    (state) => state.user_store
  );

  const handleClick = () => {
    updateModalState({
      isOpen: true,
      type: MODAL_TYPES.FEATHER_LIGHT,
      content: featuresListData[0].content,
    });
  };

  const handleClickSecure = () =>
    updateModalState({
      isOpen: true,
      type: MODAL_TYPES.SECURE_TRANSACTION,
    });
  const dispatch = useNotification();

  const handleClickAddCart = () => {
    // if cart is empty
    if (!cart.length)
      return dispatch({
        type: "error",
        message: `you must select a buying option`,
        title: `select a buying option`,
        position: "bottomL",
        iconColor: colors.green,
      });

    const unSelected = [];
    // check if a user select a Flavor and update selectedFlavor value
    let newCart = cart.map((item) => {
      const { selectedFlavor, buyingOptionId } = item;
      if (selectedFlavor && selectedFlavor.index === 0) {
        unSelected.push(buyingOptionId);
        return item;
      } else
        return {
          ...item,
          selectedFlavor: selectedFlavor
            ? selectedFlavor.value
            : undefined,
          product: id,
        };
    });

    // if unselected flavor found
    setUnSelectedF(unSelected);
    if (unSelected.length) {
      return dispatch({
        type: "error",
        message: `you must select a flavor for each buying option with flavors`,
        title: `select a flavor`,
        position: "bottomL",
        iconColor: colors.green,
      });
    }

    // check for duplicate items in user's cart
    // productId, buyingOptionId and selectedFlavor is unique value
    // const foundDuplicate = newCart.find(
    //   ({
    //     product: productID,
    //     selectedFlavor: selectedFlavorNew,
    //     buyingOptionId: buyingOptionIdNew,
    //   }) =>
    //     userData.cart.find(
    //       ({ product, selectedFlavor, buyingOptionId }) =>
    //         product._id === productID &&
    //         selectedFlavor === selectedFlavorNew &&
    //         buyingOptionId === buyingOptionIdNew
    //     )
    // );

    const foundDuplicate = newCart.map(
      ({
        product: productID,
        selectedFlavor: selectedFlavorNew,
        buyingOptionId: buyingOptionIdNew,
      }) =>
        userData.cart.findIndex(
          ({ product, selectedFlavor, buyingOptionId }) =>
            product._id === productID &&
            (!selectedFlavor ||
              selectedFlavor === selectedFlavorNew) &&
            buyingOptionId === buyingOptionIdNew
        )
    );

    const filteredNewCart = newCart.filter(
      (_, index) => foundDuplicate[index] === -1
    );

    // new cart is no empty
    if (filteredNewCart.length) {
      updateUserInfo({
        cart: {
          operation: "push",
          value: filteredNewCart,
        },
      });
    }

    if (foundDuplicate.some((item) => item !== -1)) {
      for (
        let index = 0;
        index < foundDuplicate.length;
        index++
      ) {
        const elIndex = foundDuplicate[index];
        if (elIndex === -1) break;
        const newObject = {};
        const key = "cart.<index>" + elIndex + ".qty";
        newObject[key] =
          userData.cart[elIndex].qty + newCart[index].qty;

        // console.log(newObject);
        updateUserInfo(newObject);
      }
    }

    console.log({ filteredNewCart, newCart, foundDuplicate });

    // if (foundDuplicate) {
    //   return dispatch({
    //     type: "error",
    //     message: `this product is already added to your cart`,
    //     title: `found duplicate items`,
    //     position: "bottomL",
    //     iconColor: colors.green,
    //   });
    // }

    // navigate("/store/checkout/cart");
  };
  return (
    <MainWrapper>
      <SectionTitle title="Buying Options" />
      <div>
        <div class="section-inner-wrap">
          <div class="group-wrap">
            {buyingOptions.map((data) => (
              <BuyingOption
                setCart={setCart}
                key={data._id}
                {...data}
                isError={unSelectedF.includes(data._id)}
              />
            ))}

            <div class="space-break">&nbsp;</div>
          </div>
        </div>
        <div class="section-separator"></div>
        <div class="section-inner-wrap add-to-cart-wrap">
          <div class="add-to-cart">
            <div>
              <Button
                text="Add to Cart"
                hasLoader
                isBlue
                isLarge
                loading={loading}
                onClick={handleClickAddCart}
              />
              {/* <button
                class="btn btn-lg btn-submit btn-addtocartprodpage"
                // onclick="productAddToCartForm.submit(this, event); return false;"
              >
                <span class="css-loader-block">
                  <span class="css-loader"></span>
                </span>
              </button> */}
            </div>
          </div>
        </div>
        <div class="secure-transaction-notice">
          <span
            class="secure-transaction-link"
            onClick={handleClickSecure}
          >
            {getIconById(ICONS_ID.IconPadlock)}
            Secure Transaction
          </span>
        </div>
        <div class="section-inner-wrap reward-points-section">
          <div class="reward-points-wrap">
            <span
              href="#"
              onClick={handleClick}
              data-featherlight="#features-list-rewards"
              data-featherlight-variant="fancy"
              class="points-label"
            >
              Reward Points Earned{" "}
              <SvgWrapper childStyle="width: 1.3em; height: 1.3em; margin-bottom: -.3em!important;">
                {getIconById(ICONS_ID.IconQuestionMark)}
              </SvgWrapper>
            </span>
            <div class="points-earned">
              <span class="points">0</span> Points
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
