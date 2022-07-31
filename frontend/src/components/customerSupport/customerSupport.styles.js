import styled from "styled-components";

export const MainWrapper = styled.div`
  a {
    color: #fefefe;
    text-decoration: none;
  }

  a.title {
    margin-bottom: 5px;
  }

  .support-menu {
    padding: 2px 10px;
    background: #0063b3;
    border-radius: 20px;
  }

  .cell.shrink {
    flex: 0 0 auto;
  }

  .grid-x > .auto,
  .grid-x > .shrink {
    width: auto;
  }

  .support-menu .cell {
    padding: 0;
    font-size: 13px;
  }

  .cell.auto {
    flex: 1 1 0px;
  }

  .text-right {
    text-align: right;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
