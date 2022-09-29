import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 0;
  background: #fefefe;
  font-family: roboto-regular, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  -webkit-font-smoothing: antialiased;

  #main-wrap {
    max-width: 66.6666666667rem;
    margin: 0 auto;
    padding: 15px;
  }

  h2.taxonomy-heading {
    margin-top: 25px;
    font-weight: 900;
    text-align: center;
    font-family: opensans-heavy;
    line-height: 1.1;
    margin-bottom: 25px;
    color: #333;
  }

  .subheading-text {
    font-size: 17px;
  }
  @media screen and (min-width: 75em) {
    #main-wrap {
      padding: 0;
    }
  }
`;
