import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 0 0 1em;
  background-color: #fff;
  border: 0;
  .section-inner-wrap {
    padding: 15px;
  }

  .group {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }

  .group:nth-child(1) {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }

  .group-header {
    margin-bottom: 5px;
  }

  .group-header:before {
    content: "";
    display: table;
  }

  .group-header:after {
    clear: both;
    content: "";
    display: table;
  }

  .cost {
    float: right;
    color: #059;
    font-family: nimbusnovus-bold, sans-serif;
    font-size: 25px;
    line-height: 1em;
  }
  .cost .before-discount {
    float: right;
    color: #d41313;
    font-size: 0.65em;
    line-height: 0;
    margin-bottom: 0.4em;
    text-decoration: line-through;
    clear: both;
    height: 0;
  }

  .cost .calc {
    display: block;
    clear: both;
  }

  .points-per-unit {
    display: none;
  }

  .title {
    color: #202020;
    font-family: nimbusnovus-bold, sans-serif;
    font-size: 18px;
    padding: 0 0 0.3em;
    max-width: 50%;
  }

  .serving-info {
    clear: left;
    font-family: nimbusnovus-regular, sans-serif;
    font-size: 13px;
  }
  .deal {
    padding: 5px 0;
    font-family: nimbusnovus-medium, sans-serif;
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

  span.mns-label {
    display: inline-block;
  }

  .mns-label.lbl-deal {
    background-color: #079c3a;
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

  .row {
    max-width: 1060px;
    margin: 0 auto;
  }

  .row {
    clear: both;
    width: 100%;
    float: left;
    display: block;
    min-height: 1px;
  }

  .row {
    float: none;
    display: flex;
  }

  .option-field {
    flex: 1 0 60%;
    margin-right: 8px;
  }

  .qty-field {
    width: 110px;
  }

  .input-group {
    height: 42px;
    display: flex;
    border: 1px solid #ddd;
    border-radius: 2px;
    margin-bottom: 0;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .is-hidden {
    display: none;
  }

  .qty-field .input-group .add,
  .qty-field .input-group .minus {
    background-color: #eee;
    padding: 0;
    margin: 0;
    color: #059;
    font-size: 20px;
    line-height: 40px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    flex: 0 0 34%;
    box-shadow: 1px 0 0 #ddd;
  }

  .qty-field .input-group .minus {
    font-size: 16px;
  }

  .qty-field .input-group input.number {
    color: #059;
    flex: 0 0 32%;
    padding: 0;
    margin: 0;
    border: 0;
    height: 40px;
    border-radius: 0;
    text-align: center;
    text-indent: 0;
    line-height: 40px;
    background: 0 0;
    min-width: 0;
  }
  .qty-field .input-group .add {
    box-shadow: -1px 0 0 #ddd;
  }
  .space-break {
    line-height: 0;
  }
  .add-to-cart-wrap {
    padding: 15px;
  }

  .add-to-cart {
    overflow: hidden;
  }

  .add-to-cart button {
    width: 100%;
  }
  .secure-transaction-notice {
    margin-bottom: 15px;
    text-align: center;
  }

  .secure-transaction-notice svg {
    width: 15px;
    height: 15px;
    margin-right: 7px;
  }
  .secure-transaction-notice span,
  span.points-label {
    background-color: transparent;
    color: #059;
    text-decoration: none;
    cursor: pointer;
  }

  .reward-points-section {
    padding: 0 1em 1em;
  }

  .reward-points-section .reward-points-wrap {
    border: 1px solid #eee;
    font-size: 13px;
    line-height: 1.4em;
    padding: 0.62em 0.5em;
    border-radius: 2px;
  }
  .reward-points-section .reward-points-wrap .points-earned {
    float: right;
  }
  @media (min-width: 600px) {
    .title {
      max-width: 51%;
    }
  }

  @media (min-width: 840px) {
    .qty-field {
      width: 100px;
    }

    .qty-field .input-group .minus {
      font-size: 11px;
    }
    .qty-field .input-group .add {
      font-size: 18px;
    }
    .qty-field .input-group .add,
    .qty-field .input-group .minus {
      flex: 0 0 33.333333%;
    }

    .qty-field .input-group input.number {
      flex: 1 0 33.333333%;
      max-width: 33.333333px;
    }
  }
  @media (min-width: 1280px) {
    .title {
      max-width: 56%;
    }

    .serving-info {
      font-size: 13px;
    }
  }
`;
