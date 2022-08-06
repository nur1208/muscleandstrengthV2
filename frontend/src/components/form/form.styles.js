import styled from "styled-components";

export const MainWrapper = styled.div`
  .login-wrapper {
    margin-bottom: 10px;
    max-width: 820px;
  }
  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }

  .cell {
    background-color: #fff;
  }

  .login-wrapper .customer-login {
    margin-bottom: 10px;
    padding: 15px;
  }

  .login-wrapper .new-customer-create-account {
    color: #fff;
    background: #059;
    padding: 25px;
  }

  ul.messages {
    list-style: none;
    max-width: 1300px;
    margin: 0 auto 1em;
    border-radius: 2px;
    text-align: center;
    padding-left: 0;
  }

  ul.messages .error-msg {
    display: block;
    list-style: none;
    text-align: left;
    text-decoration: none;
    line-height: 1.8em;
    font-size: 13px;
  }

  ul.messages .error-msg {
    background-color: #fef2f2;
    border: 1px solid #fac4c4;
    border-radius: 2px;
    margin: 0.2em 0;
  }

  ul.messages .error-msg ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul.messages .error-msg span {
    color: #d41313;
    display: block;
    margin-left: 0.5em;
    padding: 0.6em 1em;
  }

  .text-center {
    text-align: center;
  }

  h1.page-title {
    font-size: 25px;
    margin: 0 0 15px;
  }

  .row {
    max-width: 1060px;
    margin: 0 auto;
  }

  .row {
    clear: both;
    width: 100%;
    float: left;
    display: block;
    min-height: 1px;
  }
  form .button-wrap {
    clear: both;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .font-s-small,
  .text {
    font-size: 13px;
  }

  .login-wrapper .customer-login .forgot-pass {
    margin-top: 10px;
  }

  .create-account .member-benefits .benefit {
    margin-bottom: 25px;
  }
  .benefit {
    text-align: center;
  }
  .benefit svg {
    width: 50px;
    height: 50px;
  }
  .login-wrapper .new-customer-create-account h3 {
    margin-bottom: 15px;
    font-size: 20px;
  }

  .font-s-regular {
    font-size: 14px;
  }
  .login-wrapper .new-customer-create-account li,
  .login-wrapper .new-customer-create-account p {
    margin-bottom: 10px;
  }

  .login-wrapper .new-customer-create-account ul {
    list-style: disc;
    margin-left: 20px;
  }

  .login-wrapper .new-customer-create-account a {
    color: #fff;
    text-decoration: underline;
  }

  .login-wrapper .new-customer-create-account button {
    margin-top: 5px;
  }

  .filed-warper {
    position: relative;
  }

  .is-required:before {
    opacity: 1;
    content: "*";
    display: block;
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 16px;
    line-height: 1.75;
    color: #d41313;
    transition: 0.2s ease-in-out;
    padding: 6px 0 0;
    z-index: 1;
  }

  label {
    opacity: 0;
    visibility: hidden;
    display: block;
    position: absolute;
    top: -12px;
    left: 0;
    font-size: 12px;
    line-height: 1;
    color: #aaa;
    border-radius: 0 0 0 2px;
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  label {
    top: 1px;
    left: 10px;
    background-color: transparent;
    padding: 12px 3px;
  }

  label:before {
    content: "";
    display: block;
    position: absolute;
    top: 19px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #fff;
    z-index: -1;
  }

  label:after {
    clear: both;
  }

  select {
    box-sizing: border-box;
    width: 100%;
    height: 2.5625rem;
    margin: 0 0 0.625rem;
    padding: 0 0.9375rem 0 0.625rem;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.625;
    color: #303030;
    background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMzIgMjQiPjxwb2x5Z29uIHBvaW50cz0iMCwwIDMyLDAgMTYsMjQiIHN0eWxlPSJmaWxsOiByZ2IoMjIxLCAyMjEsIDIyMSkiPjwvcG9seWdvbj48L3N2Zz4=);
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    background-position: right center;
  }

  select:not([multiple]) {
    padding-top: 0;
    padding-bottom: 0;
  }

  select {
    width: 100%;
    outline: 0;
    font-size: 16px;
    background-color: #fff;
    transition: 0.2s ease-in-out;
    margin-bottom: 10px;
  }

  select {
    color: #aaa;
    position: relative;
    cursor: pointer;
    -webkit-appearance: none;
  }
  select {
    height: 3rem;
    line-height: 3rem;
  }

  select option {
    color: #303030;
  }

  option[value=""][disabled] {
    display: none;
  }
  @media (min-width: 400px) {
    ul.messages .error-msg {
      font-size: 13px;
    }
  }
  @media (min-width: 600px) {
    .login-wrapper {
      margin: 30px;
    }

    .login-wrapper .customer-login {
      padding: 50px 80px;
      margin-bottom: 0;
    }

    select {
      height: 2.625rem;
      line-height: 2.625rem;
    }
  }

  @media print, screen and (min-width: 46.25em) {
    .grid-x > .bp740-4,
    .grid-x > .bp740-8 {
      flex: 0 0 auto;
    }

    .grid-x > .bp740-8 {
      width: 66.6666666667%;
    }

    .grid-x > .bp740-4 {
      width: 33.3333333333%;
    }
  }

  @media (min-width: 740px) {
    .login-wrapper {
      margin: 10px;
    }
  }

  @media (min-width: 840px) {
    .login-wrapper {
      margin: 30px auto;
    }
  }

  @media (min-width: 1082px) {
    ul.messages {
      padding: 0;
    }
  }
`;
