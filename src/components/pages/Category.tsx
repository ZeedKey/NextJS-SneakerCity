import { useEffect } from "react";
import { fakeAPI } from "../../store/api";
import { LayoutPage } from "../constraints";
interface ICategoryPageProps {
  path: string;
}
interface IRoutesMatch {
  [x: string]: string;
}

export const CategoryPage: React.FC<ICategoryPageProps> = (props) => {
  const [trigger, rawData] = fakeAPI.useLazyGetProductsQuery();
  const routerMatch: IRoutesMatch = {
    "/Mens": `/category/men's clothing`,
    "/Womens": `/category/women's clothing`,
  };
  const title: string = props.path.replace("/", "");

  useEffect(() => {
    trigger(routerMatch[props.path] ?? "");
  }, [props.path]);

  return (
    <LayoutPage
      title={title}
      rawData={rawData?.data ?? []}
      isSuccess={rawData.isSuccess}
    />
  );
};
