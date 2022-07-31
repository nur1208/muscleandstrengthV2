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

  ${({ isBlue }) =>
    isBlue &&
    `
    background-color: #059;
    background-image: linear-gradient(#0063b3,#004780);
    color: #fefefe;
    text-shadow: 1px 1px 0 #004780;
    border: 1px solid #004a85;
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
`;
