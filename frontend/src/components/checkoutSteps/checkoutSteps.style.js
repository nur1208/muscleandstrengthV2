import styled from "styled-components";

export const MainWrapper = styled.ol`
  list-style: none;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 0;

  .section {
    margin-bottom: 10px;
  }

  .section {
    width: 100%;
    opacity: 0.7;
  }

  .section.allow {
    opacity: 1;
  }

  .section.allow:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  .section.active.allow {
    opacity: 1;
  }
  .step-title {
    background-color: #d5d5d5;
    padding: 14px 0 14px 18px;
    position: relative;
  }

  .section.allow .step-title {
    background-color: #d5d5d5;
  }

  .section.active.allow .step-title {
    background-color: #059;
  }

  .step-title .title {
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    position: relative;
    display: inline-block;
  }

  .section.active.allow .step-title .title {
    color: #fff;
  }

  .step-title .checkmark {
    display: none;
    position: absolute;
    right: -26px;
    top: -2px;
  }

  .section.allow .checkmark {
    display: inline;
  }

  .checkmark svg {
    width: 20px;
    height: 20px;
  }

  .editLink svg {
    width: 13px;
    height: 13px;
  }
  .section.active.allow .checkmark {
    display: none;
  }

  .step-title .editLink {
    position: absolute;
    right: 18px;
    top: 17px;
    line-height: 1em;
    color: #059;
    display: none;
  }

  .section.allow .editLink {
    display: block;
  }

  .section.allow:hover .editLink {
    display: block;
  }

  .step {
    padding: 15px;
    background: #fff;
  }

  .customerLogin {
    display: flex;
    flex-wrap: wrap;
  }

  .customerLogin .loggedInCustomer {
    flex-basis: 100%;
    padding: 0;
  }
  .text-center {
    text-align: center;
  }

  .paypal-button,
  button {
    margin: 10px 0 0;
  }

  .customerLogin .express-checkout-options {
    flex-basis: 100%;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  h4 {
    font-size: 18px;

    font-weight: 500;
    padding: 0;
  }

  .customerLogin .express-checkout-options h4 {
    font-size: 18px;
  }

  .customerLogin .express-checkout-options .available-checkouts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .customerLogin .express-checkout-options .checkout-button {
    width: 250px;
    margin: 0;
  }

  .gpay-button-fill {
    width: 100%;
    height: inherit;
  }

  .gpay-button {
    background-origin: content-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 0px;
    border-radius: 4px;
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 1px 0px,
      rgb(60 64 67 / 15%) 0px 1px 3px 1px;
    cursor: pointer;
    height: 40px;
    min-height: 40px;
    padding: 12px 24px 10px;
    width: 240px;
  }

  .gpay-button.short {
    height: 35px !important;
    min-height: 35px !important;
  }

  .gpay-button.black {
    padding: 10px 24px 8px !important;
  }

  .gpay-button.black {
    background-color: #000;
    box-shadow: none;
  }

  .gpay-button.short,
  .gpay-button.plain {
    min-width: 90px;
    width: 160px;
  }

  .gpay-button.black.short,
  .gpay-button.black.plain {
    background-image: url(https://www.gstatic.com/instantbuy/svg/dark_gpay.svg);
  }

  .gpay-button-fill > .gpay-button.black {
    width: 100%;
    height: inherit;
  }

  .gpay-button-fill > .gpay-button.black {
    padding: 12px 15% 10px;
  }

  form:after,
  form:before {
    content: "";
    display: table;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  form fieldset {
    margin: 0;
    border: 0;
  }
  fieldset {
    padding: 0;
  }

  ul {
    margin-top: 0;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
    font-size: 18px;
    font-family: nimbusnovus-medium, sans-serif;
    padding: 0.5em 0 30px;
    overflow: hidden;
    clear: both;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
    max-width: 100%;
    margin-bottom: 0.3125rem;
  }

  #billing-new-address-form legend,
  #shipping-new-address-form legend {
    padding-top: 0;
  }

  .fl-form .fl-wrap {
    position: relative;
  }

  fl-form .fl-is-required:before {
    opacity: 1;
    content: "*";
    display: block;
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 16px;
    line-height: 1.75;
    color: #d41313;
    transition: 0.2s ease-in-out;
    padding: 6px 0 0;
    z-index: 1;
  }

  .fl-form .fl-is-required.fl-is-active:before {
    opacity: 0;
  }

  form .required {
    color: #d41313;
  }

  form label,
  form p {
    font-size: 16px;
    float: none;
    line-height: 1.1;
  }

  .fl-form label.fl-label {
    opacity: 0;
    visibility: hidden;
    display: block;
    position: absolute;
    top: -12px;
    left: 0;
    font-size: 12px;
    line-height: 1;
    color: #aaa;
    border-radius: 0 0 0 2px;
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  form label.required,
  form p.required {
    color: #303030;
  }

  .fl-form .fl-is-active label.fl-label {
    opacity: 1;
    visibility: visible;
  }

  .fl-form.fl-style-1 label.fl-label {
    top: 1px;
    left: 10px;
    background-color: transparent;
    padding: 12px 3px;
  }

  .fl-form.fl-style-1 .fl-is-active label.fl-label {
    top: -9px;
    padding: 3px;
  }
  .fl-form input.fl-input,
  .fl-form select.fl-select,
  .fl-form textarea.fl-textarea {
    width: 100%;
    outline: 0;
    font-size: 16px;
    background-color: #fff;
    transition: 0.2s ease-in-out;
    margin-bottom: 10px;
  }

  .fl-form .fl-is-active input.fl-input,
  .fl-form .fl-is-active select.fl-select,
  .fl-form .fl-is-active textarea.fl-textarea {
    background-color: #fff;
    color: #000;
  }

  form ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  select {
    box-sizing: border-box;
    width: 100%;
    height: 2.5625rem;
    margin: 0 0 0.625rem;
    padding: 0 0.9375rem 0 0.625rem;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.625;
    color: #303030;
    background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMzIgMjQiPjxwb2x5Z29uIHBvaW50cz0iMCwwIDMyLDAgMTYsMjQiIHN0eWxlPSJmaWxsOiByZ2IoMjIxLCAyMjEsIDIyMSkiPjwvcG9seWdvbj48L3N2Zz4=);
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    background-position: right center;
  }

  select:not([multiple]) {
    padding-top: 0;
    padding-bottom: 0;
  }

  form select {
    margin: 0 0 15px;
  }

  .fl-form select.fl-select,
  .fl-form textarea.fl-textarea {
    width: 100%;
    outline: 0;
    font-size: 16px;
    background-color: #fff;
    transition: 0.2s ease-in-out;
    margin-bottom: 10px;
  }

  .fl-form select.fl-select {
    color: #aaa;
    position: relative;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .fl-form .fl-is-active select.fl-select {
    background-color: #fff;
    color: #000;
  }

  form p {
    margin-bottom: 10px;
  }

  form p {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
    color: #202020;
  }

  form p {
    font-size: 16px;
    float: none;
    line-height: 1.1;
  }
  form .required-label {
    color: #d41313;
  }
  p {
    margin-top: 0;
  }

  input[type="radio"] {
    float: left;
    width: 20px;
    margin: 0 5px 0 0;
    padding: 0;
    border-radius: 0;
  }

  input[type="radio"] {
    -webkit-appearance: radio;
  }

  .shipto-choice input,
  .shipto-choice label {
    line-height: 2;
  }
  .shipto-choice input {
    margin-top: 7px;
  }

  form label {
    font-size: 16px;
    float: none;
    line-height: 1.1;
  }

  [type="radio"] + label[for] {
    cursor: pointer;
  }

  .shipto-choice label {
    line-height: 2;
  }

  .shipto-choice label {
    float: none;
    display: block;
  }

  .buttons-set {
    width: 100%;
    text-align: center;
  }
  [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="checkbox"],
  [type="file"] {
    margin: 0 0 0.625rem;
  }

  input[type="checkbox"] {
    float: left;
    width: 20px;
    margin: 0 5px 0 0;
    padding: 0;
    border-radius: 0;
  }
  [type="checkbox"] + label {
    display: inline-block;
    vertical-align: baseline;
    margin-left: 0.3125rem;
    margin-right: 0.625rem;
    margin-bottom: 0;
  }

  #co-shipping-method-form {
    overflow: visible;
  }

  #co-shipping-method-form .shipping-methods {
    float: left;
    width: 100%;
  }

  #co-shipping-method-form dd {
    margin: 0;
  }

  #co-shipping-method-form .shipping-methods ul {
    padding: 4px 0;
  }

  #co-shipping-method-form .shipping-methods li {
    clear: both;
    display: block;
  }

  #co-shipping-method-form .shipping-methods li input {
    display: none;
  }

  #co-shipping-method-form .shipping-methods li .method-wrap {
    display: block;
    clear: both;
    padding: 1em 1em 1em 3.2em;
    border: 1px solid #fff;
    border-bottom-color: #ddd;
    float: none;
    cursor: pointer;
    margin-bottom: 0;
    position: relative;
    margin-top: -2px;
  }

  form label:after,
  form label:before {
    content: "";
    display: table;
  }

  form label:after {
    clear: both;
  }

  #co-shipping-method-form
    .shipping-methods
    li
    .method-wrap
    .method-radio-element {
    border-radius: 100px;
    width: 1.3em;
    height: 1.3em;
    border: 1px solid #b7b7b7;
    position: absolute;
    left: 1em;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }

  .method-name {
    font-weight: 500;
    position: relative;
    display: block;
  }

  #co-shipping-method-form
    .shipping-methods
    li
    .method-wrap
    .details {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
    padding-top: 0.5em;
    float: left;
  }

  #checkout-payment-method-load dt {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  #checkout-payment-method-load dt input,
  #checkout-payment-method-load dt label {
    float: none;
    margin: 0;
    line-height: 25px;
  }

  #checkout-payment-method-load dt input {
    height: 25px;
    margin-right: 8px;
    margin-top: -2px;
  }

  #offline-msg,
  #redirect-msg,
  .applepay-info p,
  .googlepay-info p,
  .paypal-info p,
  #co-payment-form .paypal-info p {
    background: #f5f5f5;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 2px;
  }
  #checkout-payment-method-load dt {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .cart-wrap {
    border: none !important;
  }

  .orderTotals {
    font-size: 16px;
    display: table;
    width: 100%;
    background-color: #eee;
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

  #paypal-complete {
    max-width: 480px;
    margin: 0 auto;
  }

  .forgot-item {
    margin-top: 15px;
    text-align: center;
    font-size: 15px;
  }
  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;

    .customerLogin .express-checkout-options .checkout-button {
      width: 200px;
      margin: 0 10px;
    }
  }
  @media (min-width: 840px) {
    .section {
      margin-bottom: 15px;
    }

    .step {
      border: 0;
    }

    .customerLogin .express-checkout-options h4 {
      font-size: 16px;
    }
    form p {
      margin-bottom: 15px;
    }

    .buttons-set {
      text-align: right;
    }

    .orderTotals {
      padding: 15px;
    }
  }

  @media (min-width: 1024px) {
    .section.allow .editLink {
      display: none;
    }
  }
`;

