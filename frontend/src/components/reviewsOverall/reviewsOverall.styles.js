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

  li {
    font-size: 16px;
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

export const MainWrapperWrite = styled.div`
  overflow: hidden;
  padding: 0 5% 3%;
  margin: 0 0 1em;
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;

  .member-form-wrap {
    text-align: center;
    padding: 2em 0;
  }

  .message {
    border-radius: 2px;
    padding: 0.5em;
    margin: 0.2em 0 0;
    text-align: center;
    font-size: 13px;
  }

  #membername-edit input {
    display: inline-block;
    float: none;
    width: auto;
    padding: 0.77em;
    margin: 0.1em;
  }

  .message.red {
    background-color: #fef7f7;
    border: 1px solid #fac4c4;
    color: #d41313;
  }

  .red {
    color: #d41313;
  }

  .member-form-wrap .info-wrap {
    background-color: #fff;
    display: block;
    z-index: 0;
    line-height: 1.1em;
    position: relative;
  }

  .member-form-wrap .text {
    display: inline-block;
    padding-right: 0.2em;
  }

  img {
    border-style: none;
  }

  .member-form-wrap .member-image {
    width: 2em;
    border-radius: 15em;
    margin-bottom: -0.7em;
    margin-right: 0.4em;
    z-index: 1;
    position: relative;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .member-form-wrap .name {
    color: #059;
    display: inline-block;
    cursor: pointer;
  }

  .member-form-wrap button {
    cursor: pointer;
    background-color: #fff;
    padding: 0.3em 0.5em;
    font-size: 13px;
    position: relative;
    top: -0.1em;
    border-radius: 0;
    border-left: 1px solid #ddd;
    margin-left: 0.3em;
  }

  .review-form-wrap {
    position: relative;
    float: left;
    width: 100%;
    overflow: hidden;
    padding-right: 1%;
  }

  .review-form-wrap.active {
    padding-top: 2.9em;
    overflow: visible;
  }

  .review-form-wrap .notice {
    background-color: #059;
    height: 3em;
    overflow: hidden;
    padding: 0.8em 2% 0.7em;
    font-size: 13px;
    font-family: nimbusnovus-light, sans-serif;
    color: #fff;
    position: absolute;
    border-radius: 2px;
    width: 99%;
    top: 4em;
    z-index: 0;
    opacity: 0;
    transition: top 0.5s 0.5s;
    border: 1px solid #059;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .review-form-wrap.active .notice {
    top: 0;
    opacity: 1;
  }

  .review-form-wrap .notice .notice-text {
    float: left;
  }

  .review-form-wrap .notice button {
    float: right;
    border: 0;
    background: 0 0;
    padding: 0;
  }

  .review-form-wrap .notice button.edit-button {
    display: none;
  }

  .review-form-wrap .section {
    border-radius: 2px;
    background: #fff;
    float: left;
    margin-bottom: 0;
    padding: 0 10%;
    width: 100%;
    position: relative;
    border: 1px solid #ddd;
  }

  .review-form-wrap .section.overall-review {
    padding: 1em 10% 2em;
    position: relative;
    z-index: 1;
  }

  .review-form-wrap .section.open {
    margin-bottom: 0.5em;
  }

  .review-form-wrap .section.open .inner-wrap {
    display: block;
  }

  .review-form-wrap .text {
    text-align: center;
    font-family: nimbusnovus-light, sans-serif;
    font-size: 18px;
    padding: 1em 0;
  }

  .form-loading-message {
    display: none;
    text-align: center;
    margin-top: 1em;
  }

  .review-form-wrap .form-loading-message {
    display: none;
    text-align: center;
    overflow: hidden;
    float: left;
    width: 100%;
    border: 1px solid #ddd;
    padding: 1em 0;
    border-radius: 2px;
  }

  .review-form-wrap .flavor-form-wrap {
    max-width: 100%;
    width: 25em;
    margin: 0 auto;
  }

  .review-form-wrap .flavor-review,
  .review-form-wrap .written-review {
    visibility: hidden;
    height: 0;
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  .review-form-wrap.active .flavor-review,
  .review-form-wrap.active .written-review {
    visibility: visible;
    opacity: 1;
    height: auto;
    padding: 1em 10% 2em;
  }

  .review-form-wrap .flavor-form-wrap .flavor-form {
    padding: 0.5em 3em 0.5em 0;
    position: relative;
  }

  .top-form-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .review-form-wrap .flavor-form-wrap .flavor-form .rating-label,
  .review-form-wrap
    .flavor-form-wrap
    .flavor-form
    .remove-rating {
    font-size: 16px;
  }

  .review-form-wrap
    .flavor-form-wrap
    .flavor-form
    .remove-rating {
    border: 0;
    background: 0 0;
    cursor: pointer;
    /* position: absolute; */
    /* top: 0.2em; */
    right: 0;
    font-family: nimbusnovus-light, sans-serif;
    font-size: 1.5em;
    /* padding: 0.5em; */
    color: #303030;
  }

  .expandingArea {
    position: relative;
    border: 1px solid #ddd;
    background: #fff;
  }

  .written-review .text-area {
    min-height: 5em;
    padding-bottom: 1em;
    font-size: 18px;
  }

  .expandingArea pre,
  .expandingArea textarea {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: nimbusnovus-light, sans-serif;
  }

  .expandingArea > pre,
  .expandingArea > textarea {
    padding: 0.3em 0.5em;
    background: 0 0;
    white-space: pre-line;
    word-wrap: break-word;
  }

  .expandingArea > pre {
    display: none;
  }

  .expandingArea.active > pre {
    display: block;
    visibility: hidden;
  }

  textarea {
    overflow: auto;
    width: 98%;
    padding: 0.5em 1%;
    margin-bottom: 10px;
    border-radius: 2px;
    background: #fff;
    display: block;
    border: 1px solid #ddd;
    clear: left;
    color: #303030;
  }

  .expandingArea > textarea {
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
  }

  .expandingArea.active > textarea {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    resize: none !important;
  }

  .written-review .count {
    float: right;
    margin: -1.8em 0 0;
    text-align: right;
    padding: 0.4em;
    line-height: 1em;
    z-index: 1;
    position: relative;
  }

  .gray {
    color: #a2a2a2;
  }

  .written-review button {
    width: 100%;
    padding: 1.4em 1em;
    margin: 1em auto 0;
    display: block;
    font-size: 18px;
    float: right;
  }

  @media (min-width: 800px) {
    .written-review button {
      padding: 1.2em 3.8em;
      margin: 1em 0 0;
      width: auto;
    }
  }
`;
