import styled from "styled-components";

export const MainWrapper = styled.div`
  .base-content-grid {
    padding-bottom: 25px;
  }

  .css-loader-container .css-loader-block,
  button .css-loader-block {
    width: 32px;
    height: 32px;
    left: -32px;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    position: fixed;
    z-index: 10;
  }

  .css-loader-container:not(.animating) .css-loader-block,
  button:not(.animating) .css-loader-block {
    display: none;
  }

  @keyframes load8 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .css-loader-container .css-loader-block .ajax-loading,
  button .css-loader-block .ajax-loading {
    box-sizing: content-box;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border: 4px solid rgba(0, 142, 255, 0.3);
    border-left-color: #059;
    transform: translateZ(0);
    animation: 1.1s linear infinite load8;
  }

  .grid-x {
    /* gap: 20px; */
    justify-content: space-between;
  }

  @media screen and (min-width: 37.5em) {
    .cell {
      position: relative;
      border-bottom: 0;
    }
  }
`;
