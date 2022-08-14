import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fff;
  overflow: hidden;
  padding: 3% 3% 0;
  margin-bottom: 1em;

  .review-rating-wrap {
    width: 57%;
    padding-top: 0.5em;
    padding-left: 3%;
    float: right;
    font-size: 0.85em;
    border-left: 1px solid #ddd;
    margin: 0 -1px;
  }

  .rating-wrap {
    border: 1px solid #ddd;
    padding: 5%;
    margin-bottom: 5%;
    position: relative;
  }

  .overall.rating-wrap {
    text-align: center;
  }

  .rating-wrap .rating-label-wrap {
    position: absolute;
    top: -0.7em;
    width: 100%;
    text-align: center;
    left: 0;
  }

  .rating-wrap .rating-label-wrap .rating-label {
    background: #fff;
    padding: 0 0.5em;
    font-size: 17px;
  }

  .overall.rating-wrap .rate-stars {
    display: inline-block;
    font-size: 2.4em;
    margin-bottom: -0.3em;
    width: 100%;
  }

  .overall.rating-wrap .rate-stars .rating-box {
    width: 7em;
    margin: 0 auto;
  }

  .main-content ol,
  .main-content ul {
    margin-top: 0;
  }
  .rating-item-wrap {
    padding: 0 !important;
    margin: 0;
    overflow: hidden;
  }

  .slist-on .slist-less,
  .slist-on .slist-more,
  .slist-on li {
    display: none;
  }
  .rating-item-wrap .slist-less,
  .rating-item-wrap .slist-more {
    padding-top: 1em;
    border-top: 1px solid #eee;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
  }
  .review-user-wrap {
    float: left;
    width: 37%;
    padding-right: 3%;
    padding-top: 1em;
    border-right: 1px solid #ddd;
  }

  .user-image {
    border-radius: 30em;
    overflow: hidden;
    line-height: 0;
    width: 45%;
    margin: 0 auto;
  }

  .user-name {
    color: #059;
    font-size: 18px;
    line-height: 1.3em;
    margin: 8% 0 5%;
    display: block;
    text-transform: capitalize;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  img {
    border-style: none;
  }
  .user-badge-wrap {
    text-align: center;
  }

  .user-badge-wrap .user-badge {
    display: inline-block;
  }

  .user-badge-wrap .badge-icon {
    display: block;
    float: left;
    margin-top: 0.2em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .user-badge-wrap .badge-label {
    display: none;
  }

  .review-content-wrap {
    float: left;
    width: 100%;
    border-top: 1px solid #ddd;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  .user-review {
    width: 100%;
    float: left;
    overflow: hidden;
    margin: 1em 0;
    white-space: pre-line;
    font-size: 17px;
  }

  .helpful-wrap {
    overflow: hidden;
    font-size: 13px;
    line-height: 2em;
    margin-top: -1.8em;
    margin-bottom: 0.3em;
    clear: both;
    text-align: center;
  }

  .helpful-wrap .question,
  .helpful-wrap .response-wrap {
    margin: 0;
    display: inline;
  }

  .helpful-wrap .response-wrap {
    display: none;
  }

  .helpful-wrap .not-helpful {
    display: inline-block;
    margin-right: 0.2em;
  }

  .helpful-wrap .form {
    display: inline-block;
    padding: 0.2em 0.3em;
    line-height: 1.5em;
  }

  .helpful-wrap .choice {
    display: inline;
  }

  .helpful-wrap .change,
  .helpful-wrap .choice {
    margin: 0 0.1em;
    color: #059;
    background: 0;
    padding: 0.6em;
    border: 1px solid #ddd;
    border-radius: 0.2em;
    min-width: 2.9em;
    cursor: pointer;
  }

  .helpful-wrap .response-wrap {
    display: none;
  }
  .helpful-wrap .helpful-data {
    display: inline-block;
  }

  .helpful-wrap .change:hover,
  .helpful-wrap .choice:hover {
    border-color: #059;
  }

  .review-meta-wrap {
    width: 106.4%;
    float: left;
    margin: 3% -3.2% 0;
    border-top: 1px solid #ddd;
    background-color: #fff;
    line-height: 2.8em;
    font-size: 0.85em;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  .review-meta-wrap .date {
    margin-left: 1.5em;
    text-decoration: none;
  }

  .review-meta-wrap .meta-button-wrap {
    float: right;
    overflow: hidden;
  }

  .review-meta-wrap .meta-button-wrap button {
    background-color: #fff;
    border: 0;
    color: #059;
    padding: 0 1.5em;
  }
  @media (min-width: 600px) {
    .helpful-wrap {
      font-size: 13px;
      float: left;
      text-align: left;
    }
    .helpful-wrap .question,
    .helpful-wrap .response-wrap {
      float: left;
    }

    .helpful-wrap .form {
      float: left;
      padding: 0.2em 0.6em;
    }

    .helpful-wrap .change,
    .helpful-wrap .choice {
      padding: 0 0.8em;
      margin: 0 0.2em;
      min-width: 3.2em;
    }
    .helpful-wrap .helpful-data {
      border-left: 1px solid #ddd;
      padding-left: 1em;
      float: left;
      display: block;
    }
  }
  @media (min-width: 1232px) {
    .review-rating-wrap {
      width: 40%;
      padding-top: 0.5em;
      padding-left: 3%;
      float: right;
      font-size: 0.85em;
      border-left: 1px solid #ddd;
      margin: 0 -1px;
    }

    .review-user-wrap {
      padding-top: 1em;
      width: 54%;
    }

    .user-image {
      border-radius: 20em;
      float: left;
      overflow: hidden;
      line-height: 0;
      width: 17%;
      margin-right: 4%;
    }

    .user-name {
      margin: 0.5% 0;
      font-size: 1.4em;
      text-align: left;
    }

    .user-badge-wrap .user-badge {
      margin-right: 0.5em;
    }

    .user-badge-wrap .badge-icon {
      margin-left: 0;
      margin-right: 0.5em;
    }

    .user-badge-wrap .badge-label {
      display: inline-block;
      font-size: 13px;
    }
    .review-content-wrap {
      margin-top: 0;
      width: 54%;
      padding-right: 3%;
      border-top: 0;
      border-right: 1px solid #ddd;
      margin-bottom: 1.5em;
    }

    .user-badge-wrap {
      text-align: left;
    }
  }
`;
