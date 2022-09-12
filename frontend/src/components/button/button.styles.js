import styled from "styled-components";

export const MainWrapper = styled.button`
  background-color: #fefefe;
  background-image: linear-gradient(white, #f1f1f1);
  color: #3c3c3c;
  text-shadow: 1px 1px 0 #f1f1f1;
  border: 1px solid #f4f4f4;
  padding: 0 20px;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  line-height: 40px;
  font-family: roboto, sans-serif;
  font-weight: 400;
  width: auto;
  white-space: nowrap;

  /* .css-loader-block {
    position: absolute;
    left: 0;
  } */

  @keyframes load8 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* 
  .css-loader-block {
    display: none;
  } */
  .css-loader-block {
    width: 22px;
    height: 22px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 38%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 10;
  }

  .css-loader {
    box-sizing: content-box;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-left-color: #fff;
    transform: translateZ(0);
    animation: 1.1s linear infinite load8;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .svg-wrap {
    animation: 2s linear infinite loading;
  }
  .svg-wrap {
    display: inline-block;
    line-height: 1em;
  }

  ${({ isBlue, loading }) =>
    loading && isBlue
      ? ``
      : `.css-loader {

      border-left-color:#059
    }`}
  ${({ isBlue, isLoadingBlue }) =>
    (isBlue || isLoadingBlue) &&
    `
    background-color: #059;
    background-image: linear-gradient(#0063b3,#004780);
    color: #fefefe;
    text-shadow: 1px 1px 0 #004780;
    border: 1px solid #004a85;
    &:hover{
      background-color: #004780;
      background-image: linear-gradient(#004175,#004780);
      color: #e6e6e6;
    }
  `}

  ${({ isLarge }) =>
    isLarge &&
    `
    font-size: 24px;
    padding: 0 20px;
    height: 54px;
    line-height: 54px;


    @media screen and (min-width: 52.5em){
        padding: 0 30px;
        height: 60px;
        line-height: 60px;
    }
  `}

    ${({ isSmall }) =>
    isSmall &&
    `
    padding: 0 16px;
    height: 39px;
    line-height: 39px;
    font-size: 13px;
    
    @media (min-width: 600px){
      padding: 0 15px;
      height: 35px;
      line-height: 35px;
    }
  `}
  ${({ isExpanded }) =>
    isExpanded &&
    `
    width: 100%;
  `}


  ${({ isEllipsis }) =>
    isEllipsis &&
    `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}



  ${({ isLightBlue }) =>
    isLightBlue &&
    `
    background-color: #0687e6;
    background-image: linear-gradient(#0d95f9,#0578cd);
    color: #fff;
    text-shadow: 1px 1px 0 #0578cd;
    border: 1px solid #057bd2
  `}


${({ isGreen }) =>
    isGreen &&
    `
    background-color: #079c3a;
    background-image: linear-gradient(#08b443, #068431);
    color: #fff;
    text-shadow: 1px 1px 0 #068431;
    border: 1px solid #068833;

  `}

${({ isDynxs }) =>
    isDynxs &&
    `
    font-size: 11px;
    line-height: 35px;
    padding: 0 16px;

    @media (min-width: 600px){
      padding: 0 12px;
      line-height: 30px;
    }
  `}


  ${({ isDisabled }) =>
    isDisabled &&
    `
    background-color: #f2f2f2;
    color: #aaa;
    background-image: none;
    cursor: inherit;
  `}
`;
