import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: ${({ bgc }) => (bgc ? bgc : "#f5f5f5")};

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px 0;
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

  .small-2 {
    width: 16.6666666667%;
  }

  .text-center {
    text-align: center;
  }

  .grid-x > .small-12,
  .grid-x > .small-2,
  .grid-x > .small-3,
  .grid-x > .small-4,
  .grid-x > .small-6 {
    flex-basis: auto;
  }

  .grid-x > .small-12,
  .grid-x > .small-2,
  .grid-x > .small-3,
  .grid-x > .small-4,
  .grid-x > .small-6 {
    flex: 0 0 auto;
  }

  .grid-x > .small-2 {
    width: 16.6666666667%;
  }

  .in-page-nav .cell {
    text-align: center;
  }

  a {
    color: #aaa;
  }

  .cell a {
    display: block;
    padding: 5px;
    font-size: 13px;
    font-family: roboto-medium, sans-serif;
    line-height: 1.2;
  }

  svg {
    display: block;
    width: 35px;
    height: 35px;
    margin: 0 auto;
  }
  @media screen and (min-width: 37.5em) {
    padding: 0;
    margin-bottom: 25px;
    .inner {
      padding: 10px 0;
    }

    .bp600-2 {
      width: 16.6666666667%;
    }
    .grid-x > .bp600-2,
    .grid-x > .bp600-4,
    .grid-x > .bp600-6,
    .grid-x > .bp600-8,
    .grid-x > .bp600-shrink {
      flex-basis: auto;
    }

    .grid-x > .bp600-2,
    .grid-x > .bp600-4,
    .grid-x > .bp600-6,
    .grid-x > .bp600-8,
    .grid-x > .bp600-shrink {
      flex: 0 0 auto;
    }

    .grid-x > .bp600-2 {
      width: 16.6666666667%;
    }
    .cell a {
      width: auto;
      height: auto;
      border-radius: 2px;
      font-size: 18px;
    }

    svg {
      width: 45px;
      height: 45px;
    }
  }
`;
