import { Modal } from "../Modal"
import styled from "styled-components"
import { SizeButtonList } from "../Lists/SizeButtons"
import Image from "next/image"
import { AddToCart } from "../AddToCart"
import { IProduct } from "../../model/product"

interface IModal {
    title: string
    description?: string
    image: string
}
interface IContainer {
    left?: boolean
}

const Container = styled.div<IContainer>`
    background: ${({ left }) => left ? "rgba(0, 0, 0, 0.04)" : "white"};
    padding: 4rem;
`
const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const ContainerBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Desc = styled.p`
    color: grey;
    margin:0;
    padding-bottom:1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`


export const ProductModal: React.FC<IProduct> = (props) => {
    return (
        <Modal>
            <Container left>
                <ContainerHeader>
                    <h1>{props.title}</h1>
                    <Image src="/heart.svg" width="30" height="30" alt="productBrand" />
                </ContainerHeader>
                <ContainerBody>
                    <Image src={props.image} width="300" height="300" alt="productBrand" />
                </ContainerBody>
            </Container>
            <Container>
                <h4>Description</h4>
                <Desc>{props.description}</Desc>
                <SizeButtonList />
                <AddToCart {...props}/>
            </Container>
        </Modal>
    )
}