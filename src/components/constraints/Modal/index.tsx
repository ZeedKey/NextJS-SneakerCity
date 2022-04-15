import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { IProduct } from "../../../model/product";
import { useCart } from "../../hooks/useCart";
import { AmountButton } from "../AmountButton";
import { Button } from "../Button";
import { down } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { theme } from "../../../styles";

const Box = styled.div`
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background: #f5f5f5;
  overflow: hidden;
`;
const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;

  ${down("xl")} {
    grid-template-columns: none;
  }
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  ${down("xl")} {
    justify-content: center;
  }
`;
const Gallery = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;
const ImageBlock = styled.div`
  position: relative;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Aside = styled.div`
  background: white;
  height: 100vh;
  padding: 4rem;
`;
const Title = styled.h4`
  display: flex;
  justify-content: space-between;
`;
const TextHide = styled(Image)<{ isHidden: boolean }>`
  transform: ${({ isHidden }) =>
    isHidden ? "rotate(180deg)" : "rotate(0deg)"};
`;
const DescTitle = styled.div`
  cursor: pointer;
`;
const DescText = styled.p<{ isHidden: boolean }>`
  margin: 0;
  line-height: 24px;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  transition: all 0.1s;
  color: ${({ isHidden }) =>
    isHidden ? theme.colors.WHITE : theme.colors.GREY};
  height: ${({ isHidden }) => (isHidden ? "0%" : "fit-content")};
  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "none")};
`;
const IMAGE_GALLERY_ATTRS = {
  width: "250rem",
  height: "250rem",
};
const ICONS_ATTRS = {
  width: "15rem",
  height: "15rem",
  margin: "25px",
  style: { cursor: "pointer" },
};

interface IModalProps {
  product: IProduct;
  close: () => void;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const [amount, setAmount] = useState<number>(1);
  const [isTextHidden, setTextHidden] = useState<boolean>(false);
  const { cart, updateCart, pushToCart } = useCart();
  const isMobile = useBreakpoint(down("xl"));

  const handleClose = () => props.close();
  const handleHideText = () => setTextHidden(!isTextHidden);
  const handleAddProduct = () => {
    const cartItem = cart.find((e: IProduct) => e.id === props.product.id);
    const price: number = Math.round(props.product.price);
    const newCartItem = { amount: amount, ...props.product, price: price };

    cartItem ? updateCart(newCartItem) : pushToCart(newCartItem);
  };
  return (
    <Box>
      <Grid>
        <Gallery>
          <div>
            <Flexbox>
              <h1>{props.product.title}</h1>

              {isMobile ? (
                <Image
                  onClick={handleClose}
                  alt="icons_image"
                  src="/close.svg"
                  {...ICONS_ATTRS}
                />
              ) : (
                <Image alt="icon" src="/heart.svg" width={30} height={30} />
              )}
            </Flexbox>
            <p>{props.product.price}RWF</p>
          </div>
          <ImageBlock>
            <Image
              alt="product_image"
              src={props.product.image}
              {...IMAGE_GALLERY_ATTRS}
            />
          </ImageBlock>
        </Gallery>
        <Aside>
          <Title>
            <DescTitle onClick={handleHideText}>
              Description
              <span style={{ margin: "1rem" }}>
                <TextHide
                  isHidden={isTextHidden}
                  src="/textHid.svg"
                  {...ICONS_ATTRS}
                  alt="hideText"
                />
              </span>
            </DescTitle>
            {!isMobile ? (
              <Image
                onClick={handleClose}
                alt="icons_image"
                src="/close.svg"
                {...ICONS_ATTRS}
              />
            ) : (
              <Image alt="icon" src="/heart.svg" width={30} height={30} />
            )}
          </Title>
          <DescText isHidden={isTextHidden}>
            {props.product.description}
          </DescText>
          <Block>
            <AmountButton state={amount} setState={setAmount} />
            <Button onClick={handleAddProduct}>Add to cart</Button>
          </Block>
        </Aside>
      </Grid>
    </Box>
  );
};
