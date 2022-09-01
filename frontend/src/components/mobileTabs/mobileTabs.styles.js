import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-bottom: 10px;
  background-color: #fff;

  .store-control {
    /* display: none; */
    display: block;
    padding: 12px;
  }

  ul {
    justify-content: center;
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0 6px;
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
    padding: 0 12px;
    font-size: 13px;
  }

  .store-control__link {
    background-color: transparent;
    font-size: 18px;
    text-align: center;
  }

  .store-control__link--current {
    color: #059;
    background-color: transparent;
    font-weight: 700;
  }

  .toggle-switch {
    line-height: 23px;
  }

  .toggle-switch a {
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

  a .switch-node {
    position: absolute;
    height: 1.2em;
    transform: translate(0, -20%);
    width: 1.2em;
    border-radius: 5em;
    z-index: 0;
    transition: 0.2s;
    background-color: #059;
  }

  a.products .switch-node {
    left: 0;
  }
  @media (min-width: 400px) {
    li {
      padding: 0 6px;
    }
  }
  @media (min-width: 840px) {
    margin-bottom: 15px;
    display: none;
    .store-control {
      padding: 15px;
      display: block;
    }

    .store-control__link {
      font-size: 13px;
    }

    .store-control__link--current {
      color: #fff;
      background-color: #059;
    }

    .toggle-switch {
      display: none;
    }
  }
`;
