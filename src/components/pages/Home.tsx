import { useEffect } from "react";
import { fakeAPI } from "../../store/api";
import { LayoutPage } from "../constraints";

export const HomePage: React.FC = () => {
  const [trigger, rawData] = fakeAPI.useLazyGetProductsQuery();
  useEffect(() => {
    trigger("");
  }, []);
  useEffect(() => {
    console.log(rawData);
  });
  return (
    <LayoutPage
      title={"New Arrivals"}
      rawData={rawData?.data ?? []}
      isSuccess={rawData.isSuccess}
    />
  );
};
