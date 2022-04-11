import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const fakeAPI = createApi({
    reducerPath: 'fakeAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/products",
    }),
    refetchOnReconnect: true,
    refetchOnFocus: true,
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => ({
                url: `/`,
                method: 'GET',
            })
        }),
        getWomenProducts: build.query({
            query: () => ({
                url: `/category/women's clothing`,
                method: 'GET',
            })
        }),
        getMenProducts: build.query({
            query: () => ({
                url: `/category/men's clothing`,
                method: 'GET',
            })
        }),
    })
})