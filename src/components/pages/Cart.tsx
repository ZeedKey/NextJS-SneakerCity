import styled from "styled-components";
import { CartItem, Footer, Layout } from "../constraints";
import { Button } from "../constraints/Button";
import { useCart } from "../hooks/useCart";
import { IProduct } from "../../model/product";
import { down } from "styled-breakpoints";
import { theme } from "../../styles";

const Box = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  height: 80vh;
  ${down("xxl")} {
    grid-template-columns: none;
  }
`;
const Block = styled.div`
  padding: 1rem 4rem;
`;
const Table = styled.p`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.SMALL};
  justify-content: space-between;
`;
const Item = styled.h3`
  color: ${(props) => props.theme.colors.BLACK};
`;
const Title = styled.h2`
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
