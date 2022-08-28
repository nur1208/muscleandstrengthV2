import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 15em;
  margin: 0 auto;
  z-index: 0;

  .select-wrap {
    position: absolute;
    width: 99%;
    height: 100%;
    z-index: 1;
    opacity: 0.2;
    left: 1%;
  }

  .select-wrap .selector {
    width: 20%;
    float: left;
    height: 100%;
    cursor: pointer;
  }

  .rating {
    height: 75%;
    position: absolute;
    top: 9%;
    z-index: -1;
    max-width: 99%;
    background: #059;
    background: linear-gradient(to right, #fff 0, #059 1.5%);
  }

  .star-overlay {
    width: 101%;
    left: -0.5%;
    background-image: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/stars-svg-overlay.png);
    background-image: linear-gradient(transparent, transparent),
      url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/stars-svg-overlay.svg);
    background-size: 100% 100%;
    height: 0;
    padding: 0 0 25%;
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
    z-index: 0;
  }
`;
