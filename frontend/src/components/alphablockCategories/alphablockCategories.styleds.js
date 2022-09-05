import styled from "styled-components";

export const MainWrapper = styled.div`
  font-size: 16px;
  .alpha-header {
    margin-bottom: 10px;
  }

  .alpha-header {
    display: table;
    width: 100%;
    font-size: 13px;
    background-color: #059;
    border: 1px solid #059;
    color: #fff;
    align-items: center;
  }

  .alpha-header-title {
    font-size: 16px;
    text-transform: uppercase;
    position: relative;
    text-align: left;
    vertical-align: middle;
    display: block;
    width: 100%;
    padding: 10px 8px;
  }

  .letters-container {
    display: block;
    padding: 5px;
  }

  ul {
    margin-top: 0;
  }
  ul {
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
    list-style: none;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  .letters-wrap {
    color: #fff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    -ms-grid-columns: repeat(16, 1fr);
    grid-template-rows: 42px;
    grid-gap: 1px;
  }

  .letters-wrap li {
    background-color: #003966;
    margin: 1px;
    text-align: center;
  }

  .letters-wrap li a {
    font-size: 20px;
    padding: 16px;
    line-height: 40px;
    color: #fff;
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
    flex-basis: auto;
    flex: 0 0 auto;
  }

  .grid-x > .small-12 {
    width: 100%;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 0.625rem);
    /* margin-left: 0.3125rem;
    margin-right: 0.3125rem; */
  }

  .grid-margin-x > .small-12 {
    width: calc(100% - 0.625rem);
  }

  .cell {
    padding: 12px;
  }

  .cell {
    margin-bottom: 10px;
  }

  .cell {
    background-color: #fff;
    position: relative;
    overflow: hidden;
  }

  .alpha-sort {
    background-color: #fff;
    padding-bottom: 17px;
  }

  .alpha-sort .inner-wrap {
    display: flex;
  }

  .letter {
    font-size: 25px;
    color: #059;
    padding-right: 16px;
    line-height: 1;
  }

  .alpha-category-list {
    width: 100%;
    column-count: 2;
    column-gap: 15px;
    list-style-position: inside;
  }
  @media print, screen and (min-width: 52.5em) {
    .grid-x > .medium-6 {
      width: 50%;
    }

    .grid-margin-x > .cell {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .small-12 {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .medium-6 {
      width: calc(50% - 0.9375rem);
    }
  }

  @media (min-width: 840px) {
    .alpha-header {
      margin-bottom: 15px;
    }

    .alpha-header-title {
      display: table-cell;
      font-size: 25px;
      text-align: center;
      width: 250px;
      padding: 0 8px;
    }

    .letters-container {
      display: table-cell;
    }

    .cell {
      padding: 15px;
    }

    .cell {
      margin-bottom: 15px;
    }
  } ;
`;
