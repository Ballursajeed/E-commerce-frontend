import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { categoriesResponse, productResponse } from "../../types/api-types";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),
  endpoints: (builder) => ({
    latestProducts: builder.query<productResponse, string>({
      query: () => "latest",
    }),
    allProducts: builder.query<productResponse, string>({
      query: (id) => `admin-products?id=${id}`,
    }),
    categories: builder.query<categoriesResponse, string>({
      query: () => `categories`,
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
} = productAPI;
