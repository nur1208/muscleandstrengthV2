import styled from "styled-components";

export const MainWrapper = styled.div`
  .point-header-wrap {
    padding: 1em 0;
    float: left;
    width: 100%;
  }

  .point-header-wrap .right,
  .point-header-wrap .left {
    font-size: 1.5em;
    color: #059;
    text-transform: uppercase;
    font-style: italic;
    width: 37%;
    float: left;
  }

  .point-header-wrap .left {
    text-align: right;
    padding-right: 2%;
  }

  .point-header-wrap .right {
    text-align: left;
    padding-left: 2%;
  }
  .point-header-wrap .middle {
    float: left;
    width: 22%;
    margin-top: -8%;
    padding-top: 1em;
  }

  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }
  #main-wrap .main-content img {
    max-width: 100%;
    height: auto;
  }

  .ribbon-wrap {
    width: 100%;
    margin: 2em auto 1.5em;
    clear: both;
    display: block;
  }

  .ribbon-wrap .ribbon-body {
    background-color: #059;
    margin: 0 4.5em -2.5em;
    z-index: 1;
    position: relative;
  }
  .ribbon-wrap .ribbon-body .number {
    text-align: center;
    padding: 0.4em;
    font-size: 3em;
    font-family: nimbusnovus-bold, sans-serif;
    font-weight: 700;
    color: #fff;
    text-shadow: 1px 2px 0 #004780;
  }

  .ribbon-wrap .ribbon-left {
    border: 2em solid #004f8f;
    border-left-color: transparent;
    width: 2em;
    float: left;
    position: relative;
  }

  .ribbon-wrap .ribbon-left .corner {
    border: 0.8em solid #004780;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    right: -2em;
    bottom: -2em;
  }

  .ribbon-wrap .ribbon-right {
    border: 2em solid #004f8f;
    border-right-color: transparent;
    width: 2em;
    float: right;
    position: relative;
  }

  .ribbon-wrap .ribbon-right .corner {
    border: 0.8em solid #004780;
    border-right-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    left: -2em;
    bottom: -2em;
  }

  .ribbon-wrap .label-text {
    font-size: 13px;
    color: #059;
    text-align: center;
    margin-top: 10px;
    padding-top: 3.1em;
    line-height: 1.1em;
  }

  .expiry-points {
    font-size: 13px;
    padding: 1em 0.5em;
    background-color: #eee;
    text-align: center;
  }

  .swap-img-block {
    padding: 1.5em 0 0;
    text-align: center;
  }

  .swap-img-block .show-desktop {
    display: none;
  }

  .swap-img-block .show-mobile {
    display: block;
  }

  .data-grid {
    overflow: hidden;
    padding: 0.8em;
    border: 1px solid #d5d5d5;
    border-radius: 2px;
    clear: both;
  }

  .data-grid .data-line {
    clear: both;
    padding-top: 0.5em;
    margin-top: 0.5em;
    overflow: hidden;
  }

  .data-grid .data-line:nth-child(1) {
    border-top: 0;
    padding-top: 0;
    margin-top: 0;
  }

  .data-grid .status {
    border-radius: 2px;
    margin-bottom: 0.4em;
  }

  .data-grid .data-wrap {
    width: 33.333333333%;
    float: left;
  }

  .data-grid .data-wrap.status {
    width: auto;
    float: none;
    clear: both;
  }

  .data-grid .data-label {
    display: block;
    font-size: 0.8em;
    line-height: 1.2em;
  }

  .data-grid .data-wrap.status .data-label {
    display: none;
  }

  .data-grid .data {
    display: block;
    line-height: 1.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
  }
  .data-grid .status .data {
    padding: 0.2em 0.5em;
    text-transform: uppercase;
    text-overflow: initial;
    white-space: normal;
    overflow: visible;
    line-height: 1.1em;
  }
  .data-grid .action-buttons .data-label {
    display: none;
  }

  .mypoints-transfers-spendings {
    padding-bottom: 1em;
  }

  .data-grid .pointsearned .data,
  .data-grid .pointsspent .data {
    color: #059;
    font-family: nimbusnovus-bold, sans-serif;
  }
  @media (max-width: 800px) {
    .data-grid .appr {
      color: #fff;
      background-color: #079c3a;
    }
  }
  @media (min-width: 400px) {
    .point-header-wrap .right,
    .point-header-wrap .left {
      font-size: 2em;
    }
  }

  @media (min-width: 600px) {
    .point-header-wrap .right,
    .point-header-wrap .left {
      font-size: 2.5em;
    }
  }

  @media (min-width: 650px) {
    .swap-img-block .show-desktop {
      display: block;
    }

    .swap-img-block .show-mobile {
      display: none;
    }
  }
  @media (min-width: 800px) {
    .point-header-wrap .right,
    .point-header-wrap .left {
      font-size: 3em;
    }

    .data-grid .data-line {
      border-top: 1px solid #d5d5d5;
    }

    .data-grid .status {
      border-radius: 0;
      margin-bottom: 0;
    }

    .data-grid .data-wrap {
      width: 25%;
      float: left;
    }

    .data-grid .data-wrap.status {
      width: 13%;
      float: left;
      clear: none;
      margin-right: 2%;
    }

    .data-grid .appr .data {
      color: #079c3a;
    }

    .data-grid .status .data {
      font-size: 13px;
      padding: 0;
    }

    .data-grid .data-wrap.pointsearned,
    .data-grid .data-wrap.pointsspent {
      width: 20%;
    }

    .data-grid .data-wrap.date {
      width: 16%;
    }

    .data-grid .data-wrap.comment {
      width: 29%;
      padding-right: 3%;
    }

    .data-grid .data-wrap.action-buttons {
      width: 17%;
    }
  }

  @media only screen and (min-width: 900px) {
    .ribbon-wrap {
      width: 75%;
    }
  }

  @media (min-width: 1082px) {
    .data-grid .data-wrap.comment {
      width: 32%;
      padding-right: 3%;
    }

    .data-grid .data-wrap.action-buttons {
      width: 14%;
    }
  }
`;
