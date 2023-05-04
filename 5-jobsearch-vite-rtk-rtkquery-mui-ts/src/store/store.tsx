import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../consts/index";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    selectedCategory: -1,
    products: [],
    categories: [],
  },
  
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});
export const { setSelectedCategory } = mainSlice.actions;

export const apiSlice = createApi({
  reducerPath : "api",
  baseQuery : fetchBaseQuery({baseUrl : baseURL  }),
  endpoints : (builder) => ({
    getCategories : builder.query({
      query : () => "categories"
    }),
    getJobs : builder.query({
      query : () => "jobs"
    })
  })
})

console.log("this is", apiSlice)

export const {useGetCategoriesQuery , useGetJobsQuery} = apiSlice

export default configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    main: mainSlice.reducer,
  },
  middleware : (getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)  )
});

