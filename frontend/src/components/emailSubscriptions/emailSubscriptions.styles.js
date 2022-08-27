import styled from "styled-components";

export const MainWrapper = styled.div`
  .basic-form-wrapper,
  .basic-wrapper {
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 2em;
    overflow: hidden;
    margin-bottom: 2em;

    margin-bottom: 3em;
  }

  input {
    clear: none;
  }

  .row {
    clear: both;
    width: 100%;
    float: left;
    display: block;
    min-height: 1px;
  }

  .row {
    max-width: 1060px;
    margin: 0 auto;
  }

  .row {
    padding: 0.8em 0;
    border-bottom: 1px solid #ddd;
  }

  .align-left,
  .left,
  .text-left {
    text-align: left;
  }
  .left {
    float: left;
  }
  .form label,
  form label {
    text-align: left;
    font-size: 13px;
    float: left;
    margin-bottom: 10px;
    line-height: 1.1;
  }
  label {
    display: block;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.8;
    color: #303030;
  }

  label {
    color: #000;
    font-size: 18px;
    cursor: pointer;
  }

  form label:after,
  form label:before {
    content: "";
    display: table;
  }

  form label:after {
    clear: both;
  }

  input[type="checkbox"],
  input[type="radio"] {
    float: left;
    width: 20px;
    margin: 0 5px 0 0;
    padding: 0;
    border-radius: 0;
  }

  .description {
    font-size: 0.7em;
    font-style: italic;
    color: #aaa;
  }

  .description {
    clear: both;
    font-size: 16px;
  }

  .button-wrap {
    padding: 0.8em 0;
    clear: both;
  }
`;
