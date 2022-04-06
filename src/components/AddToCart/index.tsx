import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { IProduct } from "../../model/product";
import { AmountButton } from "../AmountButton";
import { Button } from "../RedButton"
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, updateProduct } from "../../store/sessionReducer";
import { RootState } from "../../store";

const Container = styled.div`
    margin-top:2rem;
    display:flex;
    align-items: center;
    gap: 2.5rem;
`

export const AddToCart: React.FC<IProduct> = (props) => {
    const [amount, setAmount] = useState<number>(1)
    const [disabled, setDisabled] = useState<boolean>(false)
    const dispatch = useDispatch()
    const userCart = useSelector((state: RootState) => state.sessionReducer.userCart)

    useEffect(() => {
        amount <= 0 ? setDisabled(true) : setDisabled(false);
        console.log(userCart)
    })

    const handleAddProduct = () => {
        const cartItem = userCart.find((e) => e.id === props.id);
        cartItem ?
            dispatch(updateProduct({ amount: amount, ...props }))
            :
            dispatch(addProduct({ amount: amount, ...props }))

    }
    return (
        <Container>
            <AmountButton state={amount} setState={setAmount} />
            <Button disabled={disabled} onClick={handleAddProduct}>Add to cart</Button>
        </Container>
    )
}