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

  .option-wrap {
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
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

  .option-wrap .option {
    display: inline-block;
    font-size: 13px;
    border-radius: 2px;
  }
  .option-wrap .option.active {
    background: #059;
    padding: 0 12px;
  }
  .option-wrap .option .inner-wrap {
    color: #059;
    cursor: pointer;
  }

  .option-wrap .option.active .inner-wrap {
    color: #fff;
    font-family: nimbusnovus-medium, sans-serif;
  }

  .option-toggle {
    flex: 0 0 84px;
    border-left: 1px solid #ddd;
    padding: 0 15px;
    margin-left: 10px;
    color: #fff;
    cursor: pointer;
  }

  .option-toggle .inner {
    width: 75px;
  }

  .option-toggle .inner a {
    display: block;
    text-align: center;
  }

  .option-toggle svg {
    width: 18px;
    height: 18px;
    margin-left: 5px;
    margin-bottom: -5px;
  }
  @media (min-width: 480px) {
    font-size: 16px;
    .option-wrap {
      display: inline-block;
    }
    .option-wrap .option {
      padding: 0 20px;
    }

    .option-toggle {
      flex: 0 0 auto;
    }
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
