import styled from "styled-components";

export const MainWrapper = styled.div`
  text-align: left;
  border: 1px solid #eee;
  background-color: rgb(245, 245, 245);
  .title {
    padding: 0.5em 0.8em;
    font-size: 18px;
    text-align: left;
    display: block;
    background-color: #eee;
    cursor: pointer;
  }

  .inline-caret {
    font-size: 1.3em;
    padding: 0 0 0 0.3em;
  }

  .inline-caret {
    display: block;
    float: right;
  }

  .nav-wrap {
    display: none;
  }

  a {
    font-size: 13px;
    padding: 0.5em 0.8em;
    position: relative;
    text-transform: uppercase;
    display: block;
    border-top: 1px solid #eee;
    margin: 0 1em;
  }

  a:nth-of-type(1) {
    border-top: 0;
  }

  a.selected {
    background-color: #fff;
    color: #059;
  }
  @media (min-width: 800px) {
    .title {
      cursor: default;
      text-align: center;
    }

    .inline-caret {
      display: none;
      float: none;
    }

    .nav-wrap {
      padding: 0.5em 0;
      display: block;
    }
  }
`;
