import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 0.7em;

  .section-title {
    font-family: nimbusnovus-medium, sans-serif;
    color: #fff;
    font-size: 16px;
    background-color: #059;
    text-align: center;
    padding: 8px 15px;
    text-transform: uppercase;
    position: relative;
  }

  .section-inner-wrap {
    padding: 15px;
  }

  form {
    margin-bottom: 0.8em;
  }
  form ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul {
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
    list-style: none;
  }

  select {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  select {
    text-transform: none;
  }

  select {
    width: 100%;
    padding: 12px 8px 11px 10px;
    height: 42px;
    display: block;
    line-height: 1.1;
    clear: left;
    color: #303030;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 2px !important;
    background: #fff;
  }

  select {
    -webkit-appearance: menuList;
    appearance: menuList;
  }

  select option {
    color: #303030;
  }

  .quickLinks {
    text-align: center;
    line-height: 140%;
    font-size: 12px;
  }
`;
