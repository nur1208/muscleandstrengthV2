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

  @media screen and (min-width: 46.25em) {
  }

  @media screen and (min-width: 64em) {
    padding: 10px 0 0;
  }
  @media screen and (min-width: 75em) {
    padding: 5px 0;
  }
`;
