import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fakeAPI } from "../../store/api";
import { changeData, changeUserData } from "../../store/apiReducer";

export const useFetch = () => {
  const router = useRouter();
  const apiData = useSelector((store: RootState) => store.apiReducer.apiData);
  const dispatch = useDispatch();
  const path: string = router.asPath;
  const routeMatch: any = {
    "/": fakeAPI.useLazyGetAllProductsQuery(),
    "/Womens": fakeAPI.useLazyGetWomenProductsQuery(),
    "/Mens": fakeAPI.useLazyGetMenProductsQuery(),
  };
  return {
    getData: () => {
      return routeMatch[path];
    },
    data: {
      ...apiData,
    },
  };
};
