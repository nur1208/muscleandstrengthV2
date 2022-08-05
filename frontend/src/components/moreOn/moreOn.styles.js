import styled from "styled-components";

export const MainWrapper = styled.div`
  h2.blue-stripe {
    margin-bottom: 10px;
  }

  h2.blue-stripe {
    position: relative;
    width: 100%;
    max-width: 81.25rem;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 16px;
    background-color: #059;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .grid-margin-x {
    margin-left: -0.3125rem;
    margin-right: -0.3125rem;
  }

  .grid-x {
    margin-bottom: -10px;
  }

  .content .cell,
  .content section {
    background-color: #fff;
  }
  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }

  .grid-x > .small-12 {
    flex: 0 0 auto;
  }

  .grid-x > .small-12 {
    width: 100%;
  }
  .grid-margin-x > .cell {
    width: calc(100% - 0.625rem);
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }

  .grid-margin-x > .small-12 {
    width: calc(100% - 0.325rem);
  }

  .cell {
    background: #fff;
    margin-bottom: 10px;
  }

  .intrinsic-wrapper {
    position: relative;
  }

  .intrinsic-wrapper:before {
    content: "";
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 56.5891472868%;
  }

  .intrinsic-wrapper img {
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .info-block {
    padding: 12px;
  }

  a p {
    color: #303030;
    font-size: 16px;
  }
  @media (min-width: 840px) {
    .cell {
      margin-bottom: 15px;
    }
    .info-block {
      padding: 15px;
    }
  }
  @media print, screen and (min-width: 46.25em) {
    .grid-x > .bp740-6 {
      flex: 0 0 auto;
    }

    .grid-x > .bp740-6 {
      width: 50%;
    }

    .grid-margin-x > .bp740-6 {
      width: calc(50% - 0.625rem);
    }
  }

  @media screen and (min-width: 52.5em) {
    h2.blue-stripe {
      margin-bottom: 15px;
    }

    .grid-margin-x {
      margin-left: -0.46875rem;
      margin-right: -0.46875rem;
    }

    .grid-margin-x > .cell {
      width: calc(100% - 0.9375rem);
      margin-left: 0.46875rem;
      margin-right: 0.46875rem;
    }

    .grid-margin-x > .small-12 {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .bp740-6 {
      width: calc(50% - 0.9375rem);
    }
  }
  @media print, screen and (min-width: 64em) {
    .grid-x > .large-3 {
      flex: 0 0 auto;
    }

    .grid-x > .large-3 {
      width: 25%;
    }

    .grid-margin-x > .large-3 {
      width: calc(25% - 0.9375rem);
    }
  }
`;
