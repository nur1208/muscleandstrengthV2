import styled from "styled-components";

export const MainWrapper = styled.div`
  form.fstyle-one {
    padding: 1em;
    margin-bottom: 1em;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
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

  label {
    display: block;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.8;
    color: #303030;
  }

  form label {
    text-align: left;
    font-size: 13px;
    float: left;
    margin-bottom: 10px;
    line-height: 1.1;
  }

  .form .name-firstname label,
  .form .name-lastname label,
  .form .name-middlename label,
  .form .name-prefix label,
  form .name-firstname label,
  form .name-lastname label,
  form .name-middlename label,
  form .name-prefix label {
    display: none;
  }
  form .required {
    color: #d41313;
  }

  .form.fstyle-one .section-break,
  form.fstyle-one .section-break {
    width: 100%;
    height: 1em;
    float: left;
    clear: both;
  }

  .form .required-tag,
  form .required-tag {
    color: #d41313;
    float: left;
    display: block;
    position: absolute;
    margin-left: -0.7em;
    font-size: 11px;
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

  .font-s-small {
    font-size: 13px;
  }
  @media (min-width: 400px) {
    form.fstyle-one {
      padding: 1em;
      border-right: 1px solid #ddd;
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }

    .form.fstyle-one .col-right,
    form.fstyle-one .col-right {
      float: right;
      width: 46%;
      margin: 2%;
    }

    form.fstyle-one .col-left {
      float: left;
      width: 46%;
      margin: 2%;
    }

    .form.fstyle-one .col-full,
    form.fstyle-one .col-full {
      margin: 2%;
      clear: both;
      float: left;
      width: 96%;
    }
  }
`;
