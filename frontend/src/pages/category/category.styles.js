import styled from "styled-components";

export const MainWrapper = styled.div`
  /* * {
    background-color: rgb(201, 76, 76);
  } */
  line-height: 1.3;
  color: #303030;
  padding: 0;
  margin: 0;

  background-color: #f5f5f5;

  #main-wrapper {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  section {
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

  .col2-container {
    width: 100%;
  }

  aside {
    width: 100%;
  }
  @media (min-width: 840px) {
    section {
      margin-bottom: 15px;
    }

    .col2-container {
      max-width: 1300px;
      margin: 0 auto;
      display: table;
    }

    aside {
      width: 225px;
      max-width: 225px;
    }

    aside,
    section.content {
      display: table-cell;
      vertical-align: top;
      padding: 0;
    }

    section.content {
      background-color: transparent;

      position: relative;
    }
  } ;
`;
