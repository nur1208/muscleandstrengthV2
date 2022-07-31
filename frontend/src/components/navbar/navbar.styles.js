import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
      transition: transform 10ms;
      height: 100%;
      width: 100%;
      position: fixed;
      transform: translate(90%);
  }
`;
export const MainWrapper = styled.div`
  .menu-sys {
    background-color: #059;
    list-style-type: none;
    padding: 0;
    margin: 0;
    float: left;
    -webkit-overflow-scrolling: touch;
    width: 90%;
    overflow-x: hidden;
    transform: translate(-100%);
    position: fixed;
    left: 0;
    display: block;
    top: 0;
    height: 100%;
    z-index: 99;
  }

  .menu-sys * {
    font-family: roboto-regular;
  }

  .menu-sys .base-item {
    float: left;
    clear: both;
    width: 100%;
    border-bottom: 1px solid #004780;
    line-height: normal;
  }

  .menu-sys .base-item .base-item-button {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    padding: 15px;
    color: #fefefe;
    cursor: pointer;
    margin: 0 2px;
    display: block;
    font-family: roboto-medium, sans-serif;
    font-size: 15px;
  }

  .menu-sys .base-item .base-item-button .icon {
    position: relative;
    top: -0.5em;
    z-index: 0;
    margin-right: 0.7em;
    float: left;
  }

  .menu-sys .base-item .base-item-button .caret {
    font-family: roboto-regular, sans-serif;
    float: right;
    color: #fefefe;
    font-size: 1.8em;
    position: relative;
    top: -0.3em;
  }

  .menu-sys .submenu {
    font-family: roboto-regular, sans-serif;
    top: -2px;
    right: -100%;
    position: fixed;
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    display: none;
    z-index: 99;
    background-color: #fefefe;
    overflow-x: hidden;
    box-sizing: content-box;
    font-size: 18px;
  }

  .menu-sys .submenu .nav-link {
    -webkit-tap-highlight-color: transparent;
    display: block;
    width: 100%;
    background-color: #059;
    font-family: roboto-medium, sans-serif;
    color: #fefefe;
    border: 0;
    text-align: left;
    cursor: pointer;
  }
  .menu-sys .submenu .view-all-link {
    padding: 15px;
    line-height: 45px;
    text-transform: uppercase;
    font-family: roboto-medium, sans-serif;
    font-size: 15px;
  }

  .menu-sys .submenu .view-all-link button {
    float: right;
  }

  .menu-sys .submenu .link-list {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    clear: both;
  }

  .menu-sys .submenu .link-list.link-list-submenu {
    overflow: visible;
  }

  .menu-sys .submenu .link-list .link-list-title {
    background: #eee;
    font-size: 13px;
    font-family: roboto-medium, sans-serif;
    padding: 15px;
    text-transform: uppercase;
  }

  .menu-sys .submenu .sub-submenu-button {
    -webkit-tap-highlight-color: transparent;
    padding: 0.8em 1em;
    display: block;
    color: #059;
    cursor: pointer;
  }

  .menu-sys .submenu .link-list li > a {
    -webkit-tap-highlight-color: transparent;
    color: #059;
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
  }

  .menu-sys .sub-submenu {
    right: -100%;
    top: -2px;
    position: fixed;
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    display: none;
    z-index: 99;
    background-color: #fefefe;
    overflow-x: hidden;
  }

  .menu-sys .submenu .sub-submenu-button .caret-right {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    margin-left: 8px;
    margin-top: 8px;
    float: right;
  }

  .menu-sys .open-submenu .base-item-button {
    display: none;
  }

  .menu-sys .open-submenu .submenu {
    right: 0;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    display: block;
    background-color: #fefefe;
    transition: 0.3s;
  }

  .menu-sys .submenu .sub-submenu-button .caret-right:after {
    content: "";
    position: absolute;
    border: 3px solid transparent;
  }

  .menu-sys .submenu .sub-submenu-button .caret-right:after {
    left: 0;
    top: 2px;
    border-left-color: #fff;
  }

  & .menu-sys .submenu .sub-submenu-button .caret-right:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 5px solid transparent;
  }

  & .menu-sys .submenu .sub-submenu-button .caret-right:before {
    border-left-color: #059;
  }

  .menu-sys .open-sub-submenu .sub-submenu {
    display: block;
    position: fixed;
    background: #fefefe;
    right: 0;
    transition: 0.3s;
  }

  .menu-sys .submenu .link-list.link-list-top-brands li {
    width: 50%;
    float: left;
    text-align: center;
  }
  .nav-link {
    padding: 0 20px;
    line-height: 60px;
    font-weight: 400;
    cursor: pointer;
  }

  .back-caret:before {
    content: "<";
    display: inline-block;
    margin-right: 16px;
  }

  @media screen and (min-width: 30em) {
    .menu-sys {
      width: 60%;
      transform: translate(-100%);
    }
  }

  @media screen and (min-width: 52.5em) {
    .menu-sys {
      width: 40%;
      transform: translate(-100%);
    }
  }

  @media screen and (min-width: 64em) {
    .menu-sys {
      background-color: transparent;
      width: auto;
      position: relative;
      transform: translate(0);
      overflow: visible;
      height: auto;
    }

    .menu-sys .base-item {
      clear: none;
      position: relative;
      width: auto;
      border-bottom: 0;
    }

    .menu-sys .base-item .base-item-button {
      display: inline-block;
      width: auto;
      border-bottom: 0;
      padding: 10px;
      font-size: 15px;
    }

    .menu-sys .base-item .base-item-button .caret,
    .menu-sys .base-item .base-item-button .icon {
      display: none;
    }

    .menu-sys .submenu {
      position: absolute;
      top: 100%;
      border: 1px solid #ddd;
      height: auto;
      left: initial;
      width: 330px;
      overflow: visible;
      font-size: 16px;
    }

    .menu-sys .submenu .nav-link {
      display: none;
    }

    .menu-sys .submenu .view-all-link {
      padding: 10px;
    }

    .menu-sys .submenu .link-list .link-list-title {
      padding: 10px;
    }
    .menu-sys .submenu .sub-submenu-button {
      padding: 0.3em 0.4em;
    }

    .menu-sys .submenu .link-list li > a {
      padding: 10px 20px;
    }

    .menu-sys .sub-submenu {
      position: absolute;
      border: 1px solid #ddd;
      overflow: visible;
      height: auto;
      left: initial;
      top: initial;
    }

    .menu-sys .open-submenu .base-item-button {
      display: block;
      background-color: #fefefe;
      color: #059;
      position: relative;
      z-index: 2;
      border-bottom: 1px solid #fefefe;
      margin-bottom: -2px;
    }

    .menu-sys .open-submenu .submenu {
      left: 2px;
      z-index: 1;
      overflow: visible;
    }

    .menu-sys .open-submenu .submenu .back-button {
      margin: 0;
    }

    .menu-sys .open-sub-submenu .sub-submenu-button,
    .menu-sys .open-sub-submenu.has-sub-submenu {
      background-color: #f5f5f5;
    }

    .menu-sys .open-sub-submenu .sub-submenu {
      position: absolute;
      top: -1px;
      right: initial;
      left: 100%;
    }
  }
`;
