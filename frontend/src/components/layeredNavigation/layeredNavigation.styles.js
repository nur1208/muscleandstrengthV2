import styled from "styled-components";

export const MainWrapper = styled.div`
  .block-layered-nav {
    padding: 0;
    margin: 0 auto;
  }

  .block-layered-nav .text {
    display: none;
    font-family: nimbusnovus-medium, sans-serif;
    font-size: 13px;
  }
  .btn-tab-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #059;
  }

  .btn-tab-container {
    margin-bottom: 10px;
  }

  .blue-stripe,
  h2.blue-stripe {
    margin-bottom: 10px;
  }

  .blue-stripe,
  h2.blue-stripe {
    position: relative;
    width: 100%;
    max-width: 81.25rem;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 16px;
    background-color: #059;
  }

  .btn-tab-container h2.blue-stripe {
    margin: 0;
    line-height: 39px;
    text-align: left;
    padding-left: 12px;
  }

  .refine-search-wrap {
    width: 100%;
    margin: 0;
  }

  .refine-search-wrap {
    width: auto;
    margin: 0;
    font-size: 18px;
  }

  .block-layered-nav .block-content__filters {
    display: none;
    margin-top: -10px;
  }

  .sorting-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    line-height: 32px;
    background-color: #fff;
  }

  .sorting-bar {
    padding: 8px 15px;
  }

  .sorting-bar .option-wrap {
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .sorting-bar .option-wrap .option {
    display: inline-block;
    font-size: 13px;
    border-radius: 2px;
  }
  .sorting-bar .option-wrap .option .inner-wrap {
    color: #059;
    cursor: pointer;
  }

  .sorting-bar .option-toggle {
    flex: 0 0 84px;
    border-left: 1px solid #ddd;
    padding: 0 15px;
    margin-left: 10px;
    color: #fff;
    cursor: pointer;
  }

  .sorting-bar .option-toggle .inner {
    width: 75px;
  }

  .sorting-bar .option-toggle .inner a {
    display: block;
    text-align: center;
  }

  .sorting-bar .option-toggle svg {
    width: 18px;
    height: 18px;
    margin-left: 5px;
    margin-bottom: -5px;
  }
  .narrow-by-list {
    display: block;
    background-color: #fff;
    margin: 0 10px 1px;
  }

  .narrow-by-list dt {
    display: block;
    border: 0;
    background-color: #059;
    font-family: nimbusnovus-medium, sans-serif;
    padding: 8px 10px 8px 15px;
    font-size: 16px;
    text-transform: capitalize;
    color: #fff;
    text-align: left;
    position: relative;
    margin-bottom: 0;
    line-height: 1.25;
    cursor: pointer;
  }

  .narrow-by-list dt .caret-down {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    margin: 4px 0 0;
    float: right;
    transform-origin: 8px 4px;
    transform: rotate(-90deg);
    transition: transform 0.2s ease-in-out;
    vertical-align: bottom;
  }

  .narrow-by-list dt.filter-item--active .caret-down {
    transform: rotate(0);
  }
  .narrow-by-list dt .caret-down:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 8px solid transparent;
  }

  .narrow-by-list dt .caret-down:before {
    border-top-color: #fff;
  }
  .narrow-by-list dt .caret-down:after {
    content: "";
    position: absolute;
    border: 6px solid transparent;
  }

  .narrow-by-list dt:hover {
    background-color: #004780;
  }
  .narrow-by-list dt .caret-down:after {
    left: 2px;
    top: 0;
    border-top-color: #059;
  }

  .narrow-by-list dd {
    display: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  .narrow-by-list ul[class*="short-list"] {
    padding: 0 10px;
  }

  .short-list-on li {
    display: none;
  }

  .narrow-by-list li {
    position: relative;
    clear: both;
    overflow: hidden;
    margin: 0;
    font-size: 13px;
    transition: color 0.8s;
    border-top: 1px solid #eee;
  }

  .short-list-on li:nth-child(-n + 10) {
    display: block;
  }

  .narrow-by-list li:nth-child(1) {
    border-top: 0;
  }

  .narrow-by-list ul[class*="short-list"] li a {
    display: block;
  }

  .narrow-by-list ul[class*="short-list"] li a {
    color: #303030;
    padding: 1em 0 1em 2em;
    cursor: pointer;
  }

  .show-less,
  .show-more {
    display: none;
    background-color: transparent;
    padding-left: 0.5em;
    padding-top: 0.6em;
    padding-bottom: 0.3em;
    font-size: 13px;
    transition: color 0.8s;
    margin: 3%;
    width: 94%;
    border: 0;
    border-top: 1px solid #eee;
    text-align: left;
    height: 2.5em;
  }
  .cta {
    cursor: pointer;
  }

  .short-list-on .show-more,
  .short-list-on li:nth-child(-n + 10) {
    display: block;
  }

  .block-layered-nav .show-less,
  .block-layered-nav .show-more {
    border-top-color: #eee;
    margin: 0;
    width: 100%;
    font-family: nimbusnovus-regular, sans-serif;
  }

  .is-hidden {
    display: none !important;
  }

  .is-hidden {
    display: none;
  }
  label {
    display: block;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.8;
    color: #303030;
  }

  .narrow-by-list input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  [type="checkbox"],
  [type="file"],
  [type="radio"] {
    margin: 0 0 0.625rem;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="checkbox"],
  input[type="radio"] {
    float: left;
    width: 20px;
    margin: 0 5px 0 0;
    padding: 0;
    border-radius: 0;
  }

  .narrow-by-list input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .narrow-by-list ul[class*="short-list"] li a:before {
    position: absolute;
    top: 1em;
    left: 0.3em;
    width: 1em;
    height: 1em;
    border: 1px solid #ddd;
    content: "";
    background-color: #fff;
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
  }

  .block-content__filters .filter-process.button-row {
    background-color: #fff;
    justify-content: space-between;
    padding: 8px 15px;
    margin: 0 0 10px;
  }

  .filter-process.button-row button {
    flex: 0 0 48%;
  }

  .block-content__filters.filters-pending
    .filter-process.button-row {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    background-color: #0687e6;
    z-index: 100;
    box-shadow: 0 -1px 1px rgb(51 51 51 / 30%);
  }

  .rating-filter-item {
    font-size: 13px;
  }

  .rating-filter-item a.rating-filter-item-wrap {
    display: flex !important;
    align-items: center;

    color: #303030;
    padding: 1em 0 1em 2em;
    cursor: pointer;
  }

  .rating-filter-item .rating-filter-item-text {
    margin-left: 5px;
  }

  .short-list-on.active li {
    display: block;
  }
  @media screen and (min-width: 52.5em) {
    .blue-stripe,
    h2.blue-stripe {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 480px) {
    .sorting-bar {
      font-size: 16px;
    }

    .sorting-bar .option-wrap {
      display: inline-block;
    }

    .sorting-bar .option-wrap .option {
      padding: 0 20px;
    }
    .sorting-bar .option-toggle {
      flex: 0 0 auto;
    }
  }
  @media (min-width: 600px) {
    .block-layered-nav .text {
      font-size: 16px;
    }

    .btn-tab-container h2.blue-stripe {
      line-height: 35px;
    }
  }

  @media (min-width: 680px) {
    .refine-search-wrap {
      font-size: 16px;
    }
  }
  @media (min-width: 840px) {
    .block-layered-nav .block-subtitle {
      display: none;
    }
    .btn-tab-container {
      margin-bottom: 15px;
    }

    .refine-search-wrap {
      width: auto;
      margin-bottom: 1.5em;
      background-color: #fff;
    }

    .refine-search-wrap {
      margin: 0 0 1em;
    }

    .block-layered-nav .block-content__filters {
      display: block;
      margin-top: 0;
    }

    .sorting-bar {
      display: none;
    }

    .narrow-by-list {
      margin: 0;
    }
    .narrow-by-list dt {
      font-size: 13px;
    }

    .narrow-by-list dd {
      display: block;
    }

    .narrow-by-list ul[class*="short-list"] {
      padding: 0 0.5em;
    }
    .block-content__filters .filter-process.button-row {
      display: none;
    }
  }
`;
