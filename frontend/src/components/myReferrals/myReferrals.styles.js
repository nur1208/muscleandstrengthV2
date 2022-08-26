import styled from "styled-components";

export const MainWrapper = styled.div`
  .margBot20 {
    margin-bottom: 20px;
  }
  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }
  img {
    border-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .margBot10 {
    margin-bottom: 10px;
  }

  p {
    margin-top: 0;
  }

  .block-buster {
    clear: both;
    width: 100%;
    float: left;
    display: block;
    min-height: 1px;
  }

  .bottomBorder {
    border-bottom: 0.2em solid #eee;
    padding-bottom: 0.05em;
    margin: 0.4em 0;
    clear: both;
  }

  .margTop20 {
    margin-top: 20px;
  }

  .h4 {
    font-size: 1.3em;
    line-height: 1.3em;

    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  input[readonly] {
    background-color: #eee;
    cursor: not-allowed;
  }
  .urlcode-input-box input {
    color: #059;
    display: block;
    padding: 0 !important;
    margin: 5px 0 !important;
    line-height: 2em;
    letter-spacing: 0.5px;
    height: 2em;
  }

  .urlcode_group .urlcode_comment {
    margin: 5px 0 !important;
    line-height: 14px;
  }

  @media (min-width: 600px) {
    .border-section {
      border: 1px solid #ddd;
      padding-bottom: 0.7em;
    }

    .border-section .inner {
      padding: 0 0.8em;
    }
  }
`;
