import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import {down} from 'styled-breakpoints'
const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem 4.55rem;
  align-items: center;
  ${down("md")} {
    align-items: center;
    gap: 2rem;
    flex-direction: column;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const NavList = styled.div`
  display: flex;
  gap: 2rem;

  ${down("md")} {
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
        <Item id="/Jewelery" onClick={fetchPage}>
          Jewelery
        </Item>
        <Item id="/Electronics" onClick={fetchPage}>
          Electronics
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
