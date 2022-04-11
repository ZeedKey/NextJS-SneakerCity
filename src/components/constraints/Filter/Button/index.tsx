import { FC } from "react";
import styled from "styled-components";
const SizeButton = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Open Sand Medium;
  color: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(0, 0, 0, 0.15);
  max-width: 18px;
  max-height: 18px;
  margin: 0 0.75rem 0.75rem 0;
  border-radius: 8px;
`;

export const ButtonSize: FC<any> = ({ number }) => {
  return (
    <SizeButton>
      <h4>{number}</h4>
    </SizeButton>
  );
};
