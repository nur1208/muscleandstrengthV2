import styled from "styled-components";

export const MainWrapper = styled.div`
  .search-form-wrapper {
    position: relative;
  }
  .search-form-wrapper {
    margin: 0 0 5px 10px;
  }

  .visually-hidden {
    display: none;
  }

  input {
    height: 36px;
    margin-bottom: 0;
    font-size: 13px;
  }

  .search-input-cleaner {
    display: none;
    position: absolute;
    right: 3em;
    top: 50%;
    cursor: pointer;
    line-height: 0;
    height: 0;
  }

  .search-button {
    position: absolute;
    right: -1px;
    top: 0;
    width: 45px;
    height: 100%;
    padding: 0;
    font-size: 30px;
    border: 0;
    background-color: #0687e6;
    border-radius: 0 2px 2px 0;
  }

  .search-button svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 64em) {
    input {
      height: 40px;
    }
  }
`;
