import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 32px;
  background-color: #fff;

  display: none;

  .text-wrap {
    font-size: 13px;
    margin-left: 14px;
  }

  .store-control {
    display: none;
  }

  .catalog-category-view ul {
    list-style: none;
    padding: 0;
  }

  .store-control ul {
    display: flex;
  }

  .store-control li {
    padding: 0 12px;
  }

  .store-control__link {
    display: block;
    color: #fff;
    font-size: 16px;
  }

  .store-control__link--current {
    color: #059;
    background-color: #fff;
    font-family: nimbusnovus-medium, sans-serif;
    border-radius: 2px;
  }

  .store-control__link {
    color: #059;
    padding: 5px 12px;
    font-size: 13px;
  }

  .toggle-switch {
    line-height: 23px;
  }

  .store-control .toggle-switch a {
    display: inline-block;
    border-radius: 2em;
    position: relative;
    width: 34px;
    text-transform: uppercase;
    height: 10px;
    background-color: #ddd;
    margin: 0 auto;
    font-size: 13px;
  }

  .store-control .toggle-switch a .switch-node {
    position: absolute;
    height: 1.2em;
    transform: translate(0, -20%);
    width: 1.2em;
    border-radius: 5em;
    z-index: 0;
    transition: 0.2s;
    background-color: #059;
  }

  .toggle-switch a.products .switch-node {
    left: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 840px) {
    margin-bottom: 15px;

    display: flex;

    .store-control {
      display: block;
    }

    .store-control__link {
      font-size: 13px;
    }

    .store-control__link--current {
      color: #fff;
      background-color: #059;
    }

    .store-control .toggle-switch {
      display: none;
    }
  } ;
`;
