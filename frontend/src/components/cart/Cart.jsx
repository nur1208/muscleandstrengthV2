import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useReduxActions } from "../../hooks";
import colors from "../../styles/colors";
import { Button } from "../button/Button";
import { useNotification } from "../Notification";
import { StoreSectionSwiper } from "../storeSectionSwiper/StoreSectionSwiper";
import { MainWrapper } from "./cart.styles";
import { Price } from "./Price";
import { QtyWrapper } from "./QtyWrapper";

export const Cart = ({ isSimple }) => {
  const {
    product_store: { data },
    user_store: { userData, loading },
  } = useSelector((state) => state);
  const { updateUserInfo } = useReduxActions();
  const [currentActionIndex, setCurrentActionIndex] =
    useState(-1);
  const [currentActiveIndexQty, setCurrentActiveIndexQty] =
    useState(-1);

  const trendingProps = {
    title: "Trending Products",
    products: data?.trendingProducts,
  };

  const handleDelete = (e, index) => {
    e.preventDefault();
    setCurrentActiveIndexQty(-1);
    setCurrentActionIndex(index);
    updateUserInfo({
      cart: {
        operation: "pull",
        value: {
          buyingOptionId: userData.cart[index].buyingOptionId,
          product: userData.cart[index].product._id,
          selectedFlavor: userData.cart[index].selectedFlavor,
        },
      },
    });
  };

  const dispatch = useNotification();

  const updateQty = (index, qty) => {
    const newObject = {};
    const key = "cart.<index>" + index + ".qty";
    newObject[key] = qty;
    updateUserInfo(newObject);
  };
  const handleOnClickQty = (e, qty, index, hasFreeProduct) => {
    e.preventDefault();
    if (qty <= 0)
      return dispatch({
        type: "error",
        message: `qty must be bigger than 0`,
        title: `inValid value for qty`,
        position: "bottomL",
        iconColor: colors.red,
      });
    setCurrentActionIndex(-1);

    if (hasFreeProduct) {
      const currentBuyingOptionId =
        userData?.cart[index].buyingOptionId;
      const newObject = {};

      userData?.cart.forEach(({ buyingOptionId }, indexEl) => {
        if (currentBuyingOptionId === buyingOptionId) {
          // updateQty(indexEl, qty);
          const key = "cart.<index>" + indexEl + ".qty";
          newObject[key] = qty;
        }
      });

      updateUserInfo(newObject);
      setCurrentActiveIndexQty(currentBuyingOptionId);
      return;
    }
    setCurrentActiveIndexQty(index);

    updateQty(index, qty);
  };

  return (
    <MainWrapper>
      <form id="cartForm">
        <input
          name="form_key"
          type="hidden"
          value="w9Wh3qVYraVkgt8H"
        />
        <div class="cart-wrap currency-grid">
          <div class="grid-row-labels cart-labels css-grid">
            <div class="image box-image">image</div>
            <div class="product box-info">product</div>
            <div class="unit-price box-price">unit price</div>
            <div class="qty box-quantity">qty</div>
            <div class="subtotal box-subtotal">subtotal</div>
          </div>
          {userData?.cart &&
            userData.cart.map(
              (
                {
                  qty,
                  product,
                  buyingOptionId,
                  selectedFlavor,
                  _id,
                  isFree,
                },
                index
              ) => {
                const buyingOption =
                  product?.buyingOptions?.find(
                    ({ _id }) => _id === buyingOptionId
                  );

                const to =
                  `/store/product/${product?.name?.replaceAll(
                    " ",
                    "-"
                  )}/${product._id}`.replace("%", "");
                const title = `${product?.brand?.title} ${
                  product?.name
                } - ${buyingOption?.title} ${
                  selectedFlavor ? selectedFlavor : ""
                }`;

                if (!product.name) return;
                const hasFreeProduct = buyingOption.deal
                  ?.toLocaleLowerCase()
                  ?.includes("buy 1 get 1 free");
                return (
                  <div
                    key={_id}
                    class="grid-row cart-item css-grid"
                  >
                    <div class="item-image box-image">
                      <Link to={to}>
                        <img
                          src={product.imgUrl[400].split(" ")[0]}
                          alt={title}
                          title={title}
                        />
                      </Link>
                    </div>
                    <div class="item-info box-info">
                      <span class="product-name">
                        <Link to={to}>{title}</Link>
                      </span>
                      <Price
                        isFree={isFree}
                        buyingOption={buyingOption}
                      />
                    </div>
                    <div class="box-messages">
                      {buyingOption.deal &&
                        (!hasFreeProduct || isFree) && (
                          <span class="mns-label lbl-deal">
                            {buyingOption.deal}
                          </span>
                        )}

                      <div class="options_messages">
                        {isFree && (
                          <dl class="item-options 47565523">
                            <dt>1 x {title}</dt>
                          </dl>
                        )}
                      </div>
                    </div>
                    <div class="retail-price-wrap box-price">
                      <div class="item-price">
                        <Price
                          isFree={isFree}
                          buyingOption={buyingOption}
                        />
                      </div>
                    </div>
                    <div class="qty-wrap box-quantity">
                      <label
                        for="cart[47515693][qty]"
                        class="is-hidden"
                      >
                        Quantity for Item
                      </label>
                      <QtyWrapper
                        qty={qty}
                        index={index}
                        loading={
                          (currentActiveIndexQty === index ||
                            buyingOptionId ===
                              currentActiveIndexQty) &&
                          loading
                        }
                        isFree={isFree}
                        hasFreeProduct={hasFreeProduct}
                        handleOnClickQty={handleOnClickQty}
                      />
                      {!isFree && (
                        <span className="delete">
                          <Button
                            text="Delete"
                            isDynxs
                            // isBlue
                            loading={
                              loading &&
                              currentActionIndex === index
                            }
                            onClick={(e) =>
                              handleDelete(e, index)
                            }
                          />
                        </span>
                      )}
                    </div>
                    <div class="price-wrap box-subtotal">
                      <div class="item-subtotal">
                        <span class="price">
                          {isFree
                            ? "Free"
                            : `$${Number(
                                qty *
                                  buyingOption.cost.regularPrice
                              ).toFixed(2)}`}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </form>
      {!isSimple && (
        <>
          <h5 class="blue bordered">Limited Time Cart Offers</h5>
          <StoreSectionSwiper {...trendingProps} />
        </>
      )}
    </MainWrapper>
  );
};
