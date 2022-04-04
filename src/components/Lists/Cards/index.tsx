
import { fakeAPI } from '../../../store/api'
import { Card } from '../../Card';
import { Loader } from '../../Loader';

export const CardList = () => {
    const { data, isLoading, isFetching, isError } = fakeAPI.useGetAllProductsQuery('');
    console.log(data)
    return (
        <>
            {!isLoading && data.map((prod: any) => <Card {...prod}/>)}
            {isLoading && <Loader />}
        </>
    )
}