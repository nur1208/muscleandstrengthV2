import React from "react";
import { CartTool } from "./CartTool";
import { MainWrapper } from "./cartTools.styles";
import { OrderTotals } from "./OrderTotals";
import { RewardsBox } from "./RewardsBox";
import { ShippingSip } from "./ShippingSip";

export const CartTools = () => {
  return (
    <MainWrapper>
      <CartTool title="Coupons &amp; Rewards">
        <RewardsBox />
      </CartTool>
      <CartTool title="Estimate Shipping">
        <ShippingSip />
      </CartTool>
      <CartTool title="Order Totals">
        <OrderTotals />
      </CartTool>
    </MainWrapper>
  );
};
