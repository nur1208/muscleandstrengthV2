import styled from "styled-components";

export const MainWrapper = styled.div`
  flex: 0 0 auto;
  min-height: 0;
  min-width: 0;

  padding: 5px 0;

  order: 1;
  width: 12%;

  & .hamburger-button {
    display: block;
  }

  & .hamburger-button .ingredient {
    display: block;
    height: 3px;
    margin-bottom: 5px;
    background: #fefefe;
    width: 70%;
    max-width: 2.5em;
  }

  & .hamburger-button .ingredient:first-child {
    position: relative;
    left: 0;
  }

  & .hamburger-button .ingredient:nth-child(3) {
    position: relative;
    right: 0;
  }

  & label {
    display: none;
    color: #fefefe;
    font-family: roboto-medium, sans-serif;
    font-size: 13px;
    line-height: 1.2;
    cursor: pointer;
  }

  @media screen and (min-width: 46.25em) {
    width: 6%;

    padding: 10px 0 0;
  }

  @media screen and (min-width: 64em) {
    display: none;
  }
`;