export const Paypal = styled.div`
  #zoid-paypal-button-5b531ca0bd {
    font-size: 0;
    width: 100%;
    overflow: hidden;
    min-width: 200px;
  }

  #zoid-paypal-button-5b531ca0bd.paypal-button-size-responsive {
    text-align: center;
  }

  #zoid-paypal-button-5b531ca0bd > .zoid-outlet {
    display: inline-block;
    min-width: 200px;
    max-width: 750px;
    position: relative;
  }

  #zoid-paypal-button-5b531ca0bd.paypal-button-layout-vertical
    > .zoid-outlet {
    min-width: 200px;
  }

  #zoid-paypal-button-5b531ca0bd > .zoid-outlet {
    width: 150px;
    height: 25px;
  }

  #zoid-paypal-button-5b531ca0bd.paypal-button-size-responsive
    > .zoid-outlet {
    width: 100%;
  }

  #zoid-paypal-button-5b531ca0bd > .zoid-outlet > iframe {
    min-width: 100%;
    max-width: 100%;
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  #zoid-paypal-button-5b531ca0bd
    > .zoid-outlet
    > iframe.zoid-component-frame {
    z-index: 100;
  }

  #zoid-paypal-button-5b531ca0bd
    > .zoid-outlet
    > iframe.zoid-prerender-frame {
    transition: opacity 0.2s linear;
    z-index: 200;
  }

  #zoid-paypal-button-5b531ca0bd
    > .zoid-outlet
    > iframe.zoid-visible {
    opacity: 1;
  }

  #zoid-paypal-button-5b531ca0bd
    > .zoid-outlet
    > iframe.zoid-invisible {
    opacity: 0;
    pointer-events: none;
  }
`;
