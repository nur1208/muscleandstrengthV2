import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";

export const RightLoginInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <p class="font-s-regular">
        Create a <b>FREE</b> account and join over 500k Members
        who get:
      </p>
      <ul class="font-s-regular">
        <li>
          <a href="/store/rewards">M&amp;S Rewards</a> program
        </li>
        <li>Early access to deals</li>
        <li>Member-only discounts</li>
        <li>Exclusive products</li>
        <li>Super-fast checkout</li>
      </ul>
      <div>
        <Button
          onClick={() =>
            navigate("/store/customer/account/create")
          }
          text="Create an Account"
          isGreen
          isExpanded
          hasLoader
        />
      </div>
    </>
  );
};
