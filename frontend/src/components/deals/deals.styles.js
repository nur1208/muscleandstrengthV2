import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  margin-bottom: 1em;
  background-color: #fff;
  border: 0;
  .section-title {
    font-family: nimbusnovus-medium, sans-serif;
    color: #fff;
    font-size: 16px;
    background-color: #059;
    text-align: center;
    padding: 8px 15px;
    text-transform: uppercase;
    position: relative;
  }

  .deals-coupons-title {
    background-color: #079c3a;
    text-align: center;
    font-size: 16px;
    font-family: nimbusnovus-medium, sans-serif;
    font-weight: 500;
  }

  .section-inner-wrap {
    padding: 15px;

    overflow: hidden;
    font-size: 13px;
  }

  ${({ isSolo }) =>
    isSolo &&
    `
  
    .section-inner-wrap {
        padding-bottom: 1em
    }

    .swiper {
        margin-bottom: 0;
    }

  `}

  .deal-image {
    margin-right: 15px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .deal-info-wrap {
    width: 67%;
    margin-right: 2%;
  }

  .deal-label {
    padding: 5px 10px;
    display: inline-block;
    font-size: 16px;
    color: #079c3a;
    border: 1px solid #079c3a;
    text-transform: uppercase;
    border-radius: 2px;
  }

  .deal-desc {
    margin-top: 0.5em;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
  }

  .arrow-btn {
    z-index: 10;
    font-family: nimbusnovus-bold, sans-serif;
    display: none;
    background-color: #059;
    color: #fff;
    position: absolute;
    top: 50%;
    padding: 0.5em 0.5em 0.7em;
    font-size: 18px;
    border-radius: 2px;
    cursor: pointer;
  }

  .deals-coupons-section .deals-next {
    display: none;
  }
  .arrow-btn.arrow-next {
    right: -0.5em;
  }
  @media (min-width: 600px) {
    .swiper {
      margin: 1em 3em 3em;
    }
  }
  @media (min-width: 840px) {
    .deals-next {
      display: block;
      top: 35%;
      background-color: #059;
      color: #fff;
    }
  }
  @media (min-width: 1024px) {
    .swiper {
      margin: 20px 3em 0 11em;
    }
    .deals-coupons-title {
      position: absolute;
      left: 0;
      top: 0;
      text-align: left;
      width: auto;
      border-radius: 0 0 1.2em;
      float: left;
      padding: 0.5em 1.5em 0.6em 0.9em;
    }

    .deal-image {
      flex: 0 0 15%;
    }

    .deal-info-wrap {
      flex: 0 0 80%;
    }
  }
`;
