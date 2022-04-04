import styled from 'styled-components'

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
`
const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    button{
        padding: 0;
        margin: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        font-size: 3ch;
    }
`

interface IAmountButton {
    state: number
    setState: any
}
export const AmountButton: React.FC<IAmountButton> = ({ state, setState }) => {
    const handleDecrease = () => setState(state - 1);
    const handleIncrease = () => setState(state + 1);
    return (
        <Container>
            <button onClick={handleDecrease}>-</button>
            <Counter>{state}</Counter>
            <button onClick={handleIncrease}>+</button>
        </Container>
    )
}