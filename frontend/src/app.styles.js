import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fefefe;
    font-family: roboto-regular,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }
  *, ::after, ::before {
    box-sizing: inherit;
    }
    a {
        background-color: transparent;
        line-height: inherit;
        color: #059;
        text-decoration: none;
        cursor: pointer;
    }
    a img {
        border: 0;
    }
    img {
        border-style: none;
        display: inline-block;
        vertical-align: middle;
        max-width: 100%;
        height: auto;
        -ms-interpolation-mode: bicubic;
    }

  
    label {
    display: block;
    margin: 0;
    font-size: .7777777778rem;
    font-weight: 400;
    line-height: 1.8;
    color: #0a0a0a;
  }
`;

export default GlobalStyle;
