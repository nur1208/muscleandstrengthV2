import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AddressForm } from "../components/checkoutSteps/AddressForm";
import { CheckoutMethod } from "../components/checkoutSteps/CheckoutMethod";
import { OrderReview } from "../components/checkoutSteps/OrderReview";
import { PaymentInformation } from "../components/checkoutSteps/PaymentInformation";
import { ShippingMethod } from "../components/checkoutSteps/ShippingMethod";
import { useReduxActions } from "./useReduxActions";

export const useUpdateSteps = () => {
  const { updateField } = useReduxActions();
  const {
    userInput: { checkout },
  } = useSelector((state) => state.user_store);

  const updateSteps = (mapFunction) => {
    const newSteps = checkout.steps.map(mapFunction);

    updateField({ checkout: { ...checkout, steps: newSteps } });
  };

  const useInit = () => {
    useEffect(() => {
      let steps = [
        {
          title: "1 Checkout Method",
          child: <CheckoutMethod />,
        },
        {
          title: "2 Billing Information",
          child: <AddressForm />,
        },
        {
          title: "3 Shipping Information",
          child: <AddressForm isShipping />,
        },
        {
          title: "4 Shipping Method",
          child: <ShippingMethod />,
        },
        {
          title: "5 Payment Information",
          child: <PaymentInformation />,
        },
        {
          title: "6 Order Review",
          child: <OrderReview />,
        },
      ];
      steps = steps.map((item, index) => ({
        ...item,
        isAllow: !index,
        isActive: !index,
      }));
      updateField({ checkout: { ...checkout, steps } });
    }, []);
  };

  return [updateSteps, useInit];
};
