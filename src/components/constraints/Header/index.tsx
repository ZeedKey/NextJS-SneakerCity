import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavBar = styled.header`
  display: flex;
  padding: 1.75rem 3.938rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    gap:2rem;
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
const ListItem = styled.div`
  display: flex;
`;
const Brand = styled.h1`
  display: flex;
  margin: -8px;
`;
const size = {
  width: "25px",
  height: "25px",
};

export const Header: React.FC = () => {
  const router = useRouter();
  const toHome = () => router.push("/");
  const toCart = () => router.push("/Cart");

  const fetchPage = (e: any) => router.push(e.target.id);

  return (
    <NavBar>
      <Brand onClick={toHome}>
        <img src="./logo.svg" alt="logo" />
        <span style={{ marginLeft: 5 }}>SC.</span>
      </Brand>
      <NavList>
        <ListItem id="/" onClick={fetchPage}>
          All
        </ListItem>
        <ListItem id="/Mens" onClick={fetchPage}>
          Men
        </ListItem>
        <ListItem id="/Womens" onClick={fetchPage}>
          Woman
        </ListItem>
      </NavList>
      <NavList style={{flexDirection: 'row'}}>
        <Image {...size} src="/cart.svg" alt="cart" onClick={toCart} />
        <Image {...size} src="/heart.svg" alt="cart" />
        <Image {...size} src="/user.svg" alt="cart" />
      </NavList>
    </NavBar>
  );
};
