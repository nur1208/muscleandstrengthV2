import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button/Button";
import { StoreSectionSwiper } from "../storeSectionSwiper/StoreSectionSwiper";
import { MainWrapper } from "./cart.styles";

export const Cart = () => {
  const { data } = useSelector((state) => state.product_store);

  const trendingProps = {
    title: "Trending Products",
    products: data?.trendingProducts,
  };
  return (
    <MainWrapper>
      <form
        id="cartForm"
        action="https://www.muscleandstrength.com/store/checkout/cart/updatePost/"
        method="post"
      >
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
          <div class="grid-row cart-item css-grid">
            <div class="item-image box-image">
              <a href="https://www.muscleandstrength.com/store/omega-3.html">
                <img
                  src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/thumbnail/230x/9df78eab33525d08d6e5fb8d27136e95/o/m/omega_3_100_softgels.jpg"
                  alt="NOW Foods Omega-3 - 100 Softgels"
                  title="NOW Foods Omega-3 - 100 Softgels"
                />
              </a>
            </div>
            <div class="item-info box-info">
              <span class="product-name">
                <a href="https://www.muscleandstrength.com/store/omega-3.html">
                  NOW Foods Omega-3 - 100 Softgels
                </a>
              </span>
              <span class="price">$9.99</span>{" "}
            </div>
            <div class="box-messages">
              <div class="options_messages"></div>
            </div>
            <div class="retail-price-wrap box-price">
              <div class="item-price">
                <span class="price">$9.99</span>{" "}
              </div>
            </div>
            <div class="qty-wrap box-quantity">
              <label for="cart[47515693][qty]" class="is-hidden">
                Quantity for Item
              </label>
              <input
                id="cart[47515693][qty]"
                type="number"
                class="qty text-center input-dynxs"
                name="cart[47515693][qty]"
                value="1"
                size="2"
                maxlength="3"
              />
              <span className="update-text">
                <Button text="Update Qty" isDynxs />
              </span>
              <Button text="Delete" isDynxs />
            </div>
            <div class="price-wrap box-subtotal">
              <div class="item-subtotal">
                <span class="price">$9.99</span>{" "}
              </div>
            </div>
          </div>
          <div class="grid-row cart-item css-grid">
            <div class="item-image box-image">
              <div class="padding">
                <a href="https://www.muscleandstrength.com/store/catalog/product/view/id/36502/s/free-now-foods-omega-3-100-softgels/">
                  <img
                    src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/thumbnail/230x/9df78eab33525d08d6e5fb8d27136e95/o/m/omega_3_100_softgels_5.jpg"
                    alt="FREE NOW Foods Omega-3, 100 Softgels"
                    title="FREE NOW Foods Omega-3, 100 Softgels"
                  />
                </a>
              </div>
            </div>
            <div class="item-info box-info">
              <span class="product-name">
                NOW Foods Omega-3, 100 Softgels{" "}
              </span>
              <span class="price">FREE</span>
            </div>
            <div class="box-messages">
              <span class="mns-label lbl-deal">
                Buy 1 Get 1 FREE{" "}
              </span>
              <div class="options_messages">
                <dl class="item-options 47540391">
                  <dt>1 x NOW Foods Omega-3 - 100 Softgels </dt>
                </dl>
              </div>
            </div>
            <div class="retail-price-wrap box-price">
              <div class="padding">
                <div class="item-price">
                  <span class="price">FREE</span>
                </div>
              </div>
            </div>
            <div class="qty-wrap box-quantity">
              <label class="is-hidden" for="promo_item_47540391">
                Free Qty
              </label>
              <input
                id="promo_item_47540391"
                disabled=""
                class="qty text-center input-sm"
                value="1"
                size="2"
                maxlength="3"
              />
            </div>
            <div class="price-wrap box-subtotal">
              <div class="item-subtotal">
                <span class="price">FREE</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <h5 class="blue bordered">Limited Time Cart Offers</h5>
      <StoreSectionSwiper {...trendingProps} />
    </MainWrapper>
  );
};
