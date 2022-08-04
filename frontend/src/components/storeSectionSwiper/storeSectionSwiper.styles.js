import styled from "styled-components";

export const MainWrapper = styled.div`
  h2.grey-stripe {
    color: #303030;
    margin-bottom: 6px;
    font-size: 16px;
  }

  .grey-stripe,
  .left-title {
    position: relative;
    width: 100%;
    max-width: 1300px;
    text-transform: uppercase;
    padding: 15px 0 10px 15px;
    border-bottom: 1px solid #eee;
    color: #303030;
    margin: 0;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;
  }
  .swiper-slide {
    height: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTI3LDIyTDI3LDIyTDUsNDRsLTIuMS0yLjFMMjIuOCwyMkwyLjksMi4xTDUsMEwyNywyMkwyNywyMnonIGZpbGw9JyMwMDU1OTknLz48L3N2Zz4=);
    right: 10px;
    left: auto;
  }

  .swiper-button-next.swiper-button-black,
  .swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTI3LDIyTDI3LDIyTDUsNDRsLTIuMS0yLjFMMjIuOCwyMkwyLjksMi4xTDUsMEwyNywyMkwyNywyMnonIGZpbGw9JyMwMDAwMDAnLz48L3N2Zz4=);
  }
  .swiper-button-prev.swiper-button-black,
  .swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTAsMjJMMjIsMGwyLjEsMi4xTDQuMiwyMmwxOS45LDE5LjlMMjIsNDRMMCwyMkwwLDIyTDAsMjJ6JyBmaWxsPScjMDAwMDAwJy8+PC9zdmc+);
  }

  .swiper-button-next,
  .swiper-button-prev {
    transition: opacity 0.3s ease-in-out;
    opacity: 0.1;
    border: 2px solid #0687e6;
    border-radius: 50%;
    background-color: #fff;
    width: 50px;
    height: 50px;
    background-size: 20px 40px;
  }

  &:hover .swiper-button-next,
  .swiper-button-next:hover,
  &:hover .swiper-button-prev,
  .swiper-button-prev:hover {
    opacity: 1;
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 0.1;
    cursor: auto;
    pointer-events: none;
    border-color: #ddd;
  }

  @media (min-width: 840px) {
    .swiper-button-next {
      right: 1px;
    }
  }
  /* @media print, screen and (min-width: 52.5em) {
    .mns-carousel .height-setter {
      height: 100%;
    }
  } */
`;
