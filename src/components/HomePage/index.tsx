import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useFetch } from "../hooks/useFetch";
import { HomePageLayout } from "./Layout";
import { CardList } from "./Layout/Lists";


export const HomePage: React.FC = () => {
    const {getData} = useFetch()
    useEffect(()=>{
        const [trigger, result] = getData();
        trigger('')
        console.log(result)
    },[])
    const userData = useSelector((store: RootState) => store.apiReducer.userData);
    return (
        <HomePageLayout>
            <CardList data={userData}/>
        </HomePageLayout>
    );
};
