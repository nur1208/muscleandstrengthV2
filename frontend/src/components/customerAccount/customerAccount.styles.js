import styled from "styled-components";

export const MainWrapper = styled.div`
  .user-account-link {
    display: block;
    position: relative;
  }
  .user-account-link:hover {
    background-color: #fff;
  }

  .user-account-link:hover label {
    color: #059;
  }
  .user-account-link:hover .caret-down:before {
    border-top-color: #059;
  }
  .user-login-link {
    display: block;
  }
  .store-action {
    position: relative;
    text-align: center;
    /* padding: 6px; */
  }
  .store-action.account {
    cursor: pointer;
  }

  .store-action.account svg {
    width: 2em;
    height: 2em;
    line-height: 0;
  }

  .store-action .text {
    color: #fff;
    font-size: 13px;
    text-align: center;
    display: block;
    line-height: 1;
    margin-top: -3px;
  }

  svg {
    width: 32px;
    height: 32px;
  }

  .user-account-link:hover .store-dropdown {
    display: block;
  }

  .store-dropdown {
    display: none;
    position: absolute;
    right: 0;
    top: 40px;
    background-color: #fff;
    width: 160px;
    z-index: 2;
    box-shadow: -1px 1px 1px rgb(0 0 0 / 20%);
    padding: 15px;
  }

  .user-account .welcome {
    font-size: 18px;
    font-family: nimbusnovus-bold, sans-serif;
    color: #059;
    text-transform: capitalize;
    text-align: left;
  }

  .user-account .welcome {
    margin-bottom: 10px;
  }

  .account-menu {
    list-style-type: none;
  }

  .account-menu li {
    border-bottom: 1px solid #eee;
  }

  .account-menu li a {
    text-align: left;
    padding: 10px 0;
    max-width: inherit;
    width: 90%;
    font-size: 13px;
    display: block;
    color: #059;
  }

  .account-menu li.logout a {
    color: #d41313;
    padding-bottom: 0;
  }
  @media (min-width: 840px) {
    .caret-down {
      position: relative;
      display: inline-block;
      width: 8px;
      height: 8px;
      cursor: pointer;
      margin: 2px 0 0;
      vertical-align: bottom;
    }

    .caret-down:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 4px solid transparent;
    }

    .caret-down:before {
      border-top-color: #fff;
    }
    .caret-down:after {
      content: "";
      position: absolute;
      border: 2px solid transparent;
      left: 2px;
      top: 0;
      border-top-color: #fff;
    }

    .store-dropdown {
      top: 55px;
      width: 160px;
    }

    .store-action.account .user-account .welcome {
      margin-bottom: 15px;
    }
  }
`;
