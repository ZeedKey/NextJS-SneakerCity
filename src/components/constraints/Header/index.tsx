import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem 3.938rem;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    padding: 0.5rem;
  }
`;
const NavList = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    align-items: center;
    gap: 2rem;
    flex-direction: column;
  }
`;
const Item = styled.div`
  display: flex;
  cursor: pointer;
`;
const Brand = styled.h1`
  display: flex;
  margin: -8px;
  cursor: pointer;
`;
const size = {
  width: "25px",
  height: "25px",
};

export const Header: React.FC = () => {
  const router = useRouter();
  const toHome = () => router.push("/");
  const toCart = () => router.push("/Cart");
  const fetchPage = (e: React.FormEvent) => router.push(e.currentTarget.id);

  return (
    <NavBar>
      <Brand onClick={toHome}>
        <Image {...size} src="/logo.svg" alt="logo" />
        <span style={{ marginLeft: 5 }}>SC.</span>
      </Brand>
      <NavList>
        <Item id="/" onClick={fetchPage}>
          All
        </Item>
        <Item id="/Mens" onClick={fetchPage}>
          Men
        </Item>
        <Item id="/Womens" onClick={fetchPage}>
          Women
        </Item>
      </NavList>
      <NavList style={{ flexDirection: "row" }}>
        <Image {...size} src="/cart.svg" alt="cart" onClick={toCart} />
        <Image {...size} src="/heart.svg" alt="heart" />
        <Image {...size} src="/user.svg" alt="user" />
      </NavList>
    </NavBar>
  );
};
