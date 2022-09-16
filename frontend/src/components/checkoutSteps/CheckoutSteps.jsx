import React from "react";
import { AddressForm } from "./AddressForm";
import { CheckoutMethod } from "./CheckoutMethod";
import { MainWrapper } from "./checkoutSteps.style";
import { OrderReview } from "./OrderReview";
import { PaymentInformation } from "./PaymentInformation";
import { ShippingMethod } from "./ShippingMethod";
import { Step } from "./Step";

export const CheckoutSteps = () => {
  return (
    <MainWrapper>
      <Step title="1 Checkout Method">
        <CheckoutMethod />
      </Step>
      <Step title="2 Billing Information">
        <AddressForm />
      </Step>
      <Step title="3 Shipping Information">
        <AddressForm isShipping />
      </Step>
      <Step title="4 Shipping Method">
        <ShippingMethod />
      </Step>
      <Step title="5 Payment Information">
        <PaymentInformation />
      </Step>
      <Step title="6 Order Review">
        <OrderReview />
      </Step>
    </MainWrapper>
  );
};
