import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 12px;
  margin-bottom: 10px;

  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand-logo {
    flex: 0 0 170px;
  }

  .brand-about-btn {
    font-size: 13px;
    text-transform: uppercase;
    line-height: 16px;
    color: #059;
    font-family: nimbusnovus-bold, sans-serif;
  }

  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }

  .brand-logo img {
    max-height: 50px;
    width: auto;
  }

  .brand-about-btn .caret-right {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    margin-left: 8px;
    margin-bottom: -2px;
  }

  .brand-about-btn .caret-right:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 5px solid transparent;
  }

  .brand-about-btn .caret-right:before {
    border-left-color: #059;
  }

  .brand-about-btn .caret-right:after {
    content: "";
    position: absolute;
    border: 3px solid transparent;
  }

  .brand-about-btn .caret-right:after {
    left: 0;
    top: 2px;
    border-left-color: #fff;
  }

  #main-wrapper {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  section {
    margin-bottom: 10px;
  }

  .blue-stripe,
  h2.blue-stripe {
    position: relative;
    width: 100%;
    max-width: 81.25rem;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 16px;
    background-color: #059;
  }

  .col2-container {
    width: 100%;
  }

  aside {
    width: 100%;
  }

  @media (min-width: 840px) {
    padding: 15px;
    margin-bottom: 15px;
    justify-content: center;
    .brand-logo {
      text-align: center;
      margin-right: 15px;
    }

    .brand-about-btn {
      text-align: center;
      margin-left: 4px;
    }

    .brand-about-btn .caret-right {
      margin-bottom: -1px;
    }

    section {
      margin-bottom: 15px;
    }

    .col2-container {
      max-width: 1300px;
      margin: 0 auto;
      display: table;
    }

    aside {
      width: 225px;
      max-width: 225px;
    }

    aside,
    section.content {
      display: table-cell;
      vertical-align: top;
      padding: 0;
    }

    section.content {
      background-color: transparent;

      position: relative;
    }
  } ;
`;
