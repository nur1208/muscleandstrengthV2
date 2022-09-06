import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fff;

  .grey-stripe,
  .cell {
    margin-bottom: 10px;
  }
  .grey-stripe {
    position: relative;
    width: 100%;
    max-width: 1300px;
    text-transform: uppercase;
    padding: 15px 0 10px 15px;
    border-bottom: 1px solid #eee;
    color: #303030;
    margin: 0;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;
  }

  .grey-stripe {
    position: relative;
    width: 100%;
    max-width: 1300px;
    text-transform: uppercase;
    padding: 15px 0 10px 15px;
  }

  h2 {
    font-size: 16px !important;
  }
  .grey-stripe {
    border-bottom: 1px solid #eee;
    color: #303030;
    margin: 0;
    font-size: 16px !important;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;
  }

  .grid-x {
    align-items: flex-start;
  }

  .grid-x {
    padding: 10px;
    background-color: #fff;
  }

  .cell {
    padding: 15px;
    background: #f5f5f5;
    border-radius: 3px;
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }

  .title {
    display: inline;
    font-size: 16px;
  }

  .caret-right {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    margin-left: 8px;
    margin-top: 4px;
    float: right;
  }

  .caret-right:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 5px solid transparent;
  }

  .caret-right:before {
    border-left-color: #059;
  }

  .caret-right:after {
    content: "";
    position: absolute;
    border: 3px solid transparent;
  }

  .caret-right:after {
    left: 0;
    top: 2px;
    border-left-color: #fff;
  }
  @media print, screen and (min-width: 52.5em) {
    .cell {
      margin-left: 0.46875rem;
      margin-right: 0.46875rem;
    }
  }
  @media (min-width: 600px) {
    &,
    .cell {
      padding: 10px 15px;
    }
  }
  @media (min-width: 840px) {
    .grey-stripe,
    .cell {
      margin-bottom: 15px;
    }
  }
`;
