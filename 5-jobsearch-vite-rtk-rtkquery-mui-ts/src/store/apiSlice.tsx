import { createEntityAdapter } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { baseURL } from "../consts/index";

export const apiSlice = createEntityAdapter({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories",
    }),
    getJobs: builder.query({
      query: () => "jobs",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetJobsQuery } = apiSlice;
