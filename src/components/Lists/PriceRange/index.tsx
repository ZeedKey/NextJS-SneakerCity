import { FC } from "react"
import { Range } from "../../Filter/Range"
import styled from "styled-components"
const Container = styled.div`
    grid-area: range;
`
export const PriceRangeList: FC = () => {
    return (
        <Container>
            <h4>Price range</h4>
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.15)", marginBottom: "1rem", padding: "1.5rem 0" }}>
                <Range />
            </div>
        </Container>
    )
}