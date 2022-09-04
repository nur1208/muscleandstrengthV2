import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #f5f5f5;
  line-height: 1.3;
  color: #303030;
  padding: 0;
  margin: 0;
  /* 
  * {
    background-color: rgb(201, 76, 76);
  } */
  #main-wrapper {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  .blue-stripe,
  h2.blue-stripe,
  .content {
    margin-bottom: 10px;
  }
  .blue-stripe,
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

  h2.all-products {
    display: none;
  }

  .col2-container {
    width: 100%;
  }
  aside {
    width: 100%;
  }

  section.content {
    background-color: transparent;

    position: relative;
  }

  @media (min-width: 840px) {
    .col2-container {
      max-width: 1300px;
      margin: 0 auto;
      display: table;
    }

    aside {
      padding-right: 7px;

      display: table-cell;
      vertical-align: top;
      padding: 0;

      width: 225px;
      max-width: 225px;
    }

    section.content {
      display: table-cell;
      vertical-align: top;
      padding: 0;
      margin-bottom: 15px;

      padding-left: 7px;
    }
  }
  @media screen and (min-width: 52.5em) {
    .blue-stripe,
    h2.blue-stripe {
      margin-bottom: 15px;
    }
  }
`;
