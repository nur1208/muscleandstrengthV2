import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fff;
  border: 0;
  line-height: 1em;
  margin: 0 0 2em;

  #nutrinfo-selector {
    font-size: 0.9em;
    margin-bottom: 1em;
    line-height: 1.1em;
  }
  .section-inner-wrap {
    padding: 1em;
    position: relative;
    padding: 15px;
  }

  .panel-wrap {
    overflow: hidden;
    height: 18em;
    position: relative;
  }

  .show-all .panel-wrap {
    height: auto;
    overflow: visible;
  }

  .show-more-mask {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.01) 2%,
      #fff 100%
    );
    padding: 10em 0 1em;
    text-align: center;
  }
  .show-all .expand-btn,
  .show-all .panel-wrap .show-more-mask {
    display: none;
  }

  .nutrition-panel {
    font-size: 11px;
    line-height: 1.7em;
    border: 1px solid #202020;
    padding: 0.5em;
    overflow: hidden;
  }

  .nutrition-panel h4 {
    font-size: 16px;
    margin: 0.2em 0;
    padding: 0;
  }

  .thickline {
    border-bottom: 0.5em solid #202020;
  }

  .thinline {
    border-bottom: 0.3em solid #202020;
  }

  .item {
    padding: 0.5em 0;
    clear: both;
    overflow: hidden;
    width: 100%;
  }
  .col-1 {
    box-sizing: border-box;
    width: 73.3333333333%;
    float: left;
    padding-left: 0;
    padding-right: 0;
    min-height: 1px;
  }
  .col-2 {
    box-sizing: border-box;
    width: 13.3333333333%;
    float: left;
    padding-left: 0;
    padding-right: 0;
    text-align: right;
    min-height: 1px;
  }

  .col-3 {
    box-sizing: border-box;
    width: 13.3333333333%;
    float: left;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    min-height: 1px;
  }

  .row {
    max-width: 1060px;
    margin: 0 auto;
  }

  .row {
    clear: both;
    width: 100%;
    float: left;
    display: block;
    min-height: 1px;
  }
  .thickline-top {
    border-top: 0.5em solid #202020;
  }
  .hairline {
    border-bottom: 0.2em solid #202020;
  }
  .thickline-top {
    border-top: 0.5em solid #202020;
  }
  .nutrition-panel .ingredients-heading {
    font-size: 13px;
    font-family: nimbusnovus-bold, sans-serif;
    overflow: hidden;
    clear: both;
    font-weight: 600;
  }

  .directions-warning .title {
    font-family: nimbusnovus-bold, sans-serif;
    padding: 1em 0 0.5em;
    font-size: 13px;
    font-weight: 600;
  }

  .font-s-small {
    font-size: 13px;
  }
  .hide,
  .no-display {
    display: none;
  }
  .indent {
    margin-left: 5%;
    display: block;
  }
  @media (min-width: 840px) {
    margin: 0 0 1em;

    .panel-wrap {
      height: auto;
      overflow: visible;
    }

    .expand-btn,
    .show-more-mask {
      display: none;
    }
  }
`;
