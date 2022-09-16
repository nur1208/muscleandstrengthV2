import styled from "styled-components";

export const MainWrapper = styled.div`
  h3.title {
    color: #fff;
    background-color: #059;
    padding: 10px 0 10px 14px;
    font-family: nimbusnovus-medium, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 16px;
  }

  h3.title {
    margin-bottom: 10px;
  }
  .checkoutProgressWrapper dl {
    margin: 0;
  }

  .checkoutProgressWrapper h4 {
    margin: 10px 0 0;
    background-color: #d5d5d5;
    padding: 8px 0 8px 14px;
    color: #fff;
    font-family: nimbusnovus-medium, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 16px;
  }

  h4.complete {
    background-color: #059;
    color: #fff;
  }

  .checkoutProgressWrapper h4 svg {
    margin-right: 10px;
    height: 13px;
    width: 13px;
  }
  .is-hidden {
    display: none !important;
  }

  .checkoutProgressWrapper .complete_div {
    padding: 12px;
  }

  .checkoutProgressWrapper .complete_div {
    line-height: 1.4em;
    font-size: 13px;
    background-color: #fff;
    padding-top: 10px;
  }
  @media (min-width: 840px) {
    h3.title {
      margin-bottom: 15px;
    }
    .checkoutProgressWrapper .complete_div {
      padding: 15px;
    }
  } ;
`;
