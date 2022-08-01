import styled from "styled-components";

export const MainWrapper = styled.div`
  color: #fefefe;
  background: #0687e6;

  .footer-email-signup--inner {
    max-width: 66.6666666667rem;
    margin: 0 auto;
    padding: 15px;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .grid-margin-x {
    margin-left: -0.5555555556rem;
    margin-right: -0.5555555556rem;
  }

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }
  .small-12 {
    width: 100%;
  }

  .grid-x > .small-12,
  .grid-x > .small-2,
  .grid-x > .small-3,
  .grid-x > .small-4,
  .grid-x > .small-6 {
    flex-basis: auto;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 1.1111111111rem);
    margin-left: 0.5555555556rem;
    margin-right: 0.5555555556rem;
  }
  .grid-margin-x > .small-12 {
    width: calc(100% - 1.1111111111rem);
  }

  .cell {
    position: relative;
  }

  .close {
    display: none;
  }

  ${({ isSticky }) =>
    isSticky &&
    `
    position: sticky;
    bottom: 0;
    z-index: 300;


    .close {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin: 5px;
    }
  `}

  .visually-hidden {
    display: none;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.15rem;
  }

  h4,
  h5 {
    margin-bottom: 0;
  }

  p {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  .align-self-middle {
    align-self: center;
  }

  .input-group {
    display: flex;
    width: 100%;
    /* margin-bottom: 0.8888888889rem; */
    margin: 0;
    align-items: stretch;
  }

  .input-group > :first-child,
  .input-group > :first-child.input-group-button > * {
    border-radius: 2px 0 0 2px;
  }

  .input-group-button,
  .input-group-button a,
  .input-group-button button,
  .input-group-button input,
  .input-group-button label,
  .input-group-field,
  .input-group-label {
    margin: 0;
    white-space: nowrap;
  }

  .input-group-field {
    border-radius: 0;
    flex: 1 1 0px;
    min-width: 0;
  }

  .input-group-button {
    padding-top: 0;
    padding-bottom: 0;
    text-align: center;
    display: flex;
    flex: 0 0 auto;
  }

  .input-group > :last-child,
  .input-group > :last-child.input-group-button > * {
    border-radius: 0 2px 2px 0;
  }
  @media screen and (min-width: 37.5em) {
    position: static;

    .footer-email-signup--inner {
      padding: 15px 0;
    }

    .close {
      display: none;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    .grid-margin-x {
      margin-left: -0.8333333333rem;
      margin-right: -0.8333333333rem;
    }

    .medium-6 {
      width: 50%;
    }

    .grid-x > .medium-3,
    .grid-x > .medium-6 {
      flex-basis: auto;
    }

    .grid-margin-x > .cell {
      width: calc(100% - 1.6666666667rem);
      margin-left: 0.8333333333rem;
      margin-right: 0.8333333333rem;
    }
    .grid-margin-x > .small-12 {
      width: calc(100% - 1.6666666667rem);
    }

    .grid-margin-x > .medium-6 {
      width: calc(50% - 1.6666666667rem);
    }

    p {
      margin-bottom: 0;
    }
  }
`;
