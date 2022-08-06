import styled from "styled-components";

export const MainWrapper = styled.div`
  #page {
    background-color: #f5f5f5;
    position: relative;
    z-index: 0;
  }

  #page {
    padding-bottom: 1em;
  }

  #main-wrap {
    max-width: 1060px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2.5%;
    max-width: 1060px;
    background: #f5f5f5;
  }

  #main-wrap {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0;
  }

  #main-wrap .main-content {
    float: left;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 400px) {
    #main-wrap {
      padding-top: 0;
    }
  }

  @media (min-width: 740px) {
    #main-wrap {
      margin: 2%;
      padding-top: 0;
      position: relative;
    }
  }
  @media (min-width: 800px) {
    #page {
      padding-bottom: 0;
    }
  }

  @media (min-width: 840px) {
    #page {
      overflow: hidden;
    }

    #main-wrap .main-content {
      float: left;
      width: 68%;
      position: relative;
    }

    #main-wrap .main-content {
      float: left;
      width: 65%;
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (min-width: 1280px) {
    #main-wrap {
      position: relative;
      margin: 1em 2em 2em;
      padding-top: 0;
    }

    #main-wrap .main-content {
      float: left;
      width: 70%;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
