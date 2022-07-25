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
`;

export default GlobalStyle;
