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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: inherit;
  }
  li {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    display: flex;
  }

  li .row-label {
    display: inline-block;
    padding-right: 15px;
    color: #059;
    width: 40%;
  }

  li .field-type-list-text {
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
`;
