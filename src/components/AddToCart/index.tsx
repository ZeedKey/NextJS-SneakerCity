import React, { useState } from "react"
import styled from "styled-components"
import { IProduct } from "../../model/product";
import { AmountButton } from "../AmountButton";
import { Button } from "../RedButton"
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from "../../store/sessionReducer";
import { RootState } from "../../store";

const Container = styled.div`
    margin-top:2rem;
    display:flex;
    align-items: center;
    gap: 2.5rem;
`

export const AddToCart: React.FC<IProduct> = (props) => {
    const [amount, setAmount] = useState<number>(1)
    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.sessionReducer.userCart)
    console.log(count)

    const handleAddProduct = () => {
        const times = new Array(amount).fill(0);
        times.map((e)=>dispatch(addProduct(props)))
        console.log(count)
    }
    return (
        <Container>
            <AmountButton state={amount} setState={setAmount} />
            <Button onClick={handleAddProduct}>Add to cart</Button>
        </Container>
    )
}