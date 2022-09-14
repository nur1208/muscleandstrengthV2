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
import { QtyWrapper } from "./QtyWrapper";

export const Cart = () => {
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
          ...userData.cart[index],
          product: userData.cart[index].product._id,
        },
      },
    });
  };

  const dispatch = useNotification();

  const handleOnClickQty = (e, qty, index) => {
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
    setCurrentActiveIndexQty(index);

    const newObject = {};
    const key = "cart.<index>" + index + ".qty";
    newObject[key] = qty;
    updateUserInfo(newObject);
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
                },
                index
              ) => {
                const buyingOption =
                  product?.buyingOptions?.find(
                    ({ _id }) => _id === buyingOptionId
                  );

                const to =
                  `/store/product/${product.name.replaceAll(
                    " ",
                    "-"
                  )}/${product._id}`.replace("%", "");
                const title = `${product.brand.title} ${
                  product.name
                } - ${buyingOption.title} ${
                  selectedFlavor ? selectedFlavor : ""
                }`;
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
                      {buyingOption.cost.beforeDiscount ? (
                        <div class="before-deal-price">
                          <span class="price">
                            ${buyingOption.cost.beforeDiscount}
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      <span class="price">
                        ${buyingOption.cost.regularPrice}
                      </span>{" "}
                    </div>
                    <div class="box-messages">
                      {buyingOption.deal && (
                        <span class="mns-label lbl-deal">
                          {buyingOption.deal}
                        </span>
                      )}

                      <div class="options_messages">
                        {/* <dl class="item-options 47565523">
                          <dt>
                            1 x NOW Foods Omega-3 - 100 Softgels{" "}
                          </dt>
                        </dl> */}
                      </div>
                    </div>
                    <div class="retail-price-wrap box-price">
                      <div class="item-price">
                        {buyingOption.cost.beforeDiscount ? (
                          <div class="before-deal-price">
                            <span class="price">
                              ${buyingOption.cost.beforeDiscount}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                        <span class="price">
                          ${buyingOption.cost.regularPrice}
                        </span>{" "}
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
                          currentActiveIndexQty === index &&
                          loading
                        }
                        handleOnClickQty={handleOnClickQty}
                      />

                      <span className="delete">
                        <Button
                          text="Delete"
                          isDynxs
                          // isBlue
                          loading={
                            loading &&
                            currentActionIndex === index
                          }
                          onClick={(e) => handleDelete(e, index)}
                        />
                      </span>
                    </div>
                    <div class="price-wrap box-subtotal">
                      <div class="item-subtotal">
                        <span class="price">
                          $
                          {Number(
                            qty * buyingOption.cost.regularPrice
                          ).toFixed(2)}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </form>
      <h5 class="blue bordered">Limited Time Cart Offers</h5>
      <StoreSectionSwiper {...trendingProps} />
    </MainWrapper>
  );
};
