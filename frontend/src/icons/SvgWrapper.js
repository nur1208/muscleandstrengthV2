import styled from "styled-components";

export const SvgWrapper = styled.span`
  ${({ childStyle }) => `svg{${childStyle}}`}
  svg {
    margin-bottom: 0;
  }
`;
