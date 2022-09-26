import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  background: #f5f5f5;
  color: #aaa;
  font-family: opensans-bold, sans-serif;

  .inner {
    max-width: 800px;
    padding: 15px 0;
    margin: 0 auto;
  }

  .cell {
    font-size: 30px;
    line-height: 1.2;
  }
  span {
    display: block;
    font-family: roboto-bold, sans-serif;
    font-size: 12px;
    text-transform: uppercase;
  }
  @media print, screen and (min-width: 37.5em) {
    span {
      font-size: 18px;
    }
  } ;
`;
