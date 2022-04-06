import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { CartItem } from "../CartItem"
import { Footer } from "../Footer"
import { Layout } from "../Layout"
import styled from 'styled-components'

const Container = styled.div`
    display:grid;
    grid-template-columns: 80% 20%;
`
const OrderBlock = styled.div`
    padding: 1rem 4rem;
`
const Line = styled.p`
    display:flex;
    font-size: 1.49ch;
    justify-content: space-between;
`
const Item = styled.h3`
    color: black;
`

export const CartPage: React.FC = () => {
    const userCart = useSelector((state: RootState) => state.sessionReducer.userCart)
    return (
        <Layout>
            <Container>
                <div>
                    <h2>Your shopping cart</h2>
                    {
                        userCart.map((e) => <CartItem {...e} />)
                    }
                </div>
                <OrderBlock>
                    <h3>Order summary</h3>
                    <Line>
                        <h3>Sub total</h3>
                        <Item>{}</Item>
                    </Line>
                    <Line>
                        <h3>Delivery fee</h3>
                        <Item>0 RWF</Item>
                    </Line>
                    <hr />
                    <p></p>
                </OrderBlock>
            </Container>
            <Footer />
        </Layout>
    )
}