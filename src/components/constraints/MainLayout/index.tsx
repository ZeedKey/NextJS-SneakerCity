import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Card, Footer, Layout, Loader, Search } from "..";
import { IProduct } from "../../../model/product";
import { DualRange } from "../Range";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 75%;
  @media (max-width: 1340px) {
    grid-template-columns: none;
  }
`;
const Title = styled.h3`
  margin-left: -8px;
`;
const CardGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(25rem, 15rem));
`;
const Box = styled.div`
  padding-right: 4rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

interface ILayoutPageProps {
  rawData: IProduct[];
  isSuccess: boolean;
  title: string;
}

export const LayoutPage: React.FC<ILayoutPageProps> = (props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [price, setPrice] = useState([0, 1000]);
  const filteredData = useMemo(() => {
    return (
      props.rawData?.filter(
        (el: IProduct) =>
          el.title.includes(searchText) &&
          el.price >= price[0] &&
          el.price <= price[1]
      ) ?? []
    );
  }, [props.rawData, searchText, price]);

  return (
    <Layout>
      <Grid>
        <Box>
          <Title>Search</Title>
          <Search onChange={setSearchText} state={searchText} />
          <hr />
          <Title>Price</Title>
          <DualRange price={price} setPrice={setPrice} />
        </Box>
        <div>
          <h2>{props.title}</h2>
          <CardGrid>
            {filteredData.map((el: IProduct) => (
              <Card {...el} key={el.id} />
            ))}
          </CardGrid>
          <Footer />
        </div>
        {!props.isSuccess && <Loader />}
      </Grid>
    </Layout>
  );
};
