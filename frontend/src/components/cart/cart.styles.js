import styled from "styled-components";

export const MainWrapper = styled.div`
  .cart-wrap {
    margin-bottom: 10px;
  }

  #main-wrap .cart-wrap {
    padding: 1em 0;
  }

  .css-grid,
  .grid-row {
    display: grid;
  }

  .currency-grid .grid-row-labels {
    display: none;
  }

  .currency-grid .grid-row,
  .currency-grid .grid-row-labels {
    grid-template-columns: 25% auto 54px;
    -ms-grid-columns: 25% 1fr 54px;
  }

  .currency-grid .grid-row-labels .box-image {
    grid-area: imageL;
  }

  .currency-grid .grid-row-labels .box-info {
    grid-area: infoL;
  }

  .currency-grid .grid-row-labels .box-price {
    grid-area: priceL;
  }

  .currency-grid .grid-row-labels .box-quantity {
    grid-area: quantityL;
  }

  .currency-grid .grid-row-labels .box-subtotal {
    grid-area: subtotalL;
  }

  .currency-grid div.grid-row {
    grid-gap: 3px 8px;
    grid-template-rows: auto auto 50px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.7em;
    margin-bottom: 1em;
  }

  .currency-grid div.grid-row .box-image {
    grid-area: imageC;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .currency-grid div.grid-row .box-info {
    grid-area: infoC;
  }

  .cart-wrap .cart-item .product-name {
    color: #059;
    display: block;
  }

  .currency-grid div.grid-row .box-messages {
    grid-area: messagesC;
  }

  .currency-grid div.grid-row .box-price {
    display: none;
    grid-area: priceC;
  }

  .currency-grid div.grid-row .box-quantity {
    grid-area: quantityC;
  }

  .cart-wrap .cart-item .qty-wrap {
    margin: 10px 0 0;
  }
  .is-hidden {
    display: none;
  }

  input {
    width: 100%;
    padding: 12px 8px 11px 10px;
    line-height: 1.1;
    margin-bottom: 10px;
    border-radius: 2px;
    background: #fff;
    display: block;
    border: 1px solid #ddd;
    font-size: 16px;
    box-sizing: border-box;
    color: #303030;
  }

  .text-center {
    text-align: center;
  }

  .input-dynxs {
    padding: 0 16px;
    line-height: 35px;
    margin-bottom: 0;
    vertical-align: bottom;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"],
  input[type="text"] {
    -webkit-appearance: none;
  }

  .cart-wrap .cart-item .qty-wrap input {
    padding: 0;
    width: 37px;
    display: inline-block;
  }

  .currency-grid div.grid-row .box-subtotal {
    grid-area: subtotalC;
  }

  .cart-wrap .cart-item .price-wrap {
    text-align: right;
  }

  .cart-wrap .cart-item .price-wrap .item-subtotal {
    font-size: 18px;
    font-weight: 700;
    color: #059;
  }

  .mns-label {
    padding: 0 8px;
    background-color: #888;
    border-radius: 2px;
    font-size: 11px;
    font-family: nimbusnovus, sans-serif;
    font-weight: 500;
    line-height: 24px;
    color: #fff;
    text-shadow: 1px 1px 0 #077f32;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mns-label.lbl-deal {
    background-color: #079c3a;
  }
  span.mns-label {
    display: inline-block;
  }
  .cart-wrap .cart-item .box-messages .lbl-deal,
  .cart-wrap .cart-item .item-options dt {
    margin-bottom: 5px;
  }
  .mns-label.lbl-deal:before {
    content: "";
    width: 12px;
    height: 12px;
    margin-right: 6px;
    margin-bottom: -2px;
    display: inline-block;
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/deal-white.svg)
      0 0 / auto 100%;
  }

  .cart-wrap .cart-item .item-options {
    font-size: 13px;
    font-weight: 500;
    margin: 0;
  }

  .bordered {
    border-bottom: 4px solid #eee;
    padding-bottom: 2px;
  }
  .blue,
  .mnsBlue {
    color: #059;
  }

  h5 {
    line-height: 1.3em;
  }

  h5 {
    font-size: 18px;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  .grey-stripe {
    display: none;
  }

  .product-info .price-box {
    text-align: center;
  }

  font-size: 16px;
  .delete {
    float: right;
  }
  @media (max-width: 839px) {
    .currency-grid div.grid-row {
      grid-template-areas:
        "imageC infoC subtotalC"
        "imageC messagesC messagesC"
        "imageC quantityC quantityC";
    }

    .qty-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media (min-width: 600px) {
    .input-dynxs {
      padding: 0 10px;
      line-height: 30px;
    }
  }

  @media (min-width: 840px) {
    .cart-wrap {
      margin-bottom: 15px;
    }

    .cart-wrap {
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 15px;
    }

    .currency-grid .grid-row-labels {
      display: grid;
      background-color: #eee;
      padding: 0.7em;
      font-size: 11px;
      line-height: 11px;
      margin-bottom: 2em;
      text-transform: uppercase;
      grid-template-areas: "imageL infoL priceL quantityL subtotalL";
    }

    .currency-grid .grid-row-labels {
      grid-gap: 0 15px;
    }

    .currency-grid .grid-row,
    .currency-grid .grid-row-labels {
      grid-template-columns: 12% auto 60px 130px 60px;
      -ms-grid-columns: 12% 1fr 60px 130px 60px;
    }

    .currency-grid .grid-row-labels .image,
    .currency-grid .grid-row-labels .qty {
      text-align: center;
    }

    .currency-grid .grid-row-labels .box-image {
      -ms-grid-row: 1;
      -ms-grid-column: 1;
    }

    .currency-grid .grid-row-labels .box-info {
      -ms-grid-row: 1;
      -ms-grid-column: 2;
    }

    .currency-grid .grid-row-labels .unit-price {
      text-align: right;
    }

    .currency-grid .grid-row-labels .box-price {
      -ms-grid-row: 1;
      -ms-grid-column: 3;
    }

    .currency-grid .grid-row-labels .box-quantity {
      -ms-grid-row: 1;
      -ms-grid-column: 4;
    }

    .currency-grid .grid-row-labels .box-subtotal {
      -ms-grid-row: 1;
      -ms-grid-column: 5;
    }

    .currency-grid .grid-row,
    .currency-grid .grid-row-labels {
      grid-gap: 0 15px;
    }

    .currency-grid div.grid-row {
      padding: 0 12px 10px;
      grid-template-rows: 1fr 1fr;
      grid-gap: 3px 12px;
      grid-template-areas:
        "imageC infoC priceC quantityC subtotalC"
        "imageC messagesC priceC quantityC subtotalC" !important;
    }

    .currency-grid div.grid-row .box-image {
      grid-area: imageC;
      -ms-grid-column: 1;
    }

    .currency-grid div.grid-row .box-image {
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
      -ms-grid-column: 1;
    }

    .item-image img {
      width: 90%;
      max-width: 115px;
    }

    .currency-grid div.grid-row .box-info,
    .currency-grid div.grid-row .box-messages {
      -ms-grid-column: 2 !important;
    }

    .currency-grid div.grid-row .box-info {
      -ms-grid-row: 1;
      -ms-grid-column: 3;
    }

    .item-info .price {
      display: none;
    }

    .currency-grid div.grid-row .box-messages {
      -ms-grid-column: 2 !important;
    }
    .currency-grid div.grid-row .box-messages {
      -ms-grid-row: 3;
      -ms-grid-column: 3;
    }

    .currency-grid div.grid-row .box-price {
      display: block;
      -ms-grid-column: 3 !important;
    }

    .currency-grid div.grid-row .box-price {
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
      -ms-grid-column: 5;
    }

    .currency-grid div.grid-row .box-quantity {
      grid-area: quantityC;
      -ms-grid-column: 4 !important;
    }

    .currency-grid div.grid-row .box-quantity {
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
      -ms-grid-column: 7;
    }

    .cart-wrap .cart-item .qty-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0;
    }
    .cart-wrap .cart-item .qty-wrap input {
      padding: 0;
      width: 32px;
      height: 32px;
      margin-top: -16px;
      margin-bottom: 10px;
    }
    .update-text {
      margin-bottom: 10px;
    }

    .currency-grid div.grid-row .box-subtotal {
      grid-area: subtotalC;
      -ms-grid-column: 5 !important;
    }

    .currency-grid div.grid-row .box-subtotal {
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
      -ms-grid-column: 9;
    }
  }
`;
