import styled from "styled-components";
import { Link } from "react-router-dom";
export const MainWrapper = styled(Link)`
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
