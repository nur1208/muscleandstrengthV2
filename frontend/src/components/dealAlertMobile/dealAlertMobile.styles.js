import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 0 15px 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    /* text-align: right; */
    margin-top: 0.5%;
    display: block;
  }
  button {
    margin-left: 8px;
    flex: 0 0 auto;
  }
  @media (min-width: 840px) {
    display: none;

    .text {
      font-size: 18px;
    }

    button {
      margin-left: 15px;
      flex: 0 0 200px;
    }
  }

  ${({ isDealAlert }) =>
    isDealAlert
      ? ""
      : `
  display: none !important;
  `}
`;
