import styled from "styled-components";

export const MainWrapper = styled.footer`
  background: #059;
  color: #fefefe;

  .footer-main--inner {
    max-width: 66.6666666667rem;
    margin: 0 auto;
    padding: 25px 15px;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  /* .grid-margin-x {
    margin-left: -0.5555555556rem;
    margin-right: -0.5555555556rem;
  } */

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }
  .small-6 {
    width: 50%;
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

  .grid-x > .small-6 {
    width: 50%;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 1.1111111111rem);
    margin-left: 0.5555555556rem;
    margin-right: 0.5555555556rem;
  }

  .grid-margin-x > .small-6 {
    width: calc(50% - 1.1111111111rem);
  }

  .footer-main h6 {
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    margin-left: 0;
  }

  a,
  a:hover {
    color: #fefefe;
  }

  ul.social-links li {
    display: inline;
  }

  .visually-hidden {
    display: none;
  }
  h6 {
    font-weight: 750;
  }

  h6,
  li {
    font-size: 0.92rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.15rem;
  }

  .footer-bottom {
    background: #004780;
    font-size: 16px;
  }

  .footer-bottom--inner {
    position: relative;
    max-width: 66.6666666667rem;
    margin: 0 auto;
    padding: 15px;
  }

  .footer-bottom p {
    text-align: center;
    margin-bottom: 0;
  }
  .footer-bottom img {
    display: none;
  }
  @media screen and (min-width: 37.5em) {
    .footer-main--inner {
      padding: 25px 0;
    }

    .footer-bottom--inner {
      padding: 15px 0;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    /* .grid-margin-x {
      margin-left: -0.8333333333rem;
      margin-right: -0.8333333333rem;
    } */

    .medium-3 {
      width: 25%;
    }

    .grid-x > .medium-3,
    .grid-x > .medium-6 {
      flex-basis: auto;
    }

    .grid-x > .medium-3,
    .grid-x > .medium-6 {
      flex: 0 0 auto;
    }

    .grid-x > .medium-3 {
      width: 25%;
    }
    .grid-margin-x > .cell {
      width: calc(100% - 1.6666666667rem);
      margin-left: 0.8333333333rem;
      margin-right: 0.8333333333rem;
    }
    .grid-margin-x > .small-6 {
      width: calc(50% - 1.6666666667rem);
    }

    .grid-margin-x > .medium-3 {
      width: calc(25% - 1.6666666667rem);
    }
  }

  @media print, screen and (min-width: 64em) {
    .large-2 {
      width: 16.6666666667%;
    }

    .grid-x > .large-2,
    .grid-x > .large-4 {
      flex-basis: auto;
    }

    .grid-x > .large-2,
    .grid-x > .large-4 {
      flex: 0 0 auto;
    }

    .grid-x > .large-2 {
      width: 16.6666666667%;
    }

    .grid-margin-x > .large-2 {
      width: calc(16.6666666667% - 1.6666666667rem);
    }

    .footer-bottom p {
      text-align: left;
    }
    .footer-bottom img {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 350px;
    }
    .footer-main--inner {
      padding: 44px 0;
    }
  }
`;
