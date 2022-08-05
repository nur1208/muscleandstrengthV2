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

  .font-s-small {
    font-size: 13px;
  }

  .login-wrapper .customer-login .forgot-pass {
    margin-top: 10px;
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
