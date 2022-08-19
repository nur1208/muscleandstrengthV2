import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fff;
  border: 0;
  margin: 1em 0;

  .section-inner-wrap {
    padding: 15px;
    overflow: hidden;
  }

  .overall-rating-subsection .subsection-inner-wrap {
    padding: 1em 0;
  }

  .overall-rating-subsection .subsection-title {
    color: #059;
    text-align: center;
    font-size: 1.5em;
    text-transform: uppercase;
  }

  .overall-rating-subsection .rate-stars {
    text-align: center;
    margin: 1em 0;
  }

  .overall-rating-subsection .rate-stars .rating-box {
    float: none;
    margin: 0 auto;
    width: 80%;
    max-width: 15em;
  }

  .overall-rating-label {
    font-size: 0.4em;
    line-height: 1em;
    padding-bottom: 1em;
    display: block;
    color: #059;
    clear: both;
    overflow: hidden;
  }

  .overall-rating-subsection .rate-stars .overall-rating-label {
    color: #059;
    font-family: nimbusnovus-light, sans-serif;
  }

  .overall-rating-subsection .review-data-summary {
    border: 1px solid #ddd;
    font-family: nimbusnovus-light, sans-serif;
    width: 80%;
    max-width: 15em;
    padding: 0.8em 0;
    border-radius: 2px;
    margin: 1em auto 0;
    text-align: center;
  }

  .overall-rating-subsection
    .review-data-summary
    .item:nth-child(1) {
    padding-top: 0;
    margin-top: 0;
    border-top: 0;
  }

  .overall-rating-subsection .review-data-summary .item {
    border-top: 1px solid #eee;
    padding: 0.5em 0 0;
    margin: 0.5em 0.5em 0;
  }

  .review-graph-subsection .subsection-inner-wrap {
    padding: 1em 0;
  }
  .review-graph-subsection .subsection-title {
    color: #059;
    text-align: center;
    font-size: 1.5em;
    text-transform: uppercase;
  }

  .bar-graph-wrap {
    list-style: none;
    margin: 1em 0 0;
    padding: 0 !important;
    display: block;
    overflow: hidden;
    color: #059;
    white-space: nowrap;
  }

  .review-graph-subsection .bar-graph-wrap {
    margin-top: 1em;
    text-align: center;
  }

  .bar-graph-wrap li {
    overflow: hidden;
    display: inline-block;
    width: 100%;
  }

  .bar-graph-wrap .stars {
    display: inline-block;
    text-align: right;
    padding-right: 3%;
    min-width: 3.4em;
  }

  .font-s-small {
    font-size: 13px;
  }

  .upper {
    text-transform: uppercase !important;
  }

  .bar-graph {
    display: inline-block;
    background-color: #eee;
    margin: 0.2em 0 -0.3em;
    max-width: 60%;
    width: 20em;
    height: 1.2em;
  }

  .bar-graph-wrap .percentage {
    display: inline-block;
    text-align: left;
    padding-left: 2%;
    min-width: 3em;
  }

  .bar-graph-wrap .bar-graph .bar {
    height: 1.2em;
    background-color: #059;
  }

  .top-rated-flavors-subsection {
    clear: both;
    padding: 1em 0 0;
  }

  .top-rated-flavors-subsection .subsection-inner-wrap {
    padding: 1em 0;
  }

  .top-rated-flavors-subsection .subsection-title {
    color: #059;
    text-align: center;
    font-size: 1.5em;
    text-transform: uppercase;
  }

  .rating-item-wrap {
    padding: 0 !important;
    margin: 0;
    overflow: hidden;
  }

  .top-rated-flavors-subsection .rating-item-wrap {
    margin: 1em auto 0;
    max-width: 95%;
  }

  .rating-item-wrap .item {
    padding: 1em 0;
    border-top: 1px solid #eee;
    list-style: none;
  }

  .slist-on li {
    display: none;
  }

  ${({ isShowMore }) =>
    isShowMore
      ? `
    .slist-on li {
      display: block;
    }

  
  `
      : `
      
      
    .slist-on li:nth-child(-n + 3) {
      display: block;
    }

      `}

  .rating-item-wrap .item:nth-child(1) {
    border-top: 0;
  }
  .rating-item-wrap .item .rate-stars {
    float: right;
    margin-top: -0.4em;
    margin-left: 0.5em;
  }

  .slist-on li + .slist-more {
    display: block;
  }

  .rating-item-wrap .slist-more {
    padding-top: 1em;
    border-top: 1px solid #eee;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
  }

  .rating-item-wrap .slist-less,
  .rating-item-wrap .slist-more {
    padding-top: 1em;
    border-top: 1px solid #eee;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
  }

  .slist-on .slist-less {
    display: none;
  }

  .review-utility-bar {
    padding: 1.1em 0.1em 0.1em 0;
    position: relative;
    font-size: 18px;
    clear: both;
  }

  .review-utility-bar button {
    width: 100%;
    display: block;
    margin-bottom: 0;
  }

  @media (min-width: 600px) {
    .rating-item-wrap .item .rate-stars {
      margin-top: -0.2em;
    }
  }

  @media (min-width: 800px) {
    .review-utility-bar button {
      width: 40%;
      margin: 0 auto;
    }
  }

  @media (min-width: 1182px) {
    .overall-rating-subsection {
      float: left;
      overflow: hidden;
      width: 50%;
    }

    .overall-rating-subsection .subsection-inner-wrap {
      padding: 1em 0 2em;
      border-right: 1px solid #ddd;
    }

    .review-graph-subsection .subsection-inner-wrap {
      padding: 1em 0 2em;
    }
    .bar-graph-wrap li {
      max-width: 80%;
    }

    .top-rated-flavors-subsection .subsection-inner-wrap {
      padding: 1em 0 2em;
    }

    .top-rated-flavors-subsection .rating-item-wrap {
      max-width: 80%;
    }
  }

  ${({ customStyle }) => (customStyle ? customStyle : "")}
`;
