import styled from "styled-components";

export const MainWrapper = styled.div`
  ${({ isOpen }) =>
    isOpen
      ? ""
      : `
    display:none !important;
  `}

  .ui-dialog {
    outline: 0;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #ddd;
    position: fixed;
    top: 30px;
    height: auto;
    width: 480px;
    left: 434.5px;
    display: block;
    z-index: 101;
  }
  .ui-widget-overlay {
    z-index: 100;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .ui-widget-overlay {
    background: rgba(0, 0, 0, 0.5);
    filter: Alpha(Opacity=30);
  }

  .ui-dialog .ui-dialog-content {
    position: relative;
    border: 0;
    background: 0 0;
    overflow: visible !important;
    background: #fff;
    display: block;
    width: auto;
    min-height: 118px;
    max-height: 611px;
    height: auto;
  }
  #secure-notice p {
    text-align: center;
    margin-bottom: 10px;
  }
  #secure-notice img {
    max-width: 250px;
  }

  #secure-notice img {
    max-width: 250px;
  }
  img {
    border-style: none;
  }
  #secure-notice h4 {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  #secure-notice p.content {
    font-size: 0.7rem;
    text-align: start;
  }
  .close-icon {
    position: absolute;
    z-index: 9999;
    top: 5px;
    right: 5px;
    line-height: 25px;
    width: 25px;
    cursor: pointer;
    text-align: center;
    font-family: Arial, sans-serif;
    background: rgba(255, 255, 255, 0.3);
    color: #000;
    border: none;
    padding: 0;
    font-size: 1.8rem;
  }

  ${({ customStyle }) => (customStyle ? customStyle : "")}

  @media (min-width: 840px) {
    .ui-dialog {
      padding: 15px;
    }
  }
`;
