import styled from "styled-components";

export default styled.p`
  color: ${({ dark }) => (dark ? "#2f2f2f" : "#f9a826")};
  font-weight: 300;
  font-size: 16px;
  text-align: ${({ duvida }) => (duvida ? "left" : "center")};
`;
