import Image from "next/image";
import styled from "styled-components";

const Deals = styled.p`
  display: flex;
  align-items: center;
  margin:32px 0;
`;
const Support = styled.p`
  margin: -24px 0;
`;
const Icons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 15px;
`;

interface IFooterProps {}
export const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer>
      <hr />
      <Deals>
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
      </Deals>
      <Support>Support line: +250 788 467 808</Support>
    </footer>
  );
};
