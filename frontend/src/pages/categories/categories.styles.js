import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 0;
  padding: 0;
  background: #f5f5f5;
  font-family: nimbusnovus-regular, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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

  .grid-container {
    padding-right: 0.3125rem;
    padding-left: 0.3125rem;
    max-width: 81.25rem;
    margin-left: auto;
    margin-right: auto;
  }

  .grid-container.full {
    padding-right: 0;
    padding-left: 0;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .main-content {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
  }
  @media print, screen and (min-width: 52.5em) {
    .grid-container,
    .grid-container.fluid {
      padding-right: 0.46875rem;
      padding-left: 0.46875rem;
    }
  }
`;
