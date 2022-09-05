import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;

    background-color: #fff;
    flex-basis: auto;
    flex: 0 0 auto;
  }

  .small-12 {
    width: 100%;
  }

  .cell {
    width: calc(100% - 0.625rem);
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }

  .small-12 {
    width: calc(100% - 0.625rem);
  }
  .cell {
    padding: 12px;
    margin-bottom: 10px;
  }
  .cell {
    background-color: #fff;
    position: relative;
    overflow: hidden;
  }

  .grey-stripe {
    margin-bottom: 10px;
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

  h2.grey-stripe {
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 500;
  }

  .caret-right {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-left: 8px;
    margin-top: 4px;
    float: right;
  }

  .caret-right:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 9px solid transparent;
  }

  .caret-right:before {
    border-left-color: #059;
  }

  .caret-right:after {
    content: "";
    position: absolute;
    border: 7px solid transparent;
  }

  .caret-right:after {
    left: 0;
    top: 2px;
    border-left-color: #fff;
  }

  .section-categories .sub-cats {
    max-width: calc(100% - 130px);
  }
  .catalog-category-view ul {
    list-style: none;
    padding: 0;
  }
  .main-content ol,
  .main-content ul {
    margin-top: 0;
  }
  ul {
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
    list-style: none;
  }

  li {
    line-height: 32px;
  }

  li:last-child {
    font-weight: 700;
  }

  .img-wrap {
    position: absolute;
    right: 20px;
    top: 52px;
    max-width: 130px;
  }

  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }
  @media (min-width: 840px) {
    .cell {
      padding: 15px;
    }
    .cell,
    .grey-stripe {
      margin-bottom: 15px;
    }

    .img-wrap {
      top: 65px;
    }
  }

  @media (min-width: 740px) {
    .img-wrap {
      max-width: 180px;
    }
  }
  @media print, screen and (min-width: 46.25em) {
    .bp740-6 {
      width: 50%;
    }
    .bp740-6 {
      width: calc(50% - 0.625rem);
    }
  }
  @media print, screen and (min-width: 52.5em) {
    .cell {
      width: calc(100% - 0.9375rem);
      margin-left: 0.46875rem;
      margin-right: 0.46875rem;
    }

    .small-12 {
      width: calc(100% - 0.9375rem);
    }

    .bp740-6 {
      width: calc(50% - 0.9375rem);
    }
  }

  @media print, screen and (min-width: 64em) {
    .large-4 {
      width: 33.3333333333%;
    }

    .large-4 {
      width: calc(33.3333333333% - 0.9375rem);
    }
  }
`;
