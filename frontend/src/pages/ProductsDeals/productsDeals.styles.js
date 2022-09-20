import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #f5f5f5;
  font-size: 16px;
  line-height: 1.3;
  color: #303030;
  padding: 0;
  margin: 0;

  margin: 0;
  padding: 0;
  background: #f5f5f5;
  font-family: nimbusnovus-regular, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #main-wrapper {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  .col2-container {
    width: 100%;
  }
  aside {
    width: 100%;
  }

  section {
    margin-bottom: 10px;
    background-color: #fff;
  }

  section.content {
    position: relative;
  }

  section.content {
    background-color: transparent;
  }

  .call-to-action {
    display: none;
  }
  @media (min-width: 840px) {
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

    aside {
      padding-right: 7px;
    }
    section {
      margin-bottom: 15px;
    }

    section.content {
      padding-left: 7px;
    }

    .call-to-action {
      display: block;
    }
  }
`;
