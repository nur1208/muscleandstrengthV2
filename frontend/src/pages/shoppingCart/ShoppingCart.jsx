import React from "react";
import {
  Banner,
  Cart,
  CartHeader,
  CartTools,
  EmailSignUp,
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

  return (
    <MainWrapper>
      <div id="page">
        {" "}
        <Banner {...BANNER_BLOCK_12} />
        <Header />
        <NavbarInfo />
        <div id="main-wrap" class="wide-format">
          <div class="main-content wide-format">
            <CartHeader />
            <Cart />
            <CartTools />
          </div>
        </div>
      </div>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
