import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5 !important;
  font-size: 16px;
  #page {
    background-color: #f5f5f5;
    position: relative;
    z-index: 0;
  }

  #page {
    padding-bottom: 1em;
  }

  #main-wrap {
    max-width: 1060px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2.5%;
    max-width: 1060px;
    background: #f5f5f5;
  }

  #main-wrap {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0;
  }

  #main-wrap .main-content {
    float: left;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  .product-title-wrap {
    width: 95%;
    padding: 0 2.5%;
    margin-bottom: 1em;
  }

  h1.product-title {
    font-size: 1.5em;
    padding: 0;
    line-height: 1em;
  }

  .product-info,
  .product-data {
    width: 100%;
    padding: 0 2.5%;
    clear: both;
  }

  .product-info {
    margin-bottom: 1em;
  }
  .brand {
    padding-bottom: 0.5em;
  }
  .brand,
  .tagline,
  .product-features {
    font-family: nimbusnovus-regular, sans-serif;
    font-size: 13px;
  }
  .tagline {
    padding-bottom: 0.3em;
  }

  .product-features {
    padding: 1em 1em 0;
    /* font-size: 16px; */
    margin: 0;
    list-style-type: disc;
  }

  .product-features li {
    display: none;
    margin-bottom: 6px;
  }
  .product-features li:nth-child(-n + 4) {
    display: list-item;
  }

  .product-data {
    padding: 0;
    text-align: left;
  }
  .product-data .review-status-button {
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    padding: 0;
    overflow: hidden;
  }

  .product-data .review-status-button .button-text,
  .product-share-btn .button-text {
    display: inline-block;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 40px;
    padding: 0 8px;
  }

  .product-share-btn {
    cursor: pointer;
    margin-top: 0.4em;
  }

  .product-share-btn {
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    padding: 0;
    overflow: hidden;
  }
  span.addthis_button_more {
    margin-bottom: 5px;
    width: auto;
    cursor: pointer;
    line-height: initial;
  }

  .product-share-btn .icon-wrap {
    padding: 0.57em;
    background-color: #eee;
    float: left;
    line-height: 0;
    border-right: 1px solid #ddd;
    font-size: 19px;
  }
  div.atclear {
    clear: both;
  }

  .aside {
    border-radius: 2px;
    z-index: 0;
    display: none;
  }

  .aside.aside-after {
    width: 100%;
    display: block;
    background-color: transparent;
    float: left;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    padding: 0;
  }

  #results-disclaimer {
    font-size: 13px;
    line-height: 1.5em;
    padding-top: 1.5em;
    margin-top: 1em;
    padding-left: 5%;
    padding-right: 5%;
    clear: both;
    display: block;
    overflow: hidden;
  }

  .font-s-small {
    font-size: 13px;
  }
  .fdaWarning {
    font-size: 13px;
    line-height: 1.5em;
    padding: 1.5em 5%;
    clear: both;
    display: block;
    overflow: hidden;
  }

  @media (min-width: 320px) {
    .product-data {
      font-size: 0.87em;
      text-align: center;
    }
  }

  @media (min-width: 340px) {
    .product-data {
      text-align: center;
    }
  }

  @media (min-width: 370px) {
    .product-data {
      font-size: 13px;
      text-align: center;
    }
  }
  @media (min-width: 400px) {
    #main-wrap {
      padding-top: 0;
    }

    h1.product-title {
      font-size: 2em;
      padding: 0;
      line-height: 1em;
    }

    .product-data {
      font-size: 18px;
      text-align: center;
    }
    .product-share-btn {
      margin-top: 0.4em;
    }
  }
  @media (min-width: 600px) {
    .product-data {
      text-align: left;
    }
  }
  @media (min-width: 630px) {
    h1.product-title {
      font-size: 1.8em;
      line-height: 1.1em;
    }
  }
  @media (min-width: 740px) {
    #main-wrap {
      /* margin:
       2%; */
      margin-top: 2%;

      padding-top: 0;
      position: relative;
    }
  }
  @media (min-width: 800px) {
    #page {
      padding-bottom: 0;
    }
  }

  @media (min-width: 840px) {
    #page {
      overflow: hidden;
    }

    #main-wrap .main-content {
      float: left;
      width: 68%;
      position: relative;
    }

    #main-wrap .main-content {
      float: left;
      width: 65%;
      padding-left: 0;
      padding-right: 0;
    }

    .product-title-wrap {
      float: right;
      width: 55%;
      padding: 0 2.5%;
      margin-bottom: 1em;
    }

    h1.product-title {
      font-size: 1.8em;
      padding: 0 0 0 0.3em;
      border-left: 7px solid #059;
      margin-top: 0;
    }

    .product-info,
    .product-data {
      float: right;
      width: 55%;
      clear: none;
      padding: 0 2.5%;
    }

    .product-data {
      padding-top: 0;
      border-top: 0;
      text-align: left;
    }

    .product-data .review-status-button .button-text,
    .product-share-btn .button-text {
      line-height: 41px;
    }
    .aside {
      float: right;
      width: 30%;
      display: block;
    }

    .aside.aside-after {
      float: right;
      width: 33%;
      padding-left: 0;
      padding-right: 0;
      display: block;
    }
  }
  @media (min-width: 1280px) {
    #main-wrap {
      position: relative;
      margin: 1em 2em 2em;
      padding-top: 0;
    }

    #main-wrap .main-content {
      float: left;
      width: 70%;
      padding-left: 0;
      padding-right: 0;
    }

    .product-title-wrap {
      margin-bottom: 0;
    }

    h1.product-title {
      font-size: 2.3em;
      margin-top: 0.2em;
      line-height: 1.1em;
    }
    .product-info {
      padding-top: 2em;
    }
    .product-share-btn {
      margin-top: 0;
      margin-left: 1em;
    }

    .aside.aside-after {
      float: right;
      width: 28.5%;
      padding-left: 0;
      padding-right: 0;
      display: block;
    }
  }
`;
