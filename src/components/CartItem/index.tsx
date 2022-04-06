import styled from 'styled-components'
import { IProduct } from '../../model/product'
import Image from 'next/image'
import { AmountButton } from '../AmountButton'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { RootState } from '../../store'
const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.04);
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 2rem;
`
const Title = styled.h3`
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 25rem;
`

export const CartItem: React.FC<IProduct> = (props) => {
    const [amount, setAmount] = useState<number>(props.amount || 1);
    const userCart = useSelector((state: RootState) => state.sessionReducer.userCart)
    // useEffect(()=>{

    // }, [amount])

    return (
        <Container>
            <div style={{ display: 'flex' }}>
                <Image src={props.image} alt="item_image" width="85" height="85" />
                <div style={{ marginLeft: '2rem' }}>
                    <Title>{props.title}</Title>
                    <h4>{parseInt(props.price)}, {props.price * 100 % 1000}RWF</h4>
                </div>
            </div>
            <div>
                <AmountButton state={amount} setState={setAmount} />
            </div>
            <div>
                <h3>{props.price * amount}</h3>
            </div>
        </Container>
    )
}