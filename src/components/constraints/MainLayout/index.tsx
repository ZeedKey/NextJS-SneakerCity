import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Card, Footer, Layout, Loader, Search } from "..";
import { IProduct } from "../../../model/product";
import { DualRange } from "../Range";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  @media (max-width: 1340px) {
    grid-template-columns: none;
  }
`;
const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  overflow-y: scroll;
  height: 75vh;
  grid-template-columns: repeat(auto-fill, minmax(200px, max-content));
  grid-template-rows: repeat(auto-fill, minmax(300px, max-content));

  @media (max-width: 1340px) {
    height: 50vh;
  }
  @media (max-width: 768px) {
    height: 35vh;
  }
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
          <h4>Search</h4>
          <Search onChange={setSearchText} state={searchText} />
          <hr />
          <h4>Price</h4>
          <DualRange price={price} setPrice={setPrice} />
        </Box>
        <div>
          <h2>{props.title}</h2>
          <CardGrid>
            {filteredData.map((el: IProduct) => (
              <Card {...el} key={el.title} />
            ))}
          </CardGrid>
          <Footer />
        </div>
        {!props.isSuccess && <Loader />}
      </Grid>
    </Layout>
  );
};
