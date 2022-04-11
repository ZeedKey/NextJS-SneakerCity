import styled from "styled-components";
import Image from "next/image";
import { IProduct } from "../../../../model/product";
import { Modal } from "../../../constraints";
import { AddToCart } from "../AddToCart";
import { useState } from "react";

interface IModal extends IProduct {
  onClose: any;
}
interface IContainer {
  left?: boolean;
  isHidden?: boolean;
}

const Container = styled.div<IContainer>`
  background: ${({ left }) => (left ? "rgba(0, 0, 0, 0.04)" : "white")};
  padding: 4rem;
  #TextHide {
    transform: ${({ isHidden }) =>
      isHidden ? "rotate(0deg)" : "rotate(180deg)"};
  }
`;
const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ContainerBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;
const Desc = styled.p<any>`
  margin: 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  transition: all 1s;
  color: ${(props) => (props.isHidden ? "white" : "grey")};
  height: ${(props) => (props.isHidden ? "0%" : "10rem")};
  visibility: ${(props) => (props.isHidden ? "hidden" : "none")};
  overflow-y: scroll;
`;

export const ProductModal: React.FC<IModal> = (props) => {
  const [isTextHidden, setTextHidden] = useState<boolean>(false);
  const doHideText = () => setTextHidden(!isTextHidden);
  return (
    <Modal>
      <Container left>
        <ContainerHeader>
          <Title>
            {props.title}
            <Image src="/heart.svg" width="30" height="30" alt="productBrand" />
          </Title>
        </ContainerHeader>
        <ContainerBody>
          <Image
            src={props.image}
            width="300"
            height="300"
            alt="productBrand"
          />
        </ContainerBody>
      </Container>
      <Container isHidden={isTextHidden}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ display: "flex", gap: 10 }}>
            Description
            <Image
              id="TextHide"
              src="/textHid.svg"
              width="15"
              height="15"
              alt="productBrand"
              onClick={doHideText}
            />
          </h4>
          <Image
            src="/close.svg"
            width="15"
            height="15"
            alt="productBrand"
            onClick={props.onClose}
          />
        </div>
        <Desc isHidden={isTextHidden}>{props.description}</Desc>
        <AddToCart {...props} />
      </Container>
    </Modal>
  );
};
