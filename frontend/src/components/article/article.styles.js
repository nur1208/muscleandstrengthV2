import styled from "styled-components";

export const MainWrapper = styled.div`
  .node-image {
    margin-bottom: 10px;
    position: relative;
  }

  a {
    color: #333;
  }

  .node-image img {
    width: 100%;
    height: auto;
  }

  .node-title {
    margin-bottom: 10px;
    font-family: opensans-bold;
    font-size: 22px;
  }

  .node-short-summary {
    margin-bottom: 15px;
  }

  .node-meta {
    margin-bottom: 15px;
  }

  .view-content-button {
    display: block;
    margin-bottom: 20px;
    text-align: center;
  }

  .node-meta span {
    display: inline-block;
    margin-right: 10px;
    background: #f5f5f5;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 13px;
  }
  @media screen and (min-width: 37.5em) {
    .node-short-summary {
      margin-bottom: 50px;
    }

    .node-meta {
      position: absolute;
      bottom: 0;
      margin: 0;
    }
    .view-content-button {
      display: none;
    }
  }
`;
