import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  .h5,
  h5 {
    font-size: 1.1111111111rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: 0;
    line-height: 35px;
  }

  .comments-header {
    padding: 15px;
    margin-bottom: 15px;
    background: #f5f5f5;
  }

  .inner-link {
    line-height: 35px;
  }

  .comment-body {
    position: relative;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #e6e7e8;
    border-radius: 2px;
    font-size: 16px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
    word-break: break-word;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  .comment-body .name {
    font-family: roboto-medium, sans-serif;
    color: #059;
  }

  .comment-body .posted-date {
    font-size: 13px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  ul {
    margin-bottom: 1rem;
    list-style-position: outside;
    line-height: 1.6;
  }
  ul {
    margin-left: 40px;
    list-style-type: disc;
  }

  .comment-body ul,
  .comment-body ul.inline li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .comment-footer {
    display: none;
    margin-top: -10px;
    margin-bottom: 15px;
    text-align: right;
    font-size: 13px;
  }

  .comment-footer ul {
    margin-left: 0;
  }

  .comment-footer .comment-reply,
  .comment-form .filter-wrapper {
    display: none;
  }
  .indented {
    margin-left: 25px;
  }

  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }
  .comment-body .mns-team-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    max-height: 20px;
  }

  .btn-wrapper {
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 400px) {
    .btn-wrapper button {
      width: auto;
      padding: 2% 4% !important;
    }
  }
  @media print, screen and (min-width: 52.5em) {
    .h5,
    h5 {
      font-size: 1.2222222222rem;
    }
  }
`;
