import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 0.3em 0.5em 0.4em;
  background-color: #eee;
  float: left;
  border-right: 1px solid #ddd;
  font-size: 19px;

  .rating-box {
    position: relative;
    width: 6em;
    max-width: 100%;
    z-index: 0;
  }

  .rating-box .star-overlay {
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

  .rating-box .star-overlay.gray-bg {
    background-image: url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/stars-svg-overlay-gray.png);
    background-image: linear-gradient(transparent, transparent),
      url(https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/stars-svg-overlay-gray.svg);
  }

  .rating-box .rating {
    height: 75%;
    position: absolute;
    top: 9%;
    z-index: -1;
    max-width: 99%;
    background: #059;
    background: linear-gradient(to right, #fff 0, #059 1.5%);
  }
`;
