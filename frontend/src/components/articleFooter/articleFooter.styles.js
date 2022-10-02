import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .node-email-subscribe {
    margin-bottom: 25px;
    padding: 15px;
    background: #f5f5f5;
    border-top: 5px solid #059;
  }

  p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }
  label {
    display: block;
    margin: 0;
    font-size: 0.7777777778rem;
    font-weight: 400;
    line-height: 1.8;
    color: #0a0a0a;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="checkbox"],
  [type="file"],
  [type="radio"] {
    margin: 0 0 0.8888888889rem;
  }
  form input[name="contact_me_by_fax_only"],
  form input[name="fields_lname"] {
    display: none;
  }

  .visually-hidden {
    display: none;
  }

  .grid-x {
    justify-content: space-between;
  }

  select {
    box-sizing: border-box;
    width: 100%;
    height: 2.3333333333rem;
    margin: 0 0 0.8888888889rem;
    padding: 0.4444444444rem 1.3333333333rem 0.4444444444rem
      0.4444444444rem;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #e6e7e8;
    border-radius: 2px;
    background-color: #fefefe;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzMyJyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMzIgMjQnPjxwb2x5Z29uIHBvaW50cz0nMCwwIDMyLDAgMTYsMjQnIHN0eWxlPSdmaWxsOiByZ2IoMTM4LCAxMzgsIDEzOCknPjwvcG9seWdvbj48L3N2Zz4=);
    background-origin: content-box;
    background-position: right -0.8888888889rem center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  }
  select:not([multiple]) {
    padding-top: 0;
    padding-bottom: 0;
  }
  .text-center {
    text-align: center;
  }

  .about-author {
    margin-bottom: 25px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 2px;
  }
  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }
  .about-author img {
    width: 200px;
    margin: 0 0 15px;
    border-radius: 50%;
  }
  .h5,
  h5 {
    font-size: 1.1111111111rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 37.5em) {
    .about-author img {
      margin: 0 15px 0 0;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    .h5,
    h5 {
      font-size: 1.2222222222rem;
    }
  }
`;
