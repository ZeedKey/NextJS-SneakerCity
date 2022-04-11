import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IProduct } from "../../../../model/product";
import { RootState } from "../../../../store";
import { addProduct, updateProduct } from "../../../../store/sessionReducer";
import { AmountButton, Button } from "../../../constraints";

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const AddToCart: React.FC<IProduct> = (props) => {
  const [amount, setAmount] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const userCart = useSelector(
    (state: RootState) => state.sessionReducer.userCart
  );

  useEffect(() => {
    amount <= 0 ? setDisabled(true) : setDisabled(false);
  });

  const handleAddProduct = () => {
    const cartItem = userCart.find((e) => e.id === props.id);
    const price: string = `${Math.round(props.price)}`;
    cartItem
      ? dispatch(updateProduct({ amount: amount, ...props, price: price }))
      : dispatch(addProduct({ amount: amount, ...props, price: price }));
  };
  return (
    <Container>
      <AmountButton state={amount} setState={setAmount} />
      <Button disabled={disabled} onClick={handleAddProduct}>
        Add to cart
      </Button>
    </Container>
  );
};
