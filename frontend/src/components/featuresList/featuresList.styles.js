import styled from "styled-components";

export const MainWrapper = styled.div`
  border-top: 1em solid #f5f5f5;
  background: #fff;
  font-size: 13px;
  margin-bottom: 1em;
  .features-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  ul {
    margin-top: 0;
  }

  .features-list li {
    flex: 0 0 25%;
  }

  .features-list li span.click-span {
    padding: 1em 0;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    display: block;
    background-color: transparent;
    line-height: inherit;
    color: #059;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
  }

  .features-list li .inner-icon {
    height: 1em;
    display: block;
    margin: 0 0 6px;
    font-size: 2em;
  }

  .features-list .new-line {
    display: block;
  }
  @media (min-width: 480px) {
    .features-list li .inner-icon {
      font-size: 2.2em;
    }
  }

  @media (min-width: 600px) {
    .features-list li .inner-icon {
      font-size: 2.4em;
    }
  }
  @media (min-width: 840px) {
    .features-list li .inner-icon {
      font-size: 2.5em;
    }
  }

  @media (min-width: 960px) {
    .features-list .new-line {
      display: inline;
    }
  }
`;

export const SvgWrapper = styled.span`
  ${({ childStyle }) => `svg{${childStyle}}`}
  svg {
    margin-bottom: 0;
  }
`;
