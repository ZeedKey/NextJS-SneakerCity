import { useEffect } from "react";
import styled from "styled-components";

const Counter = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Open Sans Medium;
  color: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  button {
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    font-size: 3ch;
  }
`;

interface IAmountButton {
  state: number;
  setState: (value: number) => void;
}
export const AmountButton: React.FC<IAmountButton> = ({ state, setState }) => {
  const handleDecrease = () => (state <= 0 ? setState(1) : setState(state - 1));
  const handleIncrease = () => (state <= 0 ? setState(1) : setState(state + 1));

  useEffect(() => {
    if (state < 1) setState(1);
  }, [state, setState]);
  return (
    <Box>
      <button id="-" onClick={handleDecrease}>
        -
      </button>
      <Counter>{state}</Counter>
      <button id="+" onClick={handleIncrease}>
        +
      </button>
    </Box>
  );
};
