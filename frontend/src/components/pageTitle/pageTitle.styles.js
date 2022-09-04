import styled from "styled-components";

export const MainWrapper = styled.div`
  text-align: center;
  background-color: #fff;

  margin-bottom: 10px;
  padding-top: 20px;
  padding-bottom: 5px;

  font-weight: 600;
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  .align-center,
  .center,
  .center-align {
    text-align: center;
  }

  h1.page-title {
    font-size: 25px;
    margin: 0 0 15px;
  }

  @media (min-width: 840px) {
    margin-bottom: 15px;
    padding-top: 25px;
    padding-bottom: 10px;

    h1.page-title {
      margin: 0 0 15px;
    }
  } ;
`;
