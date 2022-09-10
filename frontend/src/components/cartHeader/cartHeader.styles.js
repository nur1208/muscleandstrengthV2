import styled from "styled-components";

export const MainWrapper = styled.div`
  overflow: hidden;

  h1.cart-title {
    text-align: center;
    overflow: hidden;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  h1.cart-title .badge {
    margin-top: 0;
    display: none;
    float: right;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1.cart-title .badge img {
    margin: 0 !important;
    border: 0;
  }

  h1.cart-title .badge.bbb {
    margin: 0 0.3em 0 0;
    overflow: hidden;
    line-height: 0;
  }

  .cart-feature-wrap {
    overflow: hidden;
    background-color: #eee;
    font-family: nimbusnovus-bold, sans-serif;
    font-size: 13px;
    padding: 10px 0;
    margin-bottom: 2em;
    text-align: center;
    display: none;
    color: #aaa;
  }

  .cart-feature-wrap div[class^="feature-"] {
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-feature-wrap span {
    margin-left: 4px;
  }

  .cart-feature-wrap svg {
    display: inline-block;
    vertical-align: middle;
    width: 17px;
    height: 17px;
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
  }

  @media (min-width: 0) and (max-width: 480px) {
    button {
      width: 45%;
      padding: 0px 7px;
      font-size: 14px;
      height: 54px;
      /* overflow: hidden;
      text-overflow: ellipsis; */
    }
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 840px) {
    h1.cart-title {
      text-align: left;
    }

    h1.cart-title .cart-header-text {
      float: left;
    }

    h1.cart-title .badge {
      display: block !important;
    }

    .cart-feature-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 30px;
    }
  }
`;
