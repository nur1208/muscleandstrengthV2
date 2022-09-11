import styled from "styled-components";

export const MainWrapper = styled.div`
  /* * {
    background-color: rgb(201, 76, 76);
  } */
  line-height: 1.3;
  color: #303030;
  padding: 0;
  margin: 0;

  * {
    font-family: nimbusnovus, sans-serif;
  }

  #page {
    background-color: #f5f5f5;
    position: relative;
    z-index: 1;
  }
  #page {
    padding-bottom: 1em;
  }
  #page {
    background-color: #fff;
  }

  #main-wrap {
    max-width: 1060px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2.5%;
    max-width: 1060px;
    /* background: #f5f5f5; */
    background-color: #fff;
  }

  #main-wrap:after {
    content: " ";
    display: block;
    clear: both;
  }

  .main-content.wide-format {
    /* width: 100%; */
    /* padding: 0 15px; */
  }

  .wide-format {
    /* width: 95%; */
    padding-left: 2.5%;
    padding-right: 2.5%;
  }
  @media (min-width: 400px) {
    #main-wrap {
      padding-top: 2.5%;
    }
  }

  @media (min-width: 700px) {
    #main-wrap {
      padding-top: 2.5%;
      position: relative;
    }
  }
  @media (min-width: 800px) {
    #page {
      padding-bottom: 0;
    }
  }

  @media (min-width: 840px) {
  }

  @media (min-width: 1082px) {
    #main-wrap {
      padding-top: 0;
      position: relative;
    }
  }
`;
