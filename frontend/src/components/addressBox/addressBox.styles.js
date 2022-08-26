import styled from "styled-components";

export const MainWrapper = styled.div`
  overflow: hidden;
  clear: both;
  padding-top: 0.5em;

  h3 {
    border-bottom: 0.2em solid #eee;
    padding-bottom: 0.05em;
    margin: 0.4em 0;
    clear: both;

    margin: 0 0.5em 2% !important;
    border-bottom: 1px solid #ddd !important;
    color: #059;
    font-size: 1.3em !important;
    padding-bottom: 0.3em !important;
  }

  .address-list {
    overflow: hidden;
    margin-bottom: 1em;
    padding-bottom: 1em;

    padding-bottom: 0;
  }

  .address-list .wrap-grid {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
  }

  h6 {
    margin: 0.5em 0 0 !important;
    background-color: #059;
    padding: 0.4em 0.8em !important;
    color: #fff;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  .address-list .address {
    line-height: 1.4em;
    font-size: 0.85em;
    padding: 1em;
    background-color: #fff;
    overflow: hidden;
    border: 1px solid #ddd;
  }

  .address-list .buttons {
    padding-top: 0.5em;
    overflow: hidden;
    clear: both;
  }
  @media (min-width: 400px) {
    .address-list .wrap-grid {
      box-sizing: border-box;
      width: 50%;
      float: left;
      padding-left: 2.0833333333%;
      padding-right: 2.0833333333%;
    }

    .address-list .wrap-grid:nth-child(2n-1) {
      padding-left: 0;
    }
  }
  @media (min-width: 600px) {
    padding-top: 0;
    border-radius: 2px;
    border: 1px solid #ddd;

    .address-list {
      margin: 0.7em !important;
    }
  }
`;
