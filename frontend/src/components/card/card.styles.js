import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;

  a {
    display: block;
    margin: 0;
    padding: 0;
    line-height: 11px;
    text-align: center;
  }

  .counter {
    position: absolute;
    top: 0;
    left: 50%;
    padding: 4px 6px;
    -webkit-font-smoothing: auto;
    background-color: #059;
    color: #fefefe;
    line-height: 11px;
    border: 1px solid #fefefe;
    text-align: center;
    font-size: 11px;
    border-radius: 80px;
  }

  svg {
    width: 32px;
    height: 32px;
    margin: 10px 0 0;
  }
`;
