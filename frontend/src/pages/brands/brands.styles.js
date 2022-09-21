import styled from "styled-components";

export const MainWrapper = styled.div`
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
  }

  .top-brands-block {
    margin-bottom: 10px;
    background-color: #fff;
  }

  @media (min-width: 840px) {
    .top-brands-block {
      margin-bottom: 15px;
    }
  } ;
`;
