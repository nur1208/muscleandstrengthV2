import styled from "styled-components";

export const MainWrapper = styled.div`
  /* padding-bottom: 22px; */
  height: 100%;
  a:hover {
    color: #0687e6;
  }

  a:hover img,
  a:hover p {
    opacity: 0.9;
    transition: opacity 0.3s ease-in-out;
  }
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

  .product-link {
    background-color: transparent;

    text-decoration: none;
    cursor: pointer;
  }

  .product-link:hover {
    color: #0687e6;
  }
  .product-image {
    max-width: 120px;
  }

  .product-link:hover .icon,
  .product-link:hover img,
  .product-link:hover p {
    opacity: 0.9;
    transition: opacity 0.3s ease-in-out;
  }

  .image-wrap img {
    margin-bottom: 15px;
  }

  .product-name {
    list-style: none;
    text-align: center;
    line-height: 1.3;
    font-size: 15px;
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
  .before-discount {
    margin-bottom: -3px;
  }
  .before-discount .price {
    text-decoration: line-through;
    font-size: 15px;
    color: #d41313;
  }

  .stock-label {
    font-size: 9px;
    margin-top: 0.2em;
    margin-bottom: 0.6em;
    font-weight: 400;
  }
  .green {
    color: #079c3a;
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
  ${({ hasRating }) =>
    hasRating &&
    `
  
  
  @media (max-width: 839px) {
    // display: flex;

.height-setter{
      display: grid;
    grid-gap: 0 25px;
    grid-template-columns: 30% auto;
    align-items: start;
    grid-template-areas:
        "pictureG dynamicG"
        "pictureG infoG";
    height: 100%;
    background-color: #fff;
    position: relative;

}
.image-wrap{

  grid-area: pictureG;

}
    .dynamic-height {
     
      grid-area: dynamicG;
    }
 .product-info{

  grid-area: infoG;

}
    .product-name {
      text-align: inherit;
    }
    .button-wrap {
      justify-content: space-between!important;
      flex-wrap: nowrap;
    }

      button{
      
      font-size: 13px;
      padding: 0 5px;
      }

  }
  
  `}/* hasRating */
`;
