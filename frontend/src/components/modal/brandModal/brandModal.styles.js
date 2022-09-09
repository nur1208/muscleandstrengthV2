import styled from "styled-components";

export const MainWrapper = styled.div`
  display: block;
  width: auto;
  min-height: 118px;
  max-height: 643px;
  height: auto;

  overflow: auto !important;
  text-align: center;

  .brand-image,
  p {
    margin-bottom: 10px;
  }

  .brand-image img {
    max-width: 50% !important;
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  p {
    text-align: left !important;
  }

  .video-wrapper {
    /* position: relative;
    height: 0; */
    margin-bottom: 15px;
  }

  .video-wide-screen {
    /* padding-bottom: 56.25%; */
  }
  @media (min-width: 840px) {
    .brand-image,
    p {
      margin-bottom: 15px !important;
    }
  } ;
`;
