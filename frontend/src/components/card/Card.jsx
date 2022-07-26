import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MainWrapper } from "./card.styles";

export const Card = () => {
  const { userData } = useSelector((state) => state.user_store);

  return (
    <MainWrapper>
      <Link to="/store/checkout/cart">
        <div class="counter">
          {userData
            ? userData.cart.reduce(
                (preValue, { qty }) => preValue + qty,
                0
              )
            : 0}
        </div>
        <svg viewBox="0 0 100 100">
          <g fill="#FFF">
            <path d="M40.4 78.7c0 4-3.2 7.2-7.2 7.2S26 82.7 26 78.7s3.2-7.2 7.2-7.2 7.2 3.2 7.2 7.2zM88.3 78.7c0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2 3.2-7.2 7.2-7.2c3.9 0 7.2 3.2 7.2 7.2zM88.3 47.6V18.9H30.9c0-2.6-2.1-4.8-4.8-4.8H11.7v4.8h9.6l3.6 30.8c-2.2 1.8-3.6 4.4-3.6 7.5 0 5.3 4.3 9.6 9.6 9.6h57.4V62H30.9c-2.6 0-4.8-2.1-4.8-4.8l62.2-9.6z" />
          </g>
        </svg>
        <label>Cart</label>
      </Link>
    </MainWrapper>
  );
};
