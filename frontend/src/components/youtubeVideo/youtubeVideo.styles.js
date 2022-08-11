import styled from "styled-components";

export const MainWrapper = styled.div`
  .video-wide-screen {
    padding-bottom: 56.25%;
  }
  .video-wrapper {
    position: relative;
    height: 0;
    margin-bottom: 15px;
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
