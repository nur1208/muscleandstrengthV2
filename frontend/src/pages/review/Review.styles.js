import styled from "styled-components";

export const MainWrapper = styled.div`
  #page {
    padding-bottom: 1em;
    position: relative;
    z-index: 1;
    background-color: #e6e7e8;
  }

  .center-header {
    overflow: hidden;
    padding: 0 0.2em;
  }

  .center-header .center-header-title {
    color: #059;
    margin: 0.5em 0;
    padding: 0;
    text-align: center;
    font-size: 1.5em;
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
    padding-top: 2%;
  }

  .aside {
    border-radius: 2px;
    z-index: 0;
    display: none;
  }

  .aside {
    /* width: 95%; */
    padding-left: 2.5%;
    padding-right: 2.5%;
    display: block;
    background-color: transparent;
    /* float: left; */
    padding-top: 0;
    margin-top: 0;
  }

  .aside {
    /* width: 95%; */
    padding-left: 2.5%;
    padding-right: 2.5%;
    display: block;
    /* float: left; */
    padding-top: 0;
    margin-top: 0;
  }

  .main-content {
    /* float: left;
    width: 95%; */
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  #main-wrap:after {
    content: " ";
    display: block;
    clear: both;
  }

  #results-disclaimer {
    font-size: 13px;
    line-height: 1.5em;
    padding-top: 1.5em;
    margin-top: 1em;
    padding-left: 5%;
    padding-right: 5%;
    clear: both;
    display: block;
    overflow: hidden;
  }

  .font-s-small {
    font-size: 13px;
  }
  .fdaWarning {
    font-size: 13px;
    line-height: 1.5em;
    padding: 1.5em 5%;
    clear: both;
    display: block;
    overflow: hidden;
  }

  @media (min-width: 480px) {
    #page {
      overflow: hidden;
    }

    .center-header .center-header-title {
      font-size: 2em;
    }

    #main-wrap {
      padding-top: 2.5%;
    }

    #main-wrap {
      padding-top: 2%;
    }
  }

  @media (min-width: 700px) {
    #main-wrap {
      padding-top: 2.5%;
      position: relative;
    }

    #main-wrap {
      margin: 2%;
      padding-top: 1%;
      position: relative;
    }
  }

  @media (min-width: 600px) {
    .center-header .center-header-title {
      margin: 0 0 0.5em;
    }
  }
  @media (min-width: 800px) {
    #page {
      padding-bottom: 0;
    }

    .center-header .center-header-title {
      font-size: 2.3em;
    }

    .aside {
      border-radius: 0;
      float: left;
      width: 37.5%;
      padding-left: 0;
      padding-right: 0;
      margin-right: 0;
      display: block;
    }

    .main-content {
      float: left;
      width: 62.5%;
      padding-left: 2.5%;
      padding-right: 0;
    }
  }

  /* @media (min-width: 840px) {
    .main-content {
      float: left;
      width: 68%;
      position: relative;
    }
  } */
  @media (min-width: 1082px) {
    .center-header .center-header-title {
      font-size: 2.5em;
    }

    #main-wrap {
      padding-top: 0;
      position: relative;
    }

    #main-wrap {
      position: relative;
      margin: 0 2em 2em;
      padding-top: 0;
    }
  }

  @media (min-width: 1200px) {
    .aside {
      border-radius: 0;
      float: left;
      width: 32.5%;
      padding-left: 0;
      padding-right: 0;
      margin-right: 0;
      display: block;
    }

    .main-content {
      float: left;
      width: 67.5%;
      padding-left: 2.5%;
      padding-right: 0;
    }
  }
`;
