
import { fakeAPI } from '../../../store/api'
import { Card } from '../../Card';
import { Loader } from '../../Loader';
import styled from "styled-components"
import { IProduct } from '../../../model/product';

const Container = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, 13.75rem);
    margin-left: 4rem;
`
export const CardList = () => {
    const { data, isLoading, isFetching, isError } = fakeAPI.useGetAllProductsQuery('');
    return (
        <>
            <Container>
                {data && data.map((prod: IProduct) => <Card {...prod} key={prod.id}/>)}
            </Container>
            {isFetching && <Loader />}
        </>
    )
}