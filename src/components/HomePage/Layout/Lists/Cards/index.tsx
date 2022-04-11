import styled from "styled-components";
import { IProduct } from "../../../../../model/product";
import { Loader } from "../../../../constraints";
import { Card } from "../../Card";

const CardContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, 13.75rem);
  margin-left: 4rem;
`;

const Container = styled.div`
  grid-area: cards;
  overflow-x: hidden;
  height: 80vh;
`;
export const CardList: React.FC<any> = (props) => {
  return (
    <Container>
      <CardContainer>
        {!props.data.isFetching &&  !props.data.isLoading && props.data.data.map((prod: IProduct) => <Card {...prod} key={prod.id} />)}
      </CardContainer>
      {props.data.isLoading && <Loader />}
    </Container>
  );
};
