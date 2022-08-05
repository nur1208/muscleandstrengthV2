import React from "react";
import { Button } from "../button/Button";

export const RightLoginInfo = () => {
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
          text="Create an Account"
          isGreen
          isExpanded
          hasLoader
        />
      </div>
    </>
  );
};
