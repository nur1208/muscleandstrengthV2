import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Banner,
  Cart,
  CartHeader,
  CartTools,
  EmailSignUp,
  EmptyCart,
  Footer,
  Header,
  NavbarInfo,
  PerksFooter,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { useUpdateCustomNavInfo } from "../../hooks";
import { MainWrapper } from "./shoppingCart.styles";
export const ShoppingCart = () => {
  useUpdateCustomNavInfo(" > Store");
  const { userData } = useSelector(
    ({ user_store }) => user_store
  );
  return (
    <MainWrapper>
      <div id="page">
        {" "}
        <Banner {...BANNER_BLOCK_12} />
        <Header />
        <NavbarInfo />
        <div id="main-wrap" class="wide-format">
          <div class="main-content wide-format">
            {userData && userData.cart.length ? (
              <>
                <CartHeader />
                <Cart />
                <CartTools />
              </>
            ) : (
              <EmptyCart />
            )}
          </div>
        </div>
      </div>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
