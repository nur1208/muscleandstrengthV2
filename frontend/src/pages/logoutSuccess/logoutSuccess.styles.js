import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #f5f5f5;
  #main-wrapper {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  .logout-container {
    margin: auto;
    max-width: 740px;
  }

  .logout-container .logout-message {
    padding: 12px;
  }

  h1.page-title {
    font-size: 25px;
    margin: 0 0 15px;
  }
  section {
    background-color: #fff;
  }

  section {
    margin-bottom: 10px;
  }

  .text-center {
    text-align: center;
  }
  @media (min-width: 740px) {
    .logout-container {
      margin-top: 30px;
    }
  }

  @media (min-width: 840px) {
    .logout-container .logout-message {
      padding: 15px;
    }

    section {
      margin-bottom: 15px;
    }
  }
`;
