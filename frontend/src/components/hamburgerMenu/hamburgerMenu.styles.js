import styled from "styled-components";

export const MainWrapper = styled.div`
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
`;
