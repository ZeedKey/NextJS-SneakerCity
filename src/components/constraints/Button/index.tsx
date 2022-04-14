import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0;
  border: none;
  font-weight: medium;
  font-size: 2.3ch;
  padding: 7px 23px;
  color: white;
  background-color: #d90429;
  cursor: pointer;
`;

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
export const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
