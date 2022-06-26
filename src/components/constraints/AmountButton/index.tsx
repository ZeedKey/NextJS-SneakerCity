import { useEffect } from "react";
import styled from "styled-components";

const Counter = styled.input`
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${(props) => props.theme.fontWeights.BOLD};
  color: ${(props) => props.theme.colors.BLACK};
  border: 1px solid  ${(props) => props.theme.colors.GREY};
  border-radius: 8px;
  width: 1rem;
  height: 1rem;

  margin: 0 1rem;
  appearance: none;
}
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
    font-size: ${(props) => props.theme.fontSizes.MEDIUM};
  }
`;

interface IAmountButton {
  state: number;
  setState: (value: number) => void;
}
export const AmountButton: React.FC<IAmountButton> = ({ state, setState }) => {
  const handleDecrease = () => setState(state - 1);
  const handleIncrease = () => setState(state + 1);
  const handlePriceChangeManually = (e: React.FormEvent<HTMLInputElement>) =>
    setState(parseInt(e.currentTarget.value));

  useEffect(() => {
    if (state < 1 || state > 100 || !state) setState(1);
  }, [state, setState]);
  return (
    <Box>
      <button id="-" onClick={handleDecrease}>
        -
      </button>
      <Counter
        value={state}
        onInput={handlePriceChangeManually}
        type="number"
      />
      <button id="+" onClick={handleIncrease}>
        +
      </button>
    </Box>
  );
};
