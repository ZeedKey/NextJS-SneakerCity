import { HomePageLayout } from "../HomePage/Layout";
import { CardList } from "../HomePage/Layout/Lists";
import { useFetch } from "../hooks/useFetch";


export const WomensPage: React.FC = () => {
    const {getData} = useFetch()
    const data = getData();
    return (
        <HomePageLayout>
            <CardList data={data} />
        </HomePageLayout>
    );
};
