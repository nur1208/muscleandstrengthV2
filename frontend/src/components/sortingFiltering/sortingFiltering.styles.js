import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  margin: 0;

  margin-bottom: 1em;

  .mobile-header {
    position: relative;
    padding: 8px 15px;
    font-size: 18px;
    color: #fff;
    background-color: #059;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-header {
    position: relative;
    padding: 0.8em 1em 0.8em 0.5em !important;
    background-color: #fff;
    margin: 0;
    overflow: hidden;
    color: #059;
    text-transform: uppercase;
  }

  .mobile-header button {
    margin: 0 auto;
  }

  .mobile-header label {
    float: left;
    color: #059;
    padding: 0.6em 0 0 5%;
    font-size: 13px;
    width: 90%;
    position: absolute;
    left: 0;
    z-index: 0;
  }

  .mobile-header label.heading {
    font-size: 18px;
    float: left;
    padding: 0.4em 0 0 1em;
  }

  .review-sorting-filtering {
    width: 100%;
    float: left;
    clear: both;
    display: none;
  }

  .review-sorting-filtering .inner-wrap {
    margin-top: -1px;
    border-left: 1px solid #ddd;
  }

  .review-sorting-filtering .wrap {
    overflow: hidden;
    background-color: #fff;
    position: relative;
    clear: both;
    margin-bottom: -1px;
    margin-left: -1px;
  }

  .review-sorting-filtering .filter-by .wrap,
  .review-sorting-filtering .sort-by .wrap {
    padding: 1em 1em 0.5em;
    min-height: 5.5em;
  }

  .simple-radio {
    padding: 0;
    margin: 0;
    display: block;
    width: 100%;
    float: left;
    position: relative;
  }
  .review-sorting-filtering ul.simple-radio {
    padding: 0;
  }
  .main-content ol,
  .main-content ul {
    margin-top: 0;
  }

  .simple-radio li {
    list-style: none;
    cursor: pointer;
    background-color: #eee;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    font-size: 13px;
    transition: color 0.8s;
    margin: 3%;
    display: block;
  }

  .simple-radio.list-style li {
    background-color: transparent;
    padding-top: 0.6em;
    padding-bottom: 0.3em;
    font-size: 13px;
    transition: color 0.8s;
    margin: 3%;
    border-top: 1px solid #ddd;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .simple-radio.list-style li:nth-child(1) {
    border-top: 0;
  }

  .simple-radio.list-style li.checked {
    color: #059 !important;
  }
  .simple-radio input {
    display: none !important;
  }

  .simple-radio .radio-check {
    display: inline-block;
    text-align: center;
    width: 1.3em;
    height: 1.3em;
    background-color: #a2a2a2;
    margin: 0 1.2em -0.2em;
    font-size: 13px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #eee;
  }

  .simple-radio.list-style li .radio-check {
    display: inline-block;
    text-align: center;
    width: 1.3em;
    height: 1.3em;
    background-color: #fff;
    margin: 0 1.2em -0.2em;
    font-size: 13px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #ddd;
  }

  .simple-radio.list-style li .radio-check .yes {
    width: 0;
    display: block;
    background-color: #059;
    color: #fff;
    height: 0;
    line-height: 1em;
    transition: 0.3s;
    border-radius: 100px;
    margin-top: 50px;
    margin-left: -50px;
    border: 1px solid #059;
  }

  .simple-radio.list-style li.checked .radio-check .yes {
    width: 1.8em;
    height: 1.6em;
    margin: -0.3em;
  }

  .simple-radio.list-style li .radio-check .yes .icon-check {
    font-size: 13px;
    position: relative;
    top: -0.7em;
  }

  .review-sorting-filtering .star-filter .wrap {
    padding: 1em;
    min-height: 5em;
  }

  .review-sorting-filtering .wrap {
    overflow: hidden;
    background-color: #fff;
    position: relative;
    clear: both;
    margin-bottom: -1px;
    margin-left: -1px;
  }
  input[type="text"] {
    -webkit-appearance: none;
    display: none;
  }

  .irs {
    position: relative;
    display: block;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .irs {
    height: 55px;
  }

  .irs-with-grid {
    height: 75px;
  }

  .irs-line {
    position: relative;
    display: block;
    overflow: hidden;
    outline: 0 !important;
  }

  .irs-line {
    height: 10px;
    top: 33px;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 16px;
    -moz-border-radius: 16px;
  }

  .irs-min {
    position: absolute;
    left: 0;
    cursor: default;
  }
  .irs-max {
    position: absolute;
    right: 0;
    cursor: default;
  }
  .irs-max,
  .irs-min {
    color: #333;
    font-size: 12px;
    line-height: 1.333;
    top: 0;
    display: none;
  }

  .irs-from,
  .irs-single,
  .irs-to {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    cursor: default;
    white-space: nowrap;
  }

  .irs-from,
  .irs-single,
  .irs-to {
    font-size: 14px;
    line-height: 1.333;
    text-shadow: none;
    padding: 0;
    color: #059;
    text-transform: uppercase;
  }

  .irs-grid {
    position: absolute;
    display: none;
    bottom: 0;
    left: 0;
    width: 100%;
    left: -0.1%;
  }

  .irs-grid {
    height: 27px;
  }

  .irs-with-grid .irs-grid {
    display: block;
  }

  .irs-grid-pol {
    opacity: 0.5;
    background: #428bca;
  }
  .irs-grid-pol {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 8px;
  }

  .irs-grid-text {
    bottom: 5px;
    color: #99a4ac;
  }

  .irs-grid-text {
    position: absolute;
    left: 0;
    white-space: nowrap;
    text-align: center;
    font-size: 9px;
    line-height: 9px;
    padding: 0 3px;
  }

  .irs-grid-pol.small {
    height: 4px;
    background: #999;
  }
  @media (min-width: 400px) {
    .review-sorting-filtering .filter-by,
    .review-sorting-filtering .sort-by {
      float: left;
      width: 50%;
    }

    .simple-radio li .radio-check .yes .icon-check,
    .simple-radio.list-style li .radio-check .yes .icon-check {
      font-size: 13px;
      position: relative;
      top: -0.8em;
    }
  }

  @media (min-width: 800px) {
    .simple-radio .radio-check,
    .simple-radio.list-style li .radio-check {
      margin: 0 0.5em -0.2em 0.3em;
    }
    .simple-radio.list-style li .radio-check .yes .icon-check {
      font-size: 13px;
      position: relative;
      top: -0.9em;
    }
  }
  @media (min-width: 840px) {
    width: auto;
    /* margin-bottom: 1.5em; */
    background-color: #fff;

    .mobile-header {
      display: none;
    }

    .review-sorting-filtering {
      display: block;
      margin-bottom: 1em;
    }

    .review-sorting-filtering .inner-wrap {
      margin-top: 0;
      border-left: 0;
    }
  }

  @media (min-width: 1082px) {
    .review-sorting-filtering .filter-by,
    .review-sorting-filtering .sort-by {
      width: 28.6%;
    }

    .review-sorting-filtering .star-filter {
      width: 42.8%;
      float: left;
    }
  } ;
`;
