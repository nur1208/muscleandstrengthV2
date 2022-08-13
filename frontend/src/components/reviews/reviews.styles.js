import styled from "styled-components";

export const MainWrapper = styled.div`
  .review-wrapper {
    clear: both;
  }

  .viewmore-loadingmessage {
    z-index: 10;
    display: none;
    text-align: center;
    margin: auto;
  }

  .main-content img {
    max-width: 100%;
    height: auto;
  }

  img {
    border-style: none;
  }

  @media (min-width: 480px) {
    .button-columns button:nth-child(1) {
      float: left;
    }

    .button-columns button:nth-child(2) {
      float: right;
    }
    button {
      width: 49%;
    }
  }
`;
