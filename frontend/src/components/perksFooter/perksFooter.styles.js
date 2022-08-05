import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #e6e7e8;
  margin: 0;
  padding: 0;
  color: #059;
  overflow: hidden;
  z-index: 0;
  position: relative;
  display: none;

  .max-wrap {
    margin: 0 2%;
    max-width: 96%;
    width: 1300px;
  }

  .max-wrap:after {
    content: " ";
    display: block;
    clear: both;
  }

  .main-text {
    font-family: nimbusnovus-light, sans-serif;
    font-size: 2.2em;
    line-height: 1em;
    margin-top: 0;
    text-transform: uppercase;
    text-align: center;
    padding: 0 5%;
  }

  .main-text span {
    font-family: nimbusnovus-bold, sans-serif;
  }

  .text-block-wrap {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  .text-block {
    text-align: center;
    line-height: 1.1em;
    border: 0;
    padding-top: 0.5em;
    box-sizing: border-box;
    width: 50%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
    margin-top: 0.5em;
    margin-left: -1px;
  }

  .text-block.b1 {
    border-left: 0;
  }

  .text-block .icon {
    font-size: 4em;
  }

  .text-block .title {
    font-size: 16px;
    font-family: nimbusnovus-bold, sans-serif;
    margin: 0 2% 8% 4%;
    text-transform: uppercase;
    line-height: 1.1rem;
    font-weight: 700;
  }

  .text-block .text {
    font-size: 13px;
    font-family: nimbusnovus-medium, sans-serif;
    color: #aaa;
    margin: 0 auto;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 85%;
    display: none;
  }
  @media (min-width: 370px) {
    .text-block-wrap {
      font-size: 1.3em;
    }
  }

  @media (min-width: 500px) {
    .text-block-wrap {
      box-sizing: border-box;
      width: 100%;
      float: left;
      padding-left: 2.5%;
      padding-right: 2.5%;
    }

    .text-block {
      border: 0;
      box-sizing: border-box;
      width: 25%;
      float: left;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 1em;
    }
  }

  @media (min-width: 640px) {
    .text-block {
      border: 0;
      box-sizing: border-box;
      width: 25%;
      float: left;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 1em;
    }
  }
  @media (min-width: 700px) {
    background-color: #fff;
    .text-block {
      border: 0;
      box-sizing: border-box;
      width: 25%;
      float: left;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 1em;
    }
    .text-block-wrap {
      font-size: 13px;
    }
  }

  @media (min-width: 800px) {
    border-top: 1px solid #eee;
    display: block;

    .text-block .icon {
      margin-bottom: 0.2em;
    }

    .text-block .title {
      margin: 0 2%;
    }
  }

  @media (min-width: 960px) {
    .text-block {
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      margin-top: 0;
      min-height: 11em;
      box-sizing: border-box;
      width: 25%;
      float: left;
      padding: 1em 0;
    }

    .text-block.b1 {
      padding-left: 0;
      padding-right: 0;
    }

    .text-block .text {
      display: block;
    }
  }
  @media (min-width: 1082px) {
    .main-text {
      padding: 0 0.5%;
      background-color: #fff;
      box-sizing: border-box;
      width: 25%;
      float: left;
      margin-top: 2.1%;
      text-align: left;
    }

    .text-block-wrap {
      font-size: 13px;
      box-sizing: border-box;
      box-sizing: border-box;
      width: 75%;
      float: left;
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 1263px) {
    .main-text {
      padding: 0 0.5%;
      margin-top: 4.1%;
      box-sizing: border-box;
      width: 33.3333333333%;
      float: left;
      text-align: left;
    }
    .text-block-wrap {
      box-sizing: border-box;
      width: 66.6666666667%;
      float: left;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const IconWrapper = styled.span`
  ${({ styleChild }) => {
    console.log({ styleChild });
    return `svg {${styleChild}}`;
  }}
`;
