import Image from "next/image";
import { FC } from "react";
import styled from "styled-components"

const Container = styled.div`

`

export const Card: FC<any> = ({ title, price, image }) => {
    return (
        <Container>
            <Image src={image} alt="brandName" width="300" height="300" />
            <h6>{title}</h6>
            <h4 style={{ color: 'rgba(0, 0, 0, 0.65)' }}>{price}</h4>
        </Container>
    )
}