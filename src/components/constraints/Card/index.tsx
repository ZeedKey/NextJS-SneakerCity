import Image from "next/image";
import styled from "styled-components";
import { IProduct } from "../../models/product";

const Box = styled.div`
  max-width: 200px;
  cursor: pointer;
`;
const Title = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.p`
`;
const CARD_IMG_ATTRS = {
  width: "200px",
  height: "200px",
  alt: "card_image",
};
export const Card: React.FC<any> = (props) => {
  return (
    <Box>
      <Image src={props.image} {...CARD_IMG_ATTRS} />
      <Title>{props.title}</Title>
      <Price>{props.price}</Price>
    </Box>
  );
};
