import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const urlAPI = `${process.env.REACT_APP_API_URL}`;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlAPI }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ page, rows, sort, order }) => `products?page=${page}&rows=${rows}&sortBy=${sort}&orderBy=${order}`,
    }),
  }),
});

export const { useGetProductQuery } = productsApi;
