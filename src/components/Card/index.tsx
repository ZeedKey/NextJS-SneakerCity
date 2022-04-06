import Image from "next/image";
import { FC, useState } from "react";
import styled from "styled-components"
import { IProduct } from "../../model/product";
import { ProductModal } from "../ProductModal";

const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: end;
`

export const Card: FC<IProduct> = (props) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const doOpenModal = () => setOpen(true);
    const doCloseModal = () => setOpen(false);
    return (
        <>
        {isOpen && <ProductModal {...props} onClose = {doCloseModal}/>}
        <Container onClick={doOpenModal}>
            <Image src={props.image} alt="brandName" width="270" height="300" style={{ background: "rgba(0, 0, 0, 0.04);" }} />
            <h5 style={{ marginBottom: "-8px", width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{props.title}</h5>
            <h5 style={{ color: 'rgba(0, 0, 0, 0.65)' }}>{parseInt(props.price)}, {props.price * 100 % 1000}RWF</h5>
        </Container>
        </>
    )
}