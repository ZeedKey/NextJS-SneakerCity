import styled from "styled-components";
import Image from "next/image";
import { Modal } from "../Modal";
import { useState } from "react";
import { IProduct } from "../../../model/product";
const Box = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h4`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Price = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const PRODUCT_IMG_ATTRS = {
  width: "450rem",
  height: "450rem",
};
export const Card: React.FC<IProduct> = (props) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  return (
    <>
      {isModalOpen && <Modal product={{ ...props }} close={handleModalClose} />}
      <Box onClick={handleModalOpen}>
        <Image alt="product_image" src={props.image} {...PRODUCT_IMG_ATTRS} />
        <Title>{props.title}</Title>
        <Price>{props.price}RWF</Price>
      </Box>
    </>
  );
};
