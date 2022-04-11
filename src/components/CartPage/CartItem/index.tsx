import styled from "styled-components";
import { IProduct } from "../../../model/product";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../store";
import { AmountButton } from "../../constraints";
import { updateProduct, updateTotalSum } from "../../../store/sessionReducer";

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
  const userCart = useSelector(
    (state: RootState) => state.sessionReducer.userCart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateProduct({ ...props, amount: amount }));
    const sum: any = userCart
      .map((e) => e.price * e.amount)
      .reduce((prev, next) => prev + next);
    dispatch(updateTotalSum(sum));
  });

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Image src={props.image} alt="item_image" width="85" height="85" />
        <div style={{ marginLeft: "2rem" }}>
          <Title>{props.title}</Title>
          <h4>{props.price}RWF</h4>
        </div>
      </div>
      <div>
        <AmountButton state={amount} setState={setAmount} />
      </div>
      <div>
        <h3 style={{ minWidth: "5rem" }}>{props.price * props.amount}RWF</h3>
      </div>
    </Container>
  );
};
