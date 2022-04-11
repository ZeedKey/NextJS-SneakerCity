import React, { FC, ReactNode } from "react"
import { Header } from "../Header"
import styled from "styled-components"

const PadContainer = styled.div`
    padding: 1.75rem 3.938rem;
    @media (max-width: 425px) {
        padding: 0.5rem;
  }
`

export const Layout: FC<ReactNode> = ({ children }) => {
    return (
        <>
            <Header />
            <PadContainer>
                {children}
            </PadContainer>
        </>
    )
}