import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 20px;

  .topFiftyButton {
    margin-bottom: 0.5em;
    text-align: center;
  }

  .topFiftyButton .h4 {
    font-size: 16px;
  }

  img {
    border-style: none;
  }

  .clearfix:after {
    content: " ";
    font-size: 0;
    content: " ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .clearfix {
    display: block;
  }

  .byCategory {
    overflow: hidden;
    clear: both;
    background-color: #eee;
    padding: 0.5em 0;
  }
  .byCategory {
    background-color: transparent;
    padding: 0;
    display: block;
  }

  .h4 {
    font-size: 1.1em;
  }

  .byCategory .h4,
  .byCategory h4 {
    font-size: 16px;
    text-align: center;
  }

  .byCategory .wrap {
    font-size: 00.8em;
    line-height: 2em;
    text-align: center;
  }

  .byCategory .wrap {
    font-size: 11px;
    line-height: 2em;
  }

  .byCategory .wrap a {
    color: #059;
    background-color: #fff;
    margin: 0.4em;
    padding: 0.3em 1.5em;
    white-space: nowrap;
    line-height: 2.5em;
  }
  .byCategory .wrap a {
    margin: 0.2em;
    padding: 0 0.9em;
  }
  @media (min-width: 400px) {
    .byCategory .wrap .more,
    .byCategory .wrap a {
      margin: 0.3em 0.2em;
      padding: 0 0.9em;
    }
  }
  /* @media (min-width: 800px) {
    .byCategory,
    article table .table-scroll {
      display: none;
    }
  } */

  @media (min-width: 1082px) {
    .byCategory .wrap .more,
    .byCategory .wrap a {
      width: 45%;
      margin: 1%;
      padding: 0 1%;
      color: #059;
    }

    .byCategory .wrap a:nth-child(odd) {
      float: left;
    }
    .byCategory .wrap a:nth-child(even) {
      float: right;
    }
  }
`;
