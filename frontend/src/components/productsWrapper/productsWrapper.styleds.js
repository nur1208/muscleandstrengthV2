import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 0;

  .css-loader-container .css-loader-block {
    width: 32px;
    height: 32px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .css-loader-container:not(.animating) .css-loader-block {
    display: none;
  }

  .css-loader-block {
    z-index: 10;
  }
  @keyframes load8 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .css-loader-block .ajax-loading {
    box-sizing: content-box;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border: 4px solid rgba(0, 142, 255, 0.3);
    border-left-color: #059;
    transform: translateZ(0);
    animation: 1.1s linear infinite load8;
  }

  .css-loader-block .ajax-loading:before {
    content: "";
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  /* .grid-margin-x {
    margin-left: -0.3125rem;
    margin-right: -0.3125rem;
  } */

  ul {
    list-style: none;
    padding: 0;
  }

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }

  .grid-product {
    margin-bottom: 10px;
    background-color: #fff;
  }

  .grid-x > .small-12 {
    flex-basis: auto;
    flex: 0 0 auto;
    width: 100%;
  }
  .grid-margin-x > .cell {
    width: calc(100% - 0.625rem);
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }

  .grid-margin-x > .small-12 {
    width: calc(100% - 0.625rem);
  }

  .grid-products-wrapper .inner-wrap {
    height: 100%;
    border: 12px solid #fff;
    position: relative;
  }

  .dynamic-height {
    padding-bottom: 194px !important;
  }

  .product-name {
    text-align: initial;
  }

  .rating-stars {
    margin: 0 0 4px;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .review-count {
    font-size: 13px;
  }

  .button-wrap {
    justify-content: flex-start;
  }

  .clearBoth {
    clear: both;
  }

  .clearfix {
    display: block;
  }

  .clearfix:after {
    content: " ";
    font-size: 0;
    content: " ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .view-more-wrap button {
    margin: 0 auto;
    display: block;
  }
  @media print, screen and (min-width: 37.5em) {
    .grid-x > .bp600-6 {
      width: 50%;
    }

    .grid-margin-x > .bp600-6 {
      width: calc(50% - 0.625rem);
    }
  }

  @media print, screen and (min-width: 52.5em) {
    /* .grid-margin-x {
      margin-left: -0.46875rem;
      margin-right: -0.46875rem;
    } */

    .grid-margin-x > .cell {
      width: calc(100% - 0.9375rem);
      margin-left: 0.46875rem;
      margin-right: 0.46875rem;
    }

    .grid-margin-x > .small-12 {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .bp600-6 {
      width: calc(50% - 0.9375rem);
    }
  }

  @media print, screen and (min-width: 60em) {
    .grid-x > .bp960-4 {
      width: 33.3333333333%;
    }

    .grid-margin-x > .bp960-4 {
      width: calc(33.3333333333% - 0.9375rem);
    }
  }

  @media print, screen and (min-width: 64em) {
    .grid-x > .large-3 {
      width: 25%;
    }

    .grid-margin-x > .large-3 {
      width: calc(25% - 0.9375rem);
    }
  }
  @media (min-width: 840px) {
    .grid-product {
      margin-bottom: 15px;
    }

    .grid-products-wrapper .inner-wrap {
      border-width: 15px;
    }
  } ;
`;
