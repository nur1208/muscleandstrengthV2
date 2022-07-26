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
  & label {
    display: none;
    color: #fefefe;
    font-family: roboto-medium, sans-serif;
    font-size: 13px;
    line-height: 1.2;
    cursor: pointer;
  }
  & .country-switcher {
    order: 2;
    width: 12%;
    cursor: pointer;
  }

  & .country-switcher .currency {
    display: block;
  }
  @media screen and (min-width: 46.25em) {
    & .cell {
      padding: 10px 0 0;
    }
    & .country-switcher {
      order: 4;
      width: 8%;
    }
  }

  @media screen and (min-width: 64em) {
    padding: 10px 0 0;
    & .country-switcher {
      order: 3;
      width: 8%;
      text-align: center;
    }
  }
  @media screen and (min-width: 75em) {
    padding: 5px 0;
    & .country-switcher {
      order: 4;
      width: 6%;
      padding-top: 33px;
    }
  }
`;
