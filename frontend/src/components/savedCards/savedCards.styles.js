import styled from "styled-components";

export const MainWrapper = styled.div`
  h1 {
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    font-family: nimbusnovus-bold, sans-serif;
    font-size: 1.8em;
    line-height: 1em;
    margin: 0 0 10px;
    padding: 0;
  }

  .margBot10 {
    margin-bottom: 10px;
  }

  p {
    margin-top: 0;
  }
  .margBot20 {
    margin-bottom: 20px;
  }

  .dashboard-wrap {
    overflow: hidden;
    clear: both;
    padding: 0.5em 0.8em 0;
  }

  .bordered {
    border-bottom: 4px solid #eee;
    padding-bottom: 2px;
  }
  .margBot15 {
    margin-bottom: 15px;
  }

  h3 {
    -variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3em;

    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .ccard-list,
  .order-info-list {
    overflow: hidden;
    margin-bottom: 1em;
    padding-bottom: 1em;
  }

  .ccard-list .wrap-grid,
  .order-info-list .wrap-grid {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
  }

  .ccard-list.hasButtons .wrap-grid,
  .order-info-list.addressAdditional .wrap-grid,
  .order-info-list.hasButtons .wrap-grid {
    padding: 0.8em 0 0;
  }
  .ccard-list.hasButtons .wrap-grid:nth-child(2n-1),
  .order-info-list.addressAdditional .wrap-grid:nth-child(2n-1),
  .order-info-list.hasButtons .wrap-grid:nth-child(2n-1) {
    padding-right: 2.0833333333%;
  }

  .ccard-list .info {
    line-height: 1.4em;
    font-size: 0.85em;
    padding: 1em;
    background-color: #fff;
    overflow: hidden;
    border: 1px solid #ddd;

    overflow: hidden;
  }

  .ccard-list.hasButtons
    .wrap-grid
    p:nth-child(1):nth-last-child(1) {
    margin: 0;
  }

  .acenter {
    text-align: center;
  }
  p {
    margin-top: 0;
  }
  @media (min-width: 400px) {
    .ccard-list .wrap-grid,
    .order-info-list .wrap-grid {
      box-sizing: border-box;
      width: 50%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
    }

    .ccard-list .wrap-grid:nth-child(2n-1),
    .order-info-list .wrap-grid:nth-child(2n-1) {
      padding-left: 0;
    }
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 600px) {
    .dashboard-wrap {
      padding-top: 0;
      border-radius: 2px;
      border: 1px solid #ddd;
    }

    .dashboard-wrap h3 {
      margin: 0 0 0.5% !important;
      border-bottom: 1px solid #ddd !important;
      color: #059;
      font-size: 1.3em !important;
      padding-bottom: 0.3em !important;
    }
  }
`;
