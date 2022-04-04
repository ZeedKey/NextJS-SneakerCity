import styled from "styled-components"

const Container = styled.div`
    position: fixed;
`

export const Range = () => {
    return(
        <Container>
            <input type="range"/>
            {/* <input type="range"/> */}
        </Container>
    )
}