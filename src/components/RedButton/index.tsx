import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    padding: 0.65rem 2rem;
    border: none;
    font-family: Open Sans SemiBold;
    font-size: 1rem;
    color: ${(props)=>props.disabled ? 'black' : 'white'};
    background-color: ${(props)=>props.disabled ? 'grey' : '#D90429'};
    cursor: pointer;
    transition: 0.25s all;
`

export const Button: React.FC<any> = (props) => {
    return (
        <StyledButton onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </StyledButton>
    )
}