import { useEffect, useState } from "react";
import styled from "styled-components";
import { IProduct } from "../../../model/product";
import { useCart } from "../../hooks/useCart";
import { AmountButton } from "../AmountButton";
import Image from "next/image";
import { down } from "styled-breakpoints";
import { theme } from "../../../styles";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.BEIGE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 2rem;
  gap: 2rem;

  ${down("md")} {
    flex-direction: column;
    h3 {
      display: none;
    }
  }
`;
const Box = styled.div`
  display: flex;
`;
const Title = styled.h3`
  ${down("md")} {
    display: none;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20rem;
`;

export const CartItem: React.FC<IProduct> = (props) => {
  const [amount, setAmount] = useState<number>(props.amount || 1);
  const { cart, updateCart, setSum } = useCart();
  useEffect(() => {
    updateCart({ ...props, amount: amount });
    const sum: number = cart
      .map((e) => e?.price * e?.amount)
      .reduce((prev, next) => prev + next);
    setSum(sum);
  });

  return (
    <Container>
      <Box>
        <Image src={props.image} alt="item_image" width="85" height="85" />
        <div style={{ marginLeft: "2rem" }}>
          <Title>{props.title}</Title>
          <p>{props.price}RWF</p>
        </div>
      </Box>
      <Box>
        <AmountButton state={amount} setState={setAmount} />
      </Box>
      <Box>
        <h3 style={{ minWidth: "15rem", textAlign: "right" }}>
          {props.price * props.amount}RWF
        </h3>
      </Box>
    </Container>
  );
};
