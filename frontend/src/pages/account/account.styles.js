import styled from "styled-components";

export const MainWrapper = styled.div`
  padding-bottom: 1em;
  position: relative;
  z-index: 1;
  #main-wrap {
    max-width: 1060px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2.5%;
    max-width: 1060px;
    /* background: #f5f5f5; */
    background-color: #fff;
    margin-bottom: 3%;
  }

  .aside {
    border-radius: 2px;
    z-index: 0;
    /* display: none; */
    display: block;
  }

  #main-wrap:after {
    content: " ";
    display: block;
    clear: both;
  }

  .main-content h1 {
    font-family: nimbusnovus-bold, sans-serif;
    font-size: 1.8em;
    line-height: 1em;
    margin: 0 0 10px;
    padding: 0;
  }

  .clearfix {
    display: block;
  }
  .clearfix:after {
    content: " ";
    font-size: 0;
    content: " ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  @media (min-width: 400px) {
    #main-wrap {
      padding-top: 2.5%;
    }
  }

  @media (min-width: 480px) {
    .main-content h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 700px) {
    #main-wrap {
      padding-top: 2.5%;
      position: relative;
    }
  }

  @media (min-width: 800px) {
    padding-bottom: 0;
  }

  @media (min-width: 840px) {
    .aside {
      padding: 0;
      float: left;
      clear: left;
      margin-left: 2.5%;
      width: 27%;
    }

    #main-wrap .main-content {
      float: left;
      width: 68%;
      position: relative;
    }

    #main-wrap .main-content {
      float: right;
      padding-left: 0;
      padding-right: 2%;
    }
  }

  @media (min-width: 1024px) {
    .aside {
      padding: 0;
      margin: 0;
      width: 28.5%;
      float: left;
      clear: left;
    }

    #main-wrap .main-content {
      float: right;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
