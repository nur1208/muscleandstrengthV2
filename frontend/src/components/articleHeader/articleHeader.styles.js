import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 0 0 30px;

  h1 {
    font-family: opensans-heavy;
    line-height: 1.1;
    margin-bottom: 25px;
  }
  .node-meta-wrapper {
    margin-bottom: 25px;
  }
  .node-meta {
    font-size: 16px;
  }
  .node-meta .author-info {
    margin-bottom: 10px;
  }
  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }
  .node-meta .author-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 4rem;
  }

  .node-meta .category-link {
    border: 1px solid #eee;
    border-radius: 1rem;
    background: #eee;
    padding: 3px 6px;
    color: #333;
    font-size: 13px;
    text-decoration: none;
  }

  .feature-image {
    text-align: center;
    background: #f5f5f5;
  }
  @media screen and (min-width: 30em) {
    margin: 25px 0 30px;

    .node-meta-wrapper {
      margin-bottom: 15px;
    }

    .node-meta .author-info {
      margin-bottom: 0;
    }
  }
`;
