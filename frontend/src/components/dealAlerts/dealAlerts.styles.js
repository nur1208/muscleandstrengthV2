import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 12px;

  margin-bottom: 10px;

  position: relative;

  .message-wrap {
    width: 100%;
    position: relative;
  }

  .message-wrap .title {
    font-size: 20px;
    color: #059;
    font-family: nimbusnovus-bold, sans-serif;
    text-align: center;
  }

  .message-wrap svg {
    display: none;
  }
  .form-wrap {
    width: 100%;
    margin-top: 1em;
    z-index: 1;
    position: relative;
  }

  .form-wrap .text {
    font-size: 18px;
    width: 100%;
    line-height: 1.4em;
    margin-bottom: 0.5em;
    float: left;
    color: #202020;
    text-align: center;
  }

  .is-hidden {
    display: none !important;
  }
  .form-wrap input[name="fields_email"],
  .form-wrap input[name="fields_fname"] {
    width: 100%;
    float: left;
    clear: none;
  }

  .close {
    color: #ddd;
    padding: 0 0.5em;
    cursor: pointer;
    top: 4px;
    right: 2px;
    position: absolute;
    text-transform: uppercase;
    font-size: 12px;
    display: none;
  }
  @media (min-width: 840px) {
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    background-color: #059;
    font-size: 13px;

    .message-wrap {
      flex: 0 0 33%;
      align-self: center;
    }

    .message-wrap .title {
      font-size: 25px;
      text-align: left;
      color: #fff;
      margin-left: 10%;
    }

    .form-wrap {
      flex: 0 0 67%;
      margin-top: 0;
    }

    .form-wrap .text {
      text-align: left;
      font-size: 1.4em;
      color: #fff;
    }

    .form-wrap input[name="fields_fname"] {
      width: 30%;
    }

    .form-wrap input[name="fields_email"] {
      margin-left: 2%;
      width: 40%;
    }

    .message-wrap svg {
      display: inline-block;
    }

    .close {
      display: block;
    }
  }

  @media (min-width: 1082px) {
    .form-wrap .text {
      font-size: 1.15em;
    }
  }

  @media (min-width: 1350px) {
    .form-wrap .text {
      font-size: 1.3em;
    }
  }
`;
