import styled from "styled-components"
import Image from "next/image"

const Container = styled.div`

    @keyframes rotation {
        0% {
            transform: rotate(2turn);
        }
    }

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    background: rgba(196, 196, 196, 0.3);
    justify-content: center;
    align-items: center;

    img{
    animation: 10s rotation;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    }
`

export const Loader = () => {
    return (
        <Container>
            <Image src='/loader.svg' width="75" height="75" alt="loader" />
        </Container>
    )
}