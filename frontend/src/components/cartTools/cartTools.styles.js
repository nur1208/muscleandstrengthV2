import styled from "styled-components";

export const MainWrapper = styled.div`
  &,
  .cartTools {
    margin-bottom: 10px;
  }

  .cartTools {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  }

  ul {
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
    list-style: none;
  }
  ul.accordion {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  ol,
  ul {
    margin-top: 0;
  }

  ul.accordion li {
    display: block;
  }
  ul.accordion li:nth-child(1) {
    margin-left: 0;
  }

  .accordion-title.blue-header {
    font-family: nimbusnovus-medium, sans-serif;
    font-weight: 500;
    font-size: 16px;
    background: #059;
    color: #fff;
    display: block;
    padding: 0 15px;
    line-height: 36px;
    cursor: pointer;
    position: relative;
  }

  .cartTools .accordion-content {
    border: 1px solid #ddd;
  }
  /* ul.accordion .accordion-content {
    border: none;
  } */
  .accordion-item.is-active .accordion-content {
    display: block;
  }

  ul.accordion .is-active .accordion-content {
    max-height: 8000px;
    overflow-y: visible;
    transition: max-height 0.9s ease-in-out;
  }

  ul.accordion
    .accordion-item:not(.is-active)
    .accordion-content {
    max-height: 0;
    border-color: transparent;
    overflow-y: hidden;
  }

  .cartTools .accordion-content-inner,
  .cartTools .body {
    padding: 0.7em;
  }

  ul.accordion .caret-right {
    transition: 0.1s ease-in-out;
  }
  .accordion-title-closed.blue-header .caret-right,
  .accordion-title.blue-header .caret-right {
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    margin-left: 8px;
    position: absolute;
    right: 10px;
    top: 31%;
  }
  ul.accordion .is-active .caret-right {
    transform: rotate(90deg);
  }

  .accordion-title.blue-header .caret-right:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 8px solid transparent;
  }

  .accordion-title.blue-header .caret-right:before {
    border-left-color: #fff;
  }

  .accordion-title.blue-header .caret-right:after {
    content: "";
    position: absolute;
    border: 6px solid transparent;
  }

  .accordion-title.blue-header .caret-right:after {
    left: 0;
    top: 2px;
    border-left-color: #059;
  }

  .rewards-box-spend-minicart {
    border-bottom: 1px solid #ddd;
    padding-bottom: 1em;
  }

  .rewards-box-spend-minicart h2 {
    text-align: left;
    font-size: 13px;
    font-weight: 600;
    color: #888;
    float: left;
    margin-bottom: 0.3em;
    margin-right: 8px;
    padding-bottom: 5px;
    text-rendering: unset;
  }

  .slider {
    margin-bottom: 6px;
  }

  .slider-wrap {
    clear: both;
    overflow: hidden;
    margin: 0.5em 0;
    padding: 0.2em 0.4em 0;
    border-radius: 2px;
    border: 1px solid #ddd;
  }

  .btn-slider-increase-points-container,
  .btn-slider-reduce-points-container {
    width: 10%;
    float: left;
    text-align: center;
    line-height: 1em;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .sliderRail {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/rewards/slider/slider_rail.gif)
      repeat-x;
    height: 17px;
    position: relative;
    width: 75%;
  }

  .cartSlider .sliderRail {
    width: 75%;
    float: left;
    margin: 2.5%;
  }

  .sliderHandle {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/rewards/slider/slider_handle.gif)
      no-repeat;
    height: 17px;
    width: 11px;
    position: absolute;
    cursor: pointer;
    border: none;
  }

  .cartSlider_cell {
    width: 3%;
    height: 38px;
  }

  .cartSlider_caption {
    position: relative;
    text-align: center;
    top: -4px;
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

  input {
    overflow: visible;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="checkbox"],
  input[type="radio"] {
    float: left;
    width: 20px;
    margin: 0 5px 0 0;
    padding: 0;
    border-radius: 0;
  }

  .text-center {
    text-align: center;
  }
  .font-s-small {
    font-size: 13px;
  }

  .rewards-box-spend-minicart + #discount-coupon-form {
    padding-top: 1em !important;
  }

  .padBot5 {
    padding-bottom: 5px;
  }
  .form label,
  form label {
    text-align: left;
    font-size: 13px;
    float: left;
    margin-bottom: 10px;
    line-height: 1.1;
  }

  .margTop15 {
    margin-top: 15px;
  }
  .margBot10 {
    margin-bottom: 10px;
  }

  #shipping-zip-form {
    position: relative;
    z-index: 2;
  }

  #shipping-zip-form .inner-wrap {
    padding: 1em 0.8em 0.8em;
    border: 1px solid #ddd;
    position: relative;
    margin-top: 0.5em;
    border-radius: 2px;
  }

  #shipping-zip-form .title {
    padding: 0.2em 0.7em;
    display: inline-block;
    position: absolute;
    top: -1em;
    left: 50%;
    transform: translate(-50%);
    background: #fff;
    font-size: 13px;
  }

  #shipping-zip-form .zipcode {
    padding: 1em 0 0;
    border-top: 1px solid #ddd;
    margin-top: 1em;
    overflow: hidden;
  }

  .input-sm {
    padding: 0 16px;
    line-height: 37px;
    height: 39px;
    vertical-align: bottom;
  }

  #shipping-zip-form .zipcode #postcode {
    width: 47%;
    float: left;
    margin: 0;
  }

  #shipping-zip-form .zipcode button {
    width: 47%;
    float: right;
    box-sizing: border-box;
    margin: 0;
  }

  .is-hidden {
    display: none;
  }

  .orderTotals {
    font-size: 16px;
    display: table;
    width: 100%;
  }
  .table-row {
    display: table-row;
  }

  .orderTotals .table-row {
    line-height: 26px;
  }

  .price-label {
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 160px;
  }

  .orderTotals .table-row > div {
    display: table-cell;
  }

  .price-wrap {
    text-align: right;
  }

  .orderTotals .table-row.grand {
    margin-bottom: 6px;
  }

  .checkoutBtnWrapper {
    padding-top: 0.7em;
    overflow: hidden;
    clear: both;
    border-top: 1px solid #ddd;
    margin-top: 0.5em;
    float: right;
    width: 100%;
    margin-bottom: 15px;
  }

  .payment-methods {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10px;
  }

  .payment-methods .payment-logo {
    padding: 3px;
  }

  .payment-methods svg {
    width: 60px;
    height: 35px;
    padding: 2px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .accordion-content:before,
  .accordion-content:after {
    content: "";
    display: table;
  }

  .accordion-content:after {
    clear: both;
  }

  @media (min-width: 600px) {
    .input-sm {
      height: 35px;
      line-height: 33px;
      padding: 0 15px;
    }
  }
  @media (min-width: 840px) {
    &,
    .cartTools {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1024px) {
    .cartTools {
      box-sizing: border-box;
      width: 33.3333333333%;
      float: left;
      padding-left: 0;
      padding-right: 0;
    }
    .cartTools .accordion-item {
      margin: 0 0.5em;
    }

    .payment-methods svg {
      width: 50px;
      height: 30px;
    }
  }
`;
