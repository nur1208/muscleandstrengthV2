import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-bottom: 25px;
  .cell {
    margin-left: 0.5555555556rem;
    margin-right: 0.5555555556rem;
  }

  .cell {
    text-align: center;
    font-family: roboto-medium, sans-serif;
  }

  a {
    background-color: transparent;
    line-height: inherit;
    color: #059;
    text-decoration: none;
  }

  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }

  a img {
    border: 0;
  }

  img {
    border-radius: 2px;
    margin-bottom: 10px;
  }

  @media print, screen and (min-width: 52.5em) {
    .cell {
      margin-left: 0.8333333333rem;
      margin-right: 0.8333333333rem;
    }
  }
`;
