import styled from "styled-components";

export const MainWrapper = styled.header`
  width: 100%;
  padding: 8px 10px;
  background: #059;

  & .header-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }

  & .cell {
    padding: 5px 0;
  }

  & .hamburger-menu {
    order: 1;
    width: 12%;
  }

  & .hamburger-menu .hamburger-button {
    display: block;
  }

  & .hamburger-menu .hamburger-button .ingredient {
    display: block;
    height: 3px;
    margin-bottom: 5px;
    background: #fefefe;
    width: 70%;
    max-width: 2.5em;
  }

  & .hamburger-menu .hamburger-button .ingredient:first-child {
    position: relative;
    left: 0;
  }

  & .hamburger-menu .hamburger-button .ingredient:nth-child(3) {
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
    & .hamburger-menu {
      width: 6%;
    }
    & .cell {
      padding: 10px 0 0;
    }
  }

  @media screen and (min-width: 64em) {
    padding: 10px 0 0;

    & .hamburger-menu {
      display: none;
    }
  }
  @media screen and (min-width: 75em) {
    padding: 5px 0;
  }
`;
