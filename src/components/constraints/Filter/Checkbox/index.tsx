import { FC } from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0.875rem 0;
    gap: 5px;
`
export const Checkbox: FC<any> = ({brand}) => {
    return(
        <Container>
            <input type="checkbox"/>
            <label>{brand}</label>
        </Container>
    )
}