import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  savedLocations : ["Baku","Istanbul",],
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
        state.savedLocations = state.savedLocations.filter(x => x != action.payload )
      },
      addToLatestSearchs : (state,action) => {
        state.latestSearchs.push(action.payload)
        
      },
      removeFromLatestSearchs : (state,action) => {
        state.latestSearchs = state.latestSearchs.filter(x => x != action.payload )
      }

  }
})



export const { addToLatestSearchs,addToSavedLocation,removeFromLatestSearchs,removeFromSavedLocation } = mainSlice.actions
export const mainReducer = mainSlice.reducer