import { useEffect, useState } from "react";
import styled from "styled-components";
import { IProduct } from "../../../model/product";
import { useCart } from "../../hooks/useCart";
import { AmountButton } from "../AmountButton";
import Image from "next/image";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 2rem;
  gap: 2rem;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
      .map((e) => e.price * e.amount)
      .reduce((prev, next) => prev + next);
    setSum(sum);
  });

  return (
    <Container>
      <Box>
        <Image src={props.image} alt="item_image" width="85" height="85" />
        <div style={{ marginLeft: "2rem" }}>
          <Title>{props.title}</Title>
          <h4>{props.price}RWF</h4>
        </div>
      </Box>
      <Box>
        <AmountButton state={amount} setState={setAmount} />
      </Box>
      <Box>
        <h3 style={{ minWidth: "5rem" }}>{props.price * props.amount}RWF</h3>
      </Box>
    </Container>
  );
};
