import { HomePageLayout } from "../HomePage/Layout";
import { CardList } from "../HomePage/Layout/Lists";
import { useFetch } from "../hooks/useFetch";

export const MensPage: React.FC = () => {
  const { getData,data } = useFetch();
  getData();
  return (
    <HomePageLayout>
      <CardList data={data} />
    </HomePageLayout>
  );
};
