import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { Button, Footer, Layout } from "../constraints";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  height: 80vh;
  @media (max-width: 1560px) {
    grid-template-columns: none;
  }
`;
const OrderBlock = styled.div`
  padding: 1rem 4rem;
`;
const Line = styled.p`
  display: flex;
  font-size: 1.49ch;
  justify-content: space-between;
`;
const Item = styled.h3`
  color: black;
`;

export const CartPage: React.FC = () => {
  const userCart = useSelector(
    (state: RootState) => state.sessionReducer.userCart
  );
  const totalSum = useSelector(
    (state: RootState) => state.sessionReducer.totalSum
  );
  return (
    <Layout>
      <Container>
        <div>
          <h2>Your shopping cart</h2>
          {userCart.map((e) => (
            <CartItem {...e} />
          ))}
        </div>
        <OrderBlock>
          <h3>Order summary</h3>
          <Line>
            <h3>Sub total</h3>
            <Item>{totalSum}RWF</Item>
          </Line>
          <Line>
            <h3>Delivery fee</h3>
            <Item>0 RWF</Item>
          </Line>
          <hr />
          <Line>
            <Item>{}</Item>
            <Item>{totalSum}RWF</Item>
          </Line>
          <Line style={{ marginTop: "1.5rem" }}>
            <Button>Proceed to checkout</Button>
          </Line>
          <p></p>
        </OrderBlock>
      </Container>
      <Footer />
    </Layout>
  );
};
