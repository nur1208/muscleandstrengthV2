import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;

  background-color: #fff;
  padding: 1em;
  border: 0;
  overflow: hidden;

  .ship-to-block {
    position: absolute;
    right: 6px;
    top: 13px;
  }

  .ship-to-block .ship-to-wrapper {
    width: 65px;
    height: 22px;
    position: relative;
  }

  .svg_flag {
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    width: 1.3333333333em;
    line-height: 1em;
  }

  .svg_flag-hk {
    background-image: url(/images/hk.svg);
  }

  .ship-to-block .svg_flag {
    position: absolute;
    right: 17px;
    top: -5px;
    bottom: 10px;
    width: 28px;
    line-height: 20px;
    background-position: right bottom;
  }

  .svg_flag:before {
    content: " ";
  }

  .ship-to-block .svg-express-delivery {
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/express-delivery.svg)
      0 0 / auto 100%;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .product-image {
    padding-bottom: 10px;
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 940px) {
    .product-image {
      max-width: 400px;
      padding-bottom: 15px;
      width: 40%;
      float: left;
    }
  }

  @media (min-width: 1280px) {
    .product-image {
      max-width: 400px;
      padding-bottom: 0;
      width: 40%;
      float: left;
    }
  }
`;
