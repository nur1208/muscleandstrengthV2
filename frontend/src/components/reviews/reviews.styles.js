import styled from "styled-components";

export const MainWrapper = styled.div`
  .review-wrapper {
    clear: both;
  }

  .viewmore-loadingmessage {
    z-index: 10;
    /* display: none; */
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

  .button-columns {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 0) and (max-width: 740px) {
    .btn-row-mobile {
      display: flex;
      justify-content: space-evenly;
    }

    .btn-row-mobile button {
      padding: 0 20px;
      margin: 0;
      font-size: 13px;
      flex: 0 0 calc(50% - 30px);
    }
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
