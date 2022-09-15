import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #059;
  min-height: 60px;
  position: relative;
  z-index: 3;
  overflow: hidden;

  .wrap {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1060px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .column-five,
  .column-one,
  .column-six,
  .column-three,
  .column-two {
    display: none;
  }

  .logo {
    text-align: center;
    z-index: 0;
    margin-top: 10px;
    width: 70px;
  }

  h3 {
    text-align: center;
    color: #fff;
    font-size: 13px;
    padding: 0;
    margin: 0;
  }

  .is-hidden {
    display: none !important;
  }

  .column-seven {
    position: absolute;
    top: 18px;
    right: 15px;
  }
  .column-seven svg {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 600px) {
    .column-five,
    .column-six,
    .column-three,
    .column-two {
      display: block;
    }

    .column-seven {
      display: none;
    }
  }

  @media (min-width: 780px) {
    .logo {
      z-index: 1;
      padding: 16px 0 10px;
    }
  }
  @media (min-width: 840px) {
    margin-bottom: 2em;

    .logo {
      width: 96px;
      margin-top: 0;
    }

    .logo a {
      color: #fff;
      text-decoration: none;
      font-size: 13px;
      line-height: 1.1em;
      position: relative;
      float: none;
      clear: both;
      display: block;
    }

    h3 {
      font-size: 18px;
    }
  }

  @media (min-width: 1060px) {
    .wrap {
      justify-content: space-between;
    }
  }
`;
