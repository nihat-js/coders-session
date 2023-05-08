import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
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