import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 800px;
  margin: 15px auto;
  font-size: 17px;
  .node-stats-block {
    background: #f5f5f5;
    margin-bottom: 25px;
    padding: 15px;
    border-top: 5px solid #059;
    border-radius: 2px;
  }
  h5 {
    font-size: 1.1111111111rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  .node-stats-block h5 {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  ul {
    margin-bottom: 1rem;
    list-style-position: outside;
    line-height: 1.6;
  }
  ul {
    margin-left: 40px;
    list-style-type: disc;
  }

  .node-stats-block ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: inherit;
  }
  .node-stats-block li {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    display: flex;
  }

  .node-stats-block li .row-label {
    display: inline-block;
    padding-right: 15px;
    color: #059;
    width: 40%;
  }

  .node-stats-block li .field-type-list-text {
    width: 60%;
    display: inline-block;
  }

  p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 60px;
    border-radius: 2px;
  }
  table {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    border-collapse: collapse;
  }

  tbody {
    border: 1px solid #f1f1f1;
    background-color: #fefefe;
  }
  table tbody {
    width: 98.9%;
    display: table;
  }
  table th {
    border: 1px solid #059;
    background-color: #059;
    font-family: roboto-medium, sans-serif;
    color: #fefefe;
    box-sizing: border-box;
    text-align: left;
  }
  .width60 {
    width: 60%;
  }
  .width20 {
    width: 20%;
  }

  tbody td,
  tbody th {
    padding: 0.4444444444rem 0.5555555556rem 0.5555555556rem;
  }
  table td {
    border: 1px solid #eee;
    box-sizing: border-box;
  }

  .nutritional-info {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #059;
    font-size: 16px;
  }

  .nutritional-info .heading {
    margin-bottom: 10px;
  }

  .nutritional-info h5 {
    color: #059;
  }

  .nutritional-info .nutrition-lines {
    margin: 0 0 10px;
    padding: 0;
    list-style: none;
    border-top: 5px solid #059;
    border-bottom: 5px solid #059;
  }

  .nutritional-info .notice {
    font-size: 13px;
  }

  li {
    font-size: inherit;
  }
  .nutritional-info li {
    padding: 5px 0;
    border-bottom: 1px solid #059;
  }

  label {
    display: block;
    margin: 0;
    font-size: 0.7777777778rem;
    font-weight: 400;
    line-height: 1.8;
    color: #0a0a0a;
  }
  .nutritional-info li label {
    margin-right: 10px;
    display: inline;
    font-family: roboto-medium, sans-serif;
  }
  .nutritional-info .calories {
    border-bottom: 3px solid #059;
  }

  .nutritional-info li div {
    display: inline;
  }

  .bench-tool {
    max-width: 600px;
    margin: 0 auto 15px;
    background: #f5f5f5;
    border-radius: 2px;
  }

  .bench-tool h3 {
    padding: 10px;
    background: #059;
    color: #fefefe;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 2px 2px 0 0;
  }

  .bench-tool #bp-calculator-form {
    padding: 15px;
  }

  .bench-tool .units,
  .bench-tool .weight {
    margin-bottom: 5px;
  }

  .visually-hidden {
    display: none;
  }

  select {
    box-sizing: border-box;
    width: 100%;
    height: 2.3333333333rem;
    margin: 0 0 0.8888888889rem;
    padding: 0.4444444444rem 1.3333333333rem 0.4444444444rem
      0.4444444444rem;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #e6e7e8;
    border-radius: 2px;
    background-color: #fefefe;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzMyJyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMzIgMjQnPjxwb2x5Z29uIHBvaW50cz0nMCwwIDMyLDAgMTYsMjQnIHN0eWxlPSdmaWxsOiByZ2IoMTM4LCAxMzgsIDEzOCknPjwvcG9seWdvbj48L3N2Zz4=);
    background-origin: content-box;
    background-position: right -0.8888888889rem center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  }

  select:not([multiple]) {
    padding-top: 0;
    padding-bottom: 0;
  }

  .tool-result {
    display: none;
    max-width: 600px;
    margin: 0 auto 15px;
    padding: 10px 25px;
    background: #3adb76;
    text-align: center;
    font-family: roboto-bold, sans-serif;
    border-radius: 2px;
  }

  .tool-result .value {
    font-family: opensans-heavy;
    font-size: 36px;
  }
  .tool-result span {
    display: block;
  }

  .tool-result .share-result {
    padding-top: 10px;
    font-size: 13px;
  }

  #bp-result > span:nth-child(2) {
    font-size: 1rem;
  }

  .bmr-tool {
    max-width: 700px;
    margin: 0 auto 15px;
    background: #f5f5f5;
    border-radius: 2px;
  }

  .bmr-tool h3 {
    padding: 10px;
    background: #059;
    color: #fefefe;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 2px 2px 0 0;
  }

  .bmr-tool #bmr-calculator-form {
    padding: 15px;
  }

  .input-group {
    display: flex;
    width: 100%;
    margin-bottom: 0.8888888889rem;
    align-items: stretch;
  }
  .input-group-field {
    border-radius: 0;
    flex: 1 1 0px;
    min-width: 0;
  }
  #input-height-ft,
  #input-height-in,
  #input-height-cm,
  .bmr-tool #bmr-calculator-form .input-group > :first-child {
    margin: 0 !important;
  }
  .input-group > :first-child,
  .input-group > :first-child.input-group-button > * {
    border-radius: 2px 0 0 2px;
  }
  .input-group-label {
    padding: 0 1rem;
    border: 1px solid #e6e7e8;
    background: #f6f6f6;
    color: #0a0a0a;
    text-align: center;
    white-space: nowrap;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
  }
  .input-group > :last-child,
  .input-group > :last-child.input-group-button > * {
    border-radius: 0 2px 2px 0;
  }

  .input-group-label:last-child {
    border-left: 0;
  }
  .bmr-tool .left-group {
    padding-right: 8px;
  }
  @media screen and (min-width: 37.5em) {
    .node-stats-block {
      padding: 30px;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    .h5,
    h5 {
      font-size: 1.2222222222rem;
    }
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }
  .text-right {
    text-align: right;
  }
  .cell {
    flex: 0 0 auto;

    min-height: 0;
    min-width: 0;
    width: 100%;
    flex-basis: auto;
  }
  .small-3 {
    width: 25%;
  }

  .grid-x > .small-3 {
    width: 25%;
  }
  .small-4 {
    width: 33.3333333333%;
  }
  .grid-x > .small-4 {
    width: 33.3333333333%;
  }

  .small-6 {
    width: 50%;
  }

  .grid-x > .small-6 {
    width: 50%;
  }
  .grid-x > .small-12 {
    width: 100%;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 0.625rem);
  }

  .grid-margin-x > .small-12 {
    width: calc(100% - 0.625rem);
  }

  .text-center {
    text-align: center;
  }

  .grid-margin-y {
    margin-top: -0.5555555556rem;
    margin-bottom: -0.5555555556rem;
  }

  .grid-margin-y > .cell {
    height: calc(100% - 1.1111111111rem);
    margin-top: 0.5555555556rem;
    margin-bottom: 0.5555555556rem;
  }
  .grid-margin-y:not(.grid-y) > .cell {
    height: auto;
  }

  .small-up-2 > .cell {
    width: 50%;
  }
  .grid-margin-x.small-up-2 > .cell {
    width: calc(50% - 1.1111111111rem);
  }

  .cell.shrink {
    flex: 0 0 auto;
  }

  .grid-x > .auto,
  .grid-x > .shrink {
    width: auto;
  }
  .cell.auto {
    flex: 1 1 0px;
  }

  @media print, screen and (min-width: 37.5em) {
    .grid-x > .bp600-4 {
      width: 33.3333333333%;
    }
    .grid-margin-x > .bp600-4 {
      width: calc(33.3333333333% - 0.625rem);
    }

    .bp600-up-3 > .cell {
      width: 33.3333333333%;
    }
    .grid-margin-x.bp600-up-3 > .cell {
      width: calc(33.3333333333% - 1.1111111111rem);
    }

    .bp600-6 {
      width: 50%;
    }

    .grid-x > .bp600-6 {
      width: 50%;
    }

    .grid-margin-x > .bp600-6 {
      width: calc(50% - 1.1111111111rem);
    }

    .grid-margin-y > .bp600-6 {
      height: calc(50% - 1.1111111111rem);
    }

    .bp600-8 {
      width: 66.6666666667%;
    }

    .grid-x > .bp600-8 {
      width: 66.6666666667%;
    }
    .grid-margin-x > .bp600-8 {
      width: calc(66.6666666667% - 1.1111111111rem);
    }

    .grid-x > .bp600-shrink {
      width: auto;
    }

    .grid-x > .bp600-auto {
      flex: 1 1 0px;
      width: auto;
    }
    .bp600-order-1 {
      order: 1;
    }
    .bp600-order-2 {
      order: 2;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    .grid-margin-x > .cell {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .small-12 {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .bp600-4 {
      width: calc(33.3333333333% - 0.9375rem);
    }

    .grid-margin-y {
      margin-top: -0.8333333333rem;
      margin-bottom: -0.8333333333rem;
    }

    .grid-margin-y > .cell {
      height: calc(100% - 1.6666666667rem);
      margin-top: 0.8333333333rem;
      margin-bottom: 0.8333333333rem;
    }

    .grid-margin-x.small-up-2 > .cell {
      width: calc(50% - 1.6666666667rem);
    }

    .medium-up-2 > .cell {
      width: 50%;
    }
    .grid-margin-x.medium-up-2 > .cell {
      width: calc(50% - 1.6666666667rem);
    }

    .grid-margin-x.medium-up-4 > .cell {
      width: calc(25% - 1.6666666667rem);
    }

    .grid-margin-x > .bp600-6 {
      width: calc(50% - 1.6666666667rem);
    }

    .grid-margin-y > .bp600-6 {
      height: calc(50% - 1.6666666667rem);
    }

    .grid-margin-x > .bp600-8 {
      width: calc(66.6666666667% - 1.6666666667rem);
    }
  }

  @media print, screen and (min-width: 60em) {
    .grid-x > .bp960-3 {
      width: 25%;
    }

    .grid-margin-x > .bp960-3 {
      width: calc(25% - 0.9375rem);
    }

    .bp960-4 {
      width: 33.3333333333%;
    }
    .grid-x > .bp960-4 {
      width: 33.3333333333%;
    }
    .grid-margin-x > .bp960-4 {
      width: calc(33.3333333333% - 1.6666666667rem);
    }
    .bp960-6 {
      width: 50%;
    }

    .grid-x > .bp960-6 {
      width: 50%;
    }
    .grid-margin-x > .bp960-6 {
      width: calc(50% - 1.6666666667rem);
    }
  }

  @media print, screen and (min-width: 64em) {
    .large-4 {
      width: 33.3333333333%;
    }

    .grid-x > .large-4 {
      width: 33.3333333333%;
    }
    .grid-margin-x > .large-4 {
      width: calc(33.3333333333% - 1.6666666667rem);
    }
  }

  @media screen and (min-width: 80em) {
    .grid-x > .bp1280-3 {
      width: 25%;
    }

    .grid-margin-x > .bp1280-3 {
      width: calc(25% - 0.9375rem);
    }
  }
`;
