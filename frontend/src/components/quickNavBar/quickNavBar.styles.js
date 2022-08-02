import styled from "styled-components";

export const MainWrapper = styled.div`
  .css-carousel-container {
    width: 100%;
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-scroll-snap-points-x: repeat(22.2222222222%);
    scroll-snap-points-x: repeat(22.2222222222%);
    -ms-scroll-snap-type: mandatory;
    scroll-snap-type: mandatory;
  }

  .css-carousel-container .slide {
    width: 22.2222222222%;
    flex-shrink: 0;
    height: 100%;
    scroll-behavior: smooth;
  }

  .quick-link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
  }

  .specials {
    color: #079c3a;
  }

  .quick-link-container span {
    font-size: 29px;
    border: 1px solid;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .quick-link-container .icon {
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .specials:before {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/deal-green.svg)
      0 0 / auto 100%;
  }

  .categories:before {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/categories-icon.svg)
      0 0 / auto 100%;
  }

  .quick-link-container span.brands:before {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/brand-icon.svg)
      0 0 / auto 100%;
    width: 36px;
    height: 36px;
  }

  .top-fifty:before {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/top-fifty-icon.svg)
      0 0 / auto 100%;
  }

  .clearance:before {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/clearance-icon.svg)
      0 0 / auto 100%;
  }
  .rewards-catalog:before {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/mns-rewards.svg)
      0 0 / auto 100%;
  }
  .quick-link-container span:before {
    content: "";
    width: 26px;
    height: 26px;
    margin-bottom: -2px;
    display: inline-block;
  }

  .quick-link-container .quick-link-title {
    font-size: 13px;
    color: #303030;
    text-align: center;
    font-weight: 500;
  }
  @media (min-width: 740px) {
    .css-carousel-container {
      -ms-scroll-snap-points-x: repeat(16.6666666667%);
      scroll-snap-points-x: repeat(16.6666666667%);
    }

    .css-carousel-container .slide {
      width: 16.6666666667%;
    }
  }
`;
