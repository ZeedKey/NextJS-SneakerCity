import styled from "styled-components";
import { Layout, Search } from "../..";
import { Card } from "../../constraints/Card";
import { Modal } from "../../constraints/Modal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 1rem 2rem;
`;
const CardGrid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fill, 200px);
`;

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <Grid>
        <div>
          <h4>Search</h4>
          <Search />
        </div>
        <div>
          <h3>New Arrivals</h3>
          <CardGrid>
            <Card image="/loader.svg" />
            <Card image="/loader.svg" />
            <Card image="/loader.svg" />
            <Card image="/loader.svg" />
            <Card image="/loader.svg" />
            <Modal/>
          </CardGrid>
        </div>
      </Grid>
    </Layout>
  );
};
