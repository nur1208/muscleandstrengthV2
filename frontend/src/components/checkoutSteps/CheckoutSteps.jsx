import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useReduxActions, useUpdateSteps } from "../../hooks";
import { AddressForm } from "./AddressForm";
import { CheckoutMethod } from "./CheckoutMethod";
import { MainWrapper } from "./checkoutSteps.style";
import { OrderReview } from "./OrderReview";
import { PaymentInformation } from "./PaymentInformation";
import { ShippingMethod } from "./ShippingMethod";
import { Step } from "./Step";

export const CheckoutSteps = () => {
  const {
    userInput: { checkout },
  } = useSelector((state) => state.user_store);

  const [_, useInit] = useUpdateSteps();
  useInit();

  return (
    <MainWrapper>
      {checkout.steps.map(({ child, ...other }, index) => (
        <Step index={index} key={`${index + 1}-step`} {...other}>
          {child}
        </Step>
      ))}
    </MainWrapper>
  );
};
