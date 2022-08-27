import styled from "styled-components";

export const MainWrapper = styled.div`
  .row {
    clear: both;
    width: 100%;
    float: left;
    display: block;
    min-height: 1px;
  }

  .row {
    max-width: 1060px;
    margin: 0 auto;
  }

  .form label,
  form label {
    text-align: left;
    font-size: 13px;
    float: left;
    margin-bottom: 10px;
    line-height: 1.1;
  }

  label {
    display: block;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.8;
    color: #303030;
  }

  .form .register-name .name-firstname label,
  .form .register-name .name-lastname label,
  .form .register-name .name-middlename label,
  .form .register-name .name-prefix label,
  form .register-name .name-firstname label,
  form .register-name .name-lastname label,
  form .register-name .name-middlename label,
  form .register-name .name-prefix label {
    display: block;
  }

  .edit-form .dob-wrap,
  .edit-form .gender-wrap,
  .register-form .dob-wrap,
  .register-form .gender-wrap {
    float: none;
    width: auto;
    margin: 0;
  }

  .dob-wrap .dob-day,
  .dob-wrap .dob-month {
    width: 30%;
    margin-right: 5%;
    float: left;
  }

  .dob-wrap .dob-year {
    width: 30%;
    float: left;
  }

  .dob-wrap {
    display: flex;
    flex-direction: column;
  }

  .customer-dob {
    display: flex;
  }

  select {
    box-sizing: border-box;
    width: 100%;
    height: 2.5625rem;
    margin: 0 0 0.625rem;
    padding: 0 0.9375rem 0 0.625rem;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.625;
    color: #303030;
    background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMzIgMjQiPjxwb2x5Z29uIHBvaW50cz0iMCwwIDMyLDAgMTYsMjQiIHN0eWxlPSJmaWxsOiByZ2IoMjIxLCAyMjEsIDIyMSkiPjwvcG9seWdvbj48L3N2Zz4=);
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    background-position: right center;
  }

  select:not([multiple]) {
    padding-top: 0;
    padding-bottom: 0;
  }

  .form label .required,
  form label .required {
    color: #d41313;
  }

  form label:after,
  form label:before {
    content: "";
    display: table;
  }

  .form label:after,
  form label:after {
    clear: both;
  }

  form p {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.0833333333%;
    padding-right: 2.0833333333%;
    color: #202020;
  }

  input[type="checkbox"],
  input[type="radio"] {
    float: left;
    width: 20px;
    margin: 0 5px 0 0;
    padding: 0;
    border-radius: 0;
  }

  .font-s-small {
    font-size: 13px;
  }

  form .required {
    color: #d41313;
  }

  .h6,
  h6 {
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;

    margin: 0;
    color: #059;

    text-align: center;

    font-weight: 600;
  }

  @media (min-width: 840px) {
    form p {
      margin-bottom: 15px;
    }
  }
  @media (min-width: 900px) {
    .edit-form .input-field-wrap {
      float: left;
      clear: left;
      width: 55%;
      margin-right: 5%;
    }
  }
`;
