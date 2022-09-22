import styled from "styled-components";

export const MainWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 1em;

  h1.hstyle-one {
    margin: 0 0 0.3em;
    padding: 0;
    clear: both;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  img {
    border-style: none;
  }

  .font-s-small {
    font-size: 13px;
  }
  .feature-header .last-updated {
    width: 100%;
    margin: 0.8em 0 1.4em;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 2em;
    }
  }
  @media (min-width: 500px) {
    .feature-header .last-updated {
      margin: 0;
      width: 50%;
      float: left;
    }
  }
`;
