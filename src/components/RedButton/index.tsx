import React from "react"
import styled from "styled-components"
const StyledButton = styled.button`
    padding: 0.65rem 2rem;
    border: none;
    font-family: Open Sans SemiBold;
    font-size: 1rem;
    color: white;
    background-color: #D90429;
    cursor: pointer;
`

export const Button: React.FC<any> = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}