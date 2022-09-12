import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useReduxActions } from "../../hooks";
import { Button } from "../button/Button";
import { StoreSectionSwiper } from "../storeSectionSwiper/StoreSectionSwiper";
import { MainWrapper } from "./cart.styles";

export const Cart = () => {
  const {
    product_store: { data },
    user_store: { userData, loading },
  } = useSelector((state) => state);
  const isNotPC = useMediaQuery({ maxWidth: 839 });
  const { updateUserInfo } = useReduxActions();
  const [currentActionIndex, setCurrentActionIndex] =
    useState(-1);

  const trendingProps = {
    title: "Trending Products",
    products: data?.trendingProducts,
  };

  const handleDelete = (e, index) => {
    e.preventDefault();
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
                const buyingOption = product.buyingOptions.find(
                  ({ _id }) => _id === buyingOptionId
                );

                const to =
                  `/store/product/${product.name.replaceAll(
                    " ",
                    "-"
                  )}/${product._id}`.replace("%", "");
                const title = `${product.brand.title} ${product.name} - ${buyingOption.title} ${selectedFlavor}`;
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
                      <span class="price">
                        ${buyingOption.cost.regularPrice}
                      </span>{" "}
                    </div>
                    <div class="box-messages">
                      <div class="options_messages"></div>
                    </div>
                    <div class="retail-price-wrap box-price">
                      <div class="item-price">
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
                      {isNotPC ? (
                        <div>
                          <input
                            id="cart[47515693][qty]"
                            type="number"
                            class="qty text-center input-dynxs"
                            name="cart[47515693][qty]"
                            value={qty}
                            size="2"
                            maxlength="3"
                          />{" "}
                          <span className="update-text">
                            <Button text="Update Qty" isDynxs />
                          </span>
                        </div>
                      ) : (
                        <>
                          <input
                            id="cart[47515693][qty]"
                            type="number"
                            class="qty text-center input-dynxs"
                            name="cart[47515693][qty]"
                            value="1"
                            size="2"
                            maxlength="3"
                          />{" "}
                          <span className="update-text">
                            <Button text="Update Qty" isDynxs />
                          </span>
                        </>
                      )}
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
                          ${qty * buyingOption.cost.regularPrice}
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
