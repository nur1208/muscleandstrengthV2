import styled from "styled-components";

export const MainWrapper = styled.div`
  /* * {
    background-color: rgb(10, 10, 10);
  } */
  font-size: 16px;
  margin: 0;
  padding: 0;
  background: #fefefe;
  font-family: roboto-regular, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #main-wrap {
    max-width: 66.6666666667rem;
    margin: 0 auto;
    padding: 15px;
  }

  @media screen and (min-width: 75em) {
    #main-wrap {
      padding: 0;
    }
  }
`;
