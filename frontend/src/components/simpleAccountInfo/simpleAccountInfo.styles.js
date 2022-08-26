import styled from "styled-components";

export const MainWrapper = styled.div`
  font-size: 16px;

  .margBot10 {
    margin-bottom: 10px;
  }

  .bottomBorder {
    border-bottom: 0.2em solid #eee;
    padding-bottom: 0.05em;
    margin: 0.4em 0;
    clear: both;
  }

  .dashboard-points-wrap {
    clear: both;
    overflow: hidden;
  }

  .dashboard-points-wrap .currency-image-wrap {
    box-sizing: border-box;
    width: 41.6666666667%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
  }
  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .dashboard-points-wrap .points {
    box-sizing: border-box;
    width: 58.3333333333%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
    line-height: 1em;
  }

  .dashboard-points-wrap .point-wrap {
    color: #059;
    font-size: 2.5em;
  }

  .dashboard-points-wrap .points .point-wrap {
    font-size: 3.3em;
    line-height: 1em;
    margin-top: 0.3em;
    display: block;
    font-family: nimbusnovus-bold, sans-serif;
  }

  .row {
    max-width: 1060px;
    margin: 0 auto;
  }

  .margBot5 {
    margin-bottom: 5px;
  }

  .row {
    clear: both;
    width: 100%;
    float: left;
    display: block;
    min-height: 1px;
  }

  .qg-full {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .qg-full {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
  }

  .font-s-small {
    font-size: 13px;
  }
  .blue,
  .mnsBlue {
    color: #059;
  }
  .upper {
    text-transform: uppercase !important;
  }

  .qg-full:after {
    content: " ";
    display: block;
    clear: both;
  }

  .ellipsis,
  .oneline {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .margBot20 {
    margin-bottom: 20px;
  }
  .buttons {
    display: flex;
    gap: 10px;
  }

  @media (min-width: 600px) {
    padding-bottom: 1em;
    clear: both;
    float: left;
    width: 100%;
    display: flex;

    .card {
      /* width: 48.7%; */
      margin-right: 2.6%;
      float: left;
      overflow: hidden;
    }

    .card .inner-wrap {
      border-radius: 2px;
      border: 1px solid #ddd;
      padding: 0 4%;
      overflow: hidden;
    }

    .card .card-header {
      margin: 0 0 5%;
      border-bottom: 1px solid #ddd;
      color: #059;
    }

    .card .card-header h3 {
      border: 0 !important;
      margin: 0 0 1% !important;
      font-size: 1.3em;
      padding-bottom: 0.3em;
    }

    .dashboard-points-wrap {
      font-size: 0.65em;
    }
  }

  @media (min-width: 800px) {
    .dashboard-points-wrap {
      font-size: 13px;
    }
  }
`;
