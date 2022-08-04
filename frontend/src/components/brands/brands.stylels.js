import styled from "styled-components";

export const MainWrapper = styled.div`
  h2.grey-stripe {
    color: #303030;
    margin-bottom: 6px;
    font-size: 16px;
  }

  .grey-stripe,
  .left-title {
    position: relative;
    width: 100%;
    max-width: 1300px;
    text-transform: uppercase;
    padding: 15px 0 10px 15px;
    border-bottom: 1px solid #eee;
    color: #303030;
    margin: 0;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .grid-margin-x {
    margin-left: -0.3125rem;
    margin-right: -0.3125rem;
  }

  ul.top-brand-list {
    margin-top: 0;
    padding: 12px;
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

  .grid-x > .small-6 {
    flex-basis: auto;
    flex: 0 0 auto;
  }

  .grid-x > .small-6 {
    width: 50%;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 0.625rem);
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }

  .grid-margin-x > .small-6 {
    width: calc(50% - 0.625rem);
  }

  ul.top-brand-list li {
    text-align: center;
  }

  ul {
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
    list-style: none;
  }

  .vmiddle {
    vertical-align: middle;
  }

  ul.top-brand-list li .manufacturer_box a:hover {
    opacity: 0.8;
  }

  ul.top-brand-list li .manufacturer_box a {
    padding-top: 0.3em;
    display: block;
    overflow: hidden;
  }

  ul.top-brand-list li .manufacturer_box a img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 840px) {
    ul.top-brand-list {
      padding: 15px;
    }
  }

  @media print, screen and (min-width: 46.25em) {
    flex: 0 0 auto;

    .grid-x > .bp740-4 {
      width: 33.3333333333%;
    }

    .grid-margin-x > .bp740-4 {
      width: calc(33.3333333333% - 0.625rem);
    }
  }
  @media print, screen and (min-width: 52.5em) {
    .grid-margin-x {
      margin-left: -0.46875rem;
      margin-right: -0.46875rem;
    }

    .grid-margin-x > .cell {
      width: calc(100% - 0.9375rem);
      margin-left: 0.46875rem;
      margin-right: 0.46875rem;
    }

    .grid-margin-x > .small-6 {
      width: calc(50% - 0.9375rem);
    }

    .grid-margin-x > .bp740-4 {
      width: calc(33.3333333333% - 0.9375rem);
    }
  }

  @media print, screen and (min-width: 64em) {
    .grid-x > .large-3 {
      width: 25%;
      flex: 0 0 auto;
    }

    .grid-margin-x > .large-3 {
      width: calc(25% - 0.9375rem);
    }
  }
`;
