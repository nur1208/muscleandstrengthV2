import styled from "styled-components";

export const MainWrapper = styled.nav`
  position: relative;
  border-bottom: 1px solid #eee;
  background-color: #fff;

  .nav-block--inner {
    max-width: 1300px;
    margin: 0 auto;
    text-align: center;
    line-height: 32px;
    font-size: 13px;
  }

  .breadcrumb,
  .breadcrumb-mobile {
    padding: 0;
    display: none;
    font-size: 13px;
  }

  .breadcrumb a,
  .breadcrumb-mobile a {
    text-decoration: none;
    color: #303030;
  }

  .free-shipping-block {
    cursor: pointer;
    text-align: center;
  }

  .free-shipping-block .icon {
    display: inline-block;
    margin: -1em 0.15em 0 0;
    position: relative;
    top: 0.24em;
  }

  .free-shipping-block .base-text {
    display: inline-block;
    color: #059;
    font-family: nimbusnovus-bold, sans-serif;
    text-transform: uppercase;
  }

  .text {
    display: inline-block;
    margin-top: 0;
  }

  @media (min-width: 840px) {
    padding: 0 20px;

    .nav-block--inner {
      text-align: left;
    }

    .breadcrumb,
    .breadcrumb-mobile {
      display: inline-block;
    }

    .free-shipping-block {
      float: right;
      display: inline-block;
    }
  }

  @media (min-width: 1280px) {
    margin-bottom: 15px;
  }
`;
