import styled from "styled-components";
import { Footer, Layout } from "../..";
import { PriceRangeList, Search } from "./Lists";
const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  @media (max-width: 1340px) {
    grid-template-columns: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
export const HomePageLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Container>
        <div>
          <Search />
          <PriceRangeList />
        </div>
        <div>
          {children}
          <Footer />
        </div>
      </Container>
    </Layout>
  );
};
