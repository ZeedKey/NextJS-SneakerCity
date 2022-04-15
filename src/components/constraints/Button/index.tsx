import styled from "styled-components";
import { theme } from "../../../styles";

const StyledButton = styled.button`
  border: none;
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
  font-size: ${(props) => props.theme.fontSizes.REGULAR};
  padding: 12px 26px;
  color: ${(props) => props.theme.colors.WHITE};
  background-color: ${(props) => props.theme.colors.RED};
  cursor: pointer;
`;

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
export const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
