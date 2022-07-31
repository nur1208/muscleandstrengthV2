import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 200vh;

  .menu-mask {
    position: absolute;
    background-color: #202020;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    z-index: 90;
    top: 0;
    left: -1px;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }

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
