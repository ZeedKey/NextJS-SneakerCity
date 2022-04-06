import { Button } from "../../Filter/Button"
import styled from "styled-components"

const ButtonContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
`
const Container = styled.div`
    grid-area: buttons;
`

export const SizeButtonList = () => {
    const sizes = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46]
    return (
        <Container>
            <h4>Sizes</h4>
            <ButtonContainer>
                {sizes.map(e => <Button number={e} key={e} />)}
            </ButtonContainer>
        </Container>
    )
}