import Image from "next/image";
import styled from "styled-components";

const Head = styled.p`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;
const FooterStyled = styled.footer`
  margin: 5rem 0 0 0;
`;
const Icons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 15px;
`;
const Tail = styled.div`
  display: flex;
  margin: -24px 0 32px 0;
  justify-content: space-between;
`;

interface IFooterProps {}
export const Footer: React.FC<IFooterProps> = () => {
  return (
    <FooterStyled>
      <hr />
      <Head>
        Don’t missout on once-in-a-while-deals:
        <Icons>
          <Image src="/twitter.svg" width="40" height="40" alt="productBrand" />
          <Image src="/inst.svg" width="40" height="40" alt="productBrand" />
          <Image
            src="/facebook.svg"
            width="40"
            height="40"
            alt="productBrand"
          />
        </Icons>
      </Head>

      <Tail>
        <p>Support line: +250 788 467 808</p>
        <p>Copyright 2021 © Sneaker City ltd</p>
      </Tail>
    </FooterStyled>
  );
};
