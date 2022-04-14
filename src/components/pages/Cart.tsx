import styled from "styled-components";
import { CartItem, Footer, Layout } from "../constraints";
import { Button } from "../constraints/Button";
import { useCart } from "../hooks/useCart";
import { IProduct } from "../../model/product";

const Box = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  height: 80vh;
  @media (max-width: 1560px) {
    grid-template-columns: none;
  }
`;
const Block = styled.div`
  padding: 1rem 4rem;
`;
const Table = styled.p`
  display: flex;
  font-size: 1.49ch;
  justify-content: space-between;
`;
const Item = styled.h3`
  color: black;
`;
const Title = styled.h2`
  margin: 0 -8px;
  padding: 0;
`;

export const CartPage: React.FC = () => {
  const { cart, sum } = useCart();
  return (
    <Layout>
      <Box>
        <div>
          <Title>Your shopping cart</Title>
          {cart.map((element: IProduct) => (
            <CartItem {...element} key={element.id} />
          ))}
        </div>
        <Block>
          <h3>Order summary</h3>
          <Table>
            <h3>Sub total</h3>
            <Item>{sum}RWF</Item>
          </Table>
          <Table>
            <h3>Delivery fee</h3>
            <Item>0 RWF</Item>
          </Table>
          <hr />
          <Table>
            <Item>{}</Item>
            <Item>{sum}RWF</Item>
          </Table>
          <Table style={{ marginTop: "1.5rem" }}>
            <Button>Proceed to checkout</Button>
          </Table>
          <p></p>
        </Block>
      </Box>
      <Footer />
    </Layout>
  );
};
