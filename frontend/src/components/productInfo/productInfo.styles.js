import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fff;
  border: 0;
  margin-bottom: 1em;

  .section-inner-wrap {
    padding: 15px;
    line-height: 1.735;
    font-style: normal;
    text-align: left;
    text-decoration: none;
    text-transform: none;
    margin: 0;
    position: relative;
    overflow: hidden;
  }

  p {
    margin-top: 0;
  }
  .section-inner-wrap p {
    margin-bottom: 1.5em;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .section-inner-wrap img {
    margin: 0 auto;
    display: block;
  }

  .section-inner-wrap img.full-width-mobile {
    max-width: calc(100% + 30px);
    margin: 0 -15px;
  }

  .section-inner-wrap h4,
  .section-inner-wrap h3 {
    line-height: 1.3em;
    margin: 0;
    padding: 0 0 0.3em;
  }

  .section-inner-wrap h3 {
    font-size: 2.25em;
  }

  .section-inner-wrap h4 {
    font-size: 1.5em;
  }
  @media (min-width: 600px) {
    .section-inner-wrap img.full-width-mobile {
      max-width: 100%;
      margin: 0 auto;
    }
  }
  @media (min-width: 1024px) {
    .section-inner-wrap {
      padding: 25px;
    }
  }
`;
