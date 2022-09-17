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
  font-size: 16px;

  #page {
    background-color: #f5f5f5;
    position: relative;
    z-index: 1;
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
  #main-wrap:after {
    content: " ";
    display: block;
    clear: both;
  }
  .cartHeader:after {
    content: " ";
    font-size: 0;
    content: " ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .aside {
    border-radius: 2px;
    z-index: 0;
    display: none;
  }
  .aside {
    background-color: transparent;
  }

  .main-content {
    margin-bottom: 50px;
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
    .aside {
      float: right;
      width: 30%;
      display: block;
    }

    #main-wrap .main-content {
      float: left;
      width: 68%;
      position: relative;
    }
  }

  @media (min-width: 1024px) {
    .aside {
      width: 32%;
      padding-left: 15px;
    }
  }
  @media (min-width: 1082px) {
    #main-wrap {
      padding-top: 0;
      position: relative;
    }
  }
`;
