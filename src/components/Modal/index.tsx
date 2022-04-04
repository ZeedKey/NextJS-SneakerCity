import React, { FC } from "react"
import styled from "styled-components"

const ModalWindow = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    background: rgba(196, 196, 196, 0.3);
    z-index: 1;
`
const Body = styled.div`
    background: white;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 80% 20%;
`


export const Modal: FC<React.ReactNode> = ({ children }) => {
    return (
        <ModalWindow>
            <Body>
                {children}
            </Body>
        </ModalWindow>
    )
}