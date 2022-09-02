import styled from "styled-components";

export const MainWrapper = styled.div`
  ul.messages {
    list-style: none;
    max-width: 1300px;
    margin: 0 auto 1em;
    border-radius: 2px;
    text-align: center;
    padding-left: 0;
  }
  ul {
    list-style: none;
    padding: 0;
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

  ul.messages .blue span,
  ul.messages .error span,
  ul.messages .error-msg span,
  ul.messages .notice span,
  ul.messages .notice-msg span,
  ul.messages .success-msg span {
    display: block;
    margin-left: 0.5em;
    padding: 0.6em 1em;
  }
  ul.messages .error span,
  ul.messages .error-msg span,
  ul.messages .notice span,
  ul.messages .notice-msg span {
    color: #d41313;
  }

  @media (min-width: 400px) {
    ul.messages .blue,
    ul.messages .error,
    ul.messages .error-msg,
    ul.messages .notice,
    ul.messages .notice-msg,
    ul.messages .success-msg {
      font-size: 13px;
    }
  }
  @media (min-width: 840px) {
    margin-left: 1.17em;
  }

  @media (min-width: 1082px) {
    ul.messages {
      padding: 0;
    }
  }
`;
