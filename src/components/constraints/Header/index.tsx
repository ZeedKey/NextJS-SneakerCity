import styled from "styled-components";
import Image from "next/image";

const Box = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-between;

  ul {
    cursor: pointer;
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }
`;
const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Brand = styled.span`
  font-size: 3.5ch;
  font-weight: bold;
  margin-left: 0.5rem;
`;
const LOGO_ATTR = {
  alt: "logo",
  src: "/logo.svg",
  height: 50,
  width: 50,
};
const ICONS_SIZE = {
  height: 25,
  width: 25,
};
export const Header: React.FC = () => {
  return (
    <Box>
      <Logo>
        <Image {...LOGO_ATTR} />
        <Brand>SC</Brand>
      </Logo>
      <ul>
        <li>All</li>
        <li>Mens</li>
        <li>Womens</li>
      </ul>
      <ul>
        <li>
          <Image alt="cart" src="/cart.svg" {...ICONS_SIZE} />
        </li>
        <li>
          <Image alt="heart" src="/heart.svg" {...ICONS_SIZE} />
        </li>
        <li>
          <Image alt="user" src="/user.svg" {...ICONS_SIZE} />
        </li>
      </ul>
      {/* <hr/> */}
    </Box>
  );
};
