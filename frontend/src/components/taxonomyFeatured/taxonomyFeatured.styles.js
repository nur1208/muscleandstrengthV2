import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-bottom: 25px;
  padding: 25px;
  background: #f5f5f5;
  border-top: 5px solid #059;
  border-radius: 2px;

  h2 {
    font-size: 22px;
    margin-bottom: 15px;
    text-transform: uppercase;
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
    margin-bottom: 15px;
  }

  h5 {
    color: #333;
  }

  p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }
  p {
    font-size: 16px;
  }

  .grid-x {
    gap: 15px;
  }
  @media print, screen and (min-width: 52.5em) {
    .grid-x {
      gap: 25px;
    }
  }
`;
