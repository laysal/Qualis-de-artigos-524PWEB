import styled from "styled-components";

export default styled.h1`
  color: ${({ reverse }) => (reverse ? "#f9a826" : "#2f2f2f")};
  font-weight: bold;
  font-size: ${({ botao }) => (botao ? "18px" : "24px")};
  text-transform: uppercase;
  text-align: center;
`;
