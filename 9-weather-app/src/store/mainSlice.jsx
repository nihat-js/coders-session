import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  savedLocations : ["Baku","Istanbul","",],
  latestSearchs : [],
}
const mainSlice = createSlice({
  name :"main",
  initialState,
  reducers : {
      addToSavedLocation : (state,action) => {
        state.savedLocations.push(action.payload)
      },
      removeFromSavedLocation : (state,action) => {
        console.log("Tester")
      },
      addToLatestSearchs : (state,action) => {

      },
      removeFromLatestSearchs : (state,action) => {

      }

  }
})


export const {mainReducer} = mainSlice.reducer

export const { addToLatestSearchs,addToSavedLocation,removeFromLatestSearchs,removeFromSavedLocation } = mainSlice.actions