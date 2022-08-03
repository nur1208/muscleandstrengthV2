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
  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .mns-carousel {
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
    padding: 12px 81px 12px 30px;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .grid-margin-x {
    margin-left: -0.3125rem;
    margin-right: -0.3125rem;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .mns-carousel.hybrid-carousel-grid .swiper-wrapper {
    width: auto;
  }

  .margin-bottom-none .grid-x {
    margin-bottom: -10px;
  }

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
    margin-bottom: 10px;

    background-color: #fff;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 0.625rem);
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }
  .mns-carousel .swiper-slide {
    height: auto;
  }
  .mns-carousel .carousel-cell.cell {
    background: #fff;
    text-align: center;
    margin-bottom: 0;
  }
  @media (min-width: 840px) {
    .mns-carousel {
      padding: 15px 19px;
    }

    .cell {
      margin-bottom: 15px;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    .grid-margin-x {
      margin-left: -0.46875rem;
      margin-right: -0.46875rem;
    }

    .grid-margin-x > .cell {
      width: calc(100% - 0.9375rem);
      margin-left: 0.46875rem;
      margin-right: 0.46875rem;
    }

    .medium-up-6 > .cell {
      width: 16.6666666667%;
    }

    .grid-margin-x.medium-up-6 > .cell {
      width: calc(16.6666666667% - 0.9375rem);
    }
  }

  @media (min-width: 1024px) {
    .mns-carousel.hybrid-carousel-grid .cell.carousel-cell {
      margin-bottom: 25px;
    }
  }
`;
