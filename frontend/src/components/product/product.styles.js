import styled from "styled-components";

export const MainWrapper = styled.div`
  .height-setter {
    height: 100%;
  }

  .image-wrap {
    padding: 0;
    text-align: center;
    display: block;
  }

  .image-wrap {
    max-width: 120px;
    padding-top: 8px;
    margin-left: auto;
    margin-right: auto;
  }

  .product-image {
    max-width: 120px;
  }

  .image-wrap img {
    margin-bottom: 15px;
  }

  .product-name {
    font-size: 16px;
    display: block;
    line-height: 1.3;
    color: #303030;
  }

  .product-info {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .mns-label {
    padding: 0 8px;
    background-color: #888;
    border-radius: 2px;
    font-size: 11px;
    font-family: nimbusnovus, sans-serif;
    font-weight: 500;
    line-height: 24px;
    color: #fff;
    text-shadow: 1px 1px 0 #077f32;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mns-label {
    width: calc(100% - 16px);
  }

  .mns-label {
    margin-bottom: 4px;
    display: inline-block;
  }

  .mns-label.lbl-deal {
    background-color: #079c3a;
  }

  .mns-label.lbl-deal:before {
    content: "";
    width: 12px;
    height: 12px;
    margin-right: 6px;
    margin-bottom: -2px;
    display: inline-block;
    background: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/css/svg/intermediate-svg/deal-white.svg)
      0 0 / auto 100%;
  }

  .price-box {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    color: #059;
    padding-bottom: 6px;
  }

  .price-box .price {
    font-size: 18px;
    font-family: nimbusnovus-bold, sans-serif;
    color: #059;
    display: block;
  }

  .button-wrap {
    margin-bottom: 0;
    width: 100%;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 600px) {
    .price-box {
      padding-bottom: 10px;
    }
  }
  @media (min-width: 840px) {
    .image-wrap {
      padding: 0;
      text-align: center;
      display: block;
    }

    .product-image {
      max-width: 120px;
    }

    .grid-products-wrapper .product-info {
      position: absolute;
      width: 100%;
      bottom: 0;
    }

    .button-wrap {
      bottom: 20px;
    }
  }
`;
