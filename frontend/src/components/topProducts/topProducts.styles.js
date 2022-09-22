import styled from "styled-components";

export const MainWrapper = styled.div`
  &:after {
    content: " ";
    font-size: 0;
    content: " ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  ol {
    margin-top: 0;
  }

  .reviewProductList {
    list-style: none;
    padding: 0;
  }

  .reviewProductList li {
    clear: both;
    overflow: hidden;
    position: relative;
    border-bottom: 0.2em solid #eee;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }

  .reviewProductList .prodRank {
    float: left;
    font-size: 1.3em;
    clear: both;
    line-height: 1.3em;
    color: #fff;
    background-color: #059;
    width: 2em;
    padding: 0.3em 0;
    text-align: center;
    border: 3px solid #fff;
    border-radius: 100px;
  }
  .reviewProductList .prodRank .rank {
    position: relative;
    display: block;
  }
  .reviewProductList .prodImg {
    box-sizing: border-box;
    width: 25%;
    float: left;
    text-align: center;
    padding: 0 2.0833333333% 1em;
  }

  .reviewProductList .prodImg a {
    display: block;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  img {
    border-style: none;
  }

  .reviewProductList .product-title {
    box-sizing: border-box;
    width: 55.8333333333%;
    float: right;
    font-size: 1em !important;
    padding: 0 !important;
  }

  .reviewProductList .product-title a {
    display: block;
    color: #000;
    padding: 0.2em 0.5em;
  }

  .reviewProductList .brand {
    display: none;
  }

  .reviewProductList .brand .brand-img {
    text-align: center;
    display: block;
    vertical-align: middle;
    line-height: 2.3em;
  }

  .reviewProductList .brand .brand-img img {
    vertical-align: middle;
    /* max-height: 2.8em; */
    /* max-width: 2.8em; */
    margin-bottom: 0.5em;
  }

  .reviewProductList .brand .deal-count,
  .reviewProductList .brand .prod-count {
    clear: none;
    margin: 0.1em 0;
    overflow: hidden;
    float: right;
    width: 45%;
    display: none;
  }

  .reviewProductList .brand .count-box {
    color: #fff;
    float: left;
    width: 1.8em;
    text-align: center;
    margin-right: 5%;
    font-size: 13px;
    line-height: 1.7em;
    border-radius: 2px;
  }

  .reviewProductList .brand .deal-count .count-box {
    background-color: #079c3a;
  }

  .reviewProductList .brand .deal-count .label-title,
  .reviewProductList .brand .prod-count .label-title {
    text-align: left;
    display: block;
    font-size: 13px;
    line-height: 1.4em;
  }

  .reviewProductList .brand .deal-count .label-dsc,
  .reviewProductList .brand .prod-count .label-dsc {
    display: none;
    line-height: 1.4em;
    font-size: 13px;
  }

  .reviewProductList .brand .prod-count .count-box {
    background-color: #059;
  }

  .reviewProductList .prodData {
    box-sizing: border-box;
    width: 55.8333333333%;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
    float: right;
    font-size: 0.9em !important;
  }

  .reviewProductList .brand-label {
    display: block;
    padding: 0.5em 0;
  }
  .font-s-small {
    font-size: 13px;
  }
  .reviewProductList .prodData .tagline {
    clear: both;
    padding: 0 0 0.6em;
    line-height: 1.4em;
    font-size: 13px;
  }

  .label {
    padding: 5px 8px;
    background-color: #888;
    font-size: 11px;
    font-weight: 500;
    line-height: 100%;
    color: #fff;
    border-radius: 2px;
    text-shadow: 1px 1px 0 #6f6f6f;
    text-transform: uppercase;
  }

  .label.success {
    background-color: #079c3a;
    text-shadow: none;
    font-family: nimbusnovus-medium, sans-serif;
  }

  .reviewProductList .promo-label {
    color: #fff;
    margin-bottom: 1.2em;
    clear: both;
    float: left;
    padding: 0.4em 0.5em;
    font-size: 0.5em;
  }

  .reviewProductList .prodData button {
    clear: both;
    display: block;
    float: left;
    margin: 0 !important;
  }
  @media (min-width: 480px) {
    .reviewProductList .prodImg {
      box-sizing: border-box;
      width: 25%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
    }
    .reviewProductList .product-title {
      box-sizing: border-box;
      width: 44.1666666667%;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
      float: left;
      border-right: 5px solid #eee;
    }

    .reviewProductList .product-title a {
      padding: 0.2em 0.7em;
    }

    .reviewProductList .brand {
      box-sizing: border-box;
      width: 18.3333333333%;
      padding-left: 0;
      padding-right: 0;
      font-size: 13px;
      float: right;
      display: inherit;
    }

    .reviewProductList .brand .brand-img {
      float: none;
      width: auto;
      display: block;
      height: auto;
    }

    .reviewProductList .brand .brand-img img {
      vertical-align: middle;
      max-height: inherit;
      max-width: auto;
    }

    .reviewProductList .brand .deal-count,
    .reviewProductList .brand .prod-count {
      clear: both;
      float: none;
      width: auto;
      margin: 0.5em 0;
      display: block;
    }

    .reviewProductList .brand .count-box {
      font-size: 16px;
    }

    .reviewProductList .brand .deal-count .label-title,
    .reviewProductList .brand .prod-count .label-title {
      font-size: 13px;
      line-height: 1.1em;
    }

    .reviewProductList .brand .deal-count .label-dsc,
    .reviewProductList .brand .prod-count .label-dsc {
      display: block;
    }

    .reviewProductList .prodData {
      box-sizing: border-box;
      width: 44.1666666667%;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
      float: left;
      border-right: 5px solid #eee;
    }

    .reviewProductList .brand-label {
      display: none;
    }

    .reviewProductList .prodData .tagline {
      display: block;
      padding: 0 0 0.5em;
      font-size: 13px;
    }
    /* end of 480 */
  }

  @media (min-width: 840px) {
    .reviewProductList .prodImg {
      box-sizing: border-box;
      width: 25%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
    }

    .reviewProductList .product-title {
      box-sizing: border-box;
      width: 45.8333333333%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
      font-size: 1.2em !important;
      border-right: 5px solid #eee;
    }

    .reviewProductList .product-title a {
      padding: 0.2em 0.8em;
    }

    .reviewProductList .brand {
      box-sizing: border-box;
      width: 15%;
      padding-left: 0;
      padding-right: 0;
      font-size: 13px;
      float: right;
      display: inherit;
    }
    .reviewProductList .prodData {
      box-sizing: border-box;
      width: 45.8333333333%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
      border-right: 5px solid #eee;
      font-size: 1.2em !important;
    }
    .reviewProductList .prodData .tagline {
      display: block;
      padding: 0 0 0.5em;
      font-size: 13px;
    }
    /* end of 840 */
  }

  @media (min-width: 1024px) {
    .reviewProductList .product-title {
      box-sizing: border-box;
      width: 50%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
      font-size: 1.2em !important;
      border-right: 5px solid #eee;
    }

    .reviewProductList .product-title a {
      padding: 0.2em 0.8em;
    }

    .reviewProductList .brand {
      box-sizing: border-box;
      width: 15%;
      padding-left: 0;
      padding-right: 0;
      float: right;
      padding-top: 0;
      font-size: 13px;
      display: inherit;
    }

    .reviewProductList .prodData {
      box-sizing: border-box;
      width: 50%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
      border-right: 5px solid #eee;
      font-size: 1.2 em !important;
    }
  }
`;
