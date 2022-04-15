import { useMemo, useState } from "react";
import styled from "styled-components";
import { Card, Footer, Layout, Loader, Search } from "..";
import { IProduct } from "../../../model/product";
import { DualRange } from "../Range";
import { down } from "styled-breakpoints";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 75%;
  ${down("xl")} {
    grid-template-columns: none;
  }
`;
const CardGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 25rem));
  grid-template-rows: repeat(auto-fill, minmax(0, 2rem));
  ${down("md")} {
    grid-template-columns: repeat(2, minmax(0, 25rem));
  }
`;
const Box = styled.div`
  padding-right: 4rem;

  ${down("md")} {
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
        <Box >
          <h3>Search</h3>
          <Search onChange={setSearchText} state={searchText} />
          <hr />
          <h3>Price</h3>
          <DualRange price={price} setPrice={setPrice} />
        </Box>
        <div>
          <h3>{props.title}</h3>
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
