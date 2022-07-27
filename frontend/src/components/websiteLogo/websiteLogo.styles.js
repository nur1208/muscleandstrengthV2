import styled from "styled-components";

export const MainWrapper = styled.a`
  .visually-hidden {
    display: none;
  }

  svg {
    width: 70px;
    height: 40px;
  }
  @media screen and (min-width: 64em) {
    svg {
      width: 100px;
      height: 60px;
    }
  }

  @media screen and (min-width: 75em) {
    svg {
      width: 110px;
      height: 65px;
    }
  }
`;
