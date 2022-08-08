import styled from "styled-components";

export const MainWrapper = styled.div`
  ${({ isOpen }) =>
    isOpen ? "display: block;" : "display: none;"}

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2147483648;
  text-align: center;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  * {
    box-sizing: border-box;
  }

  .featherlight-content {
    z-index: 2147483649;

    position: relative;
    text-align: left;
    vertical-align: middle;
    display: inline-block;
    overflow: auto;
    padding: 25px 25px 0;
    border-bottom: 25px solid transparent;
    margin-left: 5%;
    margin-right: 5%;
    max-height: 95%;
    background: #fff;
    cursor: auto;
    white-space: normal;
  }
  @media only screen and (max-width: 1024px) {
    .featherlight-content {
      margin-left: 0;
      margin-right: 0;
      max-height: 98%;
      padding: 10px 10px 0;
      border-bottom: 10px solid transparent;
    }
  }

  .featherlight-content {
    -webkit-tap-highlight-color: transparent;
    border-radius: 15px;
    background: -webkit-linear-gradient(
      top,
      #059 19%,
      #059 19%,
      #fff 20%
    ) !important;
    border-color: #fff !important;
    padding: 0;
    max-width: 400px;
  }

  .featherlight-close-icon {
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    line-height: 25px;
    width: 25px;
    cursor: pointer;
    text-align: center;
    font-family: Arial, sans-serif;
    background: rgba(255, 255, 255, 0.3);
    color: #000;
    border: none;
    padding: 0;
  }

  .featherlight-content .featherlight-close-icon {
    background: rgba(0, 85, 153, 0.3);
    color: #fff;
    width: 39px;
    height: 35px;
    padding-top: 4px;
    border-radius: 0 0 0 15px;
  }

  .featherlight-inner {
    display: block;
  }

  .featherlight-content .features-list-lightbox-image-wrap {
    text-align: center;
    background-color: #059;
    line-height: 0;
  }

  .featherlight-content .features-list-lightbox-image-wrap img {
    max-width: 100%;
    height: auto;
  }

  .featherlight-content .features-list-lightbox-content-wrap {
    padding: 1.5em 1.5em 0;
  }

  .featherlight-content .features-list-lightbox-title {
    font-size: 1.8em;
    font-family: nimbusnovus-bold, sans-serif;
    padding: 0 0 0.1em;
  }

  .featherlight-content p {
    margin-bottom: 15px;
    font-size: 0.8rem;
  }
`;
