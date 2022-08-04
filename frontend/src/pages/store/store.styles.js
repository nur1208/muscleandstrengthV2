import styled from "styled-components";

export const MainWrapper = styled.div`
  outline: 0;
  background-color: #f5f5f5;
  line-height: 1.3;
  color: #303030;
  padding: 0;
  margin: 0;

  * {
    outline: 0;
  }

  #main-wrapper {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  section {
    margin-bottom: 15px;
  }

  .content section {
    background-color: #fff;
  }

  .grid-container {
    padding-right: 0.3125rem;
    padding-left: 0.3125rem;
    max-width: 81.25rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media print, screen and (min-width: 52.5em) {
    .grid-container {
      padding-right: 0.46875rem;
      padding-left: 0.46875rem;
    }
  }
`;
