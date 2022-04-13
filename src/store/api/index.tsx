import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct } from "../../model/product";

export const fakeAPI = createApi({
  reducerPath: "fakeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], string>({
      query: (path: string) => ({
        url: `${path}`,
        method: "GET",
      }),
    }),
  }),
});
