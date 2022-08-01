import styled from "styled-components";

export const MainWrapper = styled.div`
  h2.taxonomy-heading {
    text-align: center;
    margin-bottom: 25px;
    font-family: opensans-heavy;
    color: #059;
    text-transform: uppercase;
  }

  .base-content-grid {
    margin-bottom: 25px;
  }
  .base-content-grid {
    padding-bottom: 25px;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .grid-margin-x {
    margin-left: -0.5555555556rem;
    margin-right: -0.5555555556rem;
  }

  .grid-margin-y {
    margin-top: -0.5555555556rem;
    margin-bottom: -0.5555555556rem;
  }

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 1.1111111111rem);
    margin-left: 0.5555555556rem;
    margin-right: 0.5555555556rem;
  }

  .small-up-1 > .cell {
    width: 100%;
  }

  .grid-margin-y > .cell {
    height: calc(100% - 1.1111111111rem);
    margin-top: 0.5555555556rem;
    margin-bottom: 0.5555555556rem;
  }

  .base-content-grid .cell {
    position: relative;
    border-bottom: 5px solid #f5f5f5;
  }

  .grid-margin-x.small-up-1 > .cell {
    width: calc(100% - 1.1111111111rem);
  }
  .grid-margin-y:not(.grid-y) > .cell {
    height: auto;
  }

  @media screen and (min-width: 37.5em) {
    .base-content-grid .cell {
      position: relative;
      border-bottom: 0;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    .grid-margin-x {
      margin-left: -0.8333333333rem;
      margin-right: -0.8333333333rem;
    }

    .grid-margin-y {
      margin-top: -0.8333333333rem;
      margin-bottom: -0.8333333333rem;
    }

    .grid-margin-x > .cell {
      width: calc(100% - 1.6666666667rem);
      margin-left: 0.8333333333rem;
      margin-right: 0.8333333333rem;
    }

    .medium-up-3 > .cell {
      width: 33.3333333333%;
    }

    .grid-margin-y > .cell {
      height: calc(100% - 1.6666666667rem);
      margin-top: 0.8333333333rem;
      margin-bottom: 0.8333333333rem;
    }

    .grid-margin-x.small-up-1 > .cell {
      width: calc(100% - 1.6666666667rem);
    }

    .grid-margin-x.medium-up-3 > .cell {
      width: calc(33.3333333333% - 1.6666666667rem);
    }
  }
`;
