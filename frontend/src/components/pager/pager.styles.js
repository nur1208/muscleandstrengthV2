import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 25px 0 0;

  ul {
    margin-bottom: 1rem;
    list-style-position: outside;
    line-height: 1.6;
  }
  ul {
    margin-left: 40px;
    list-style-type: disc;
  }

  .pager {
    border: 0;
    padding-top: 15px;
    clear: both;
    text-align: center;
  }
  li {
    font-size: inherit;
  }
  .pager li {
    margin: 0;
    padding: 0;
    display: inline;
    list-style-type: none;
  }

  .base-content-grid a {
    color: #333;
  }
  .pager li a {
    font-size: 16px;
    padding: 10px 15px;
    color: #aaa;
    background-color: #f5f5f5;
    text-decoration: none;
    border-radius: 20px;
  }

  .pager li.pager-current a {
    background-color: #059;
    color: #fefefe;
    border: 0;
    font-weight: 700;
  }

  @media screen and (min-width: 37.5em) {
    .pager {
      border-top: 5px solid #f5f5f5;
    }

    .pager li {
      padding: 5px;
    }
  }
`;
