import {configureStore} from "@reduxjs/toolkit"
import {mainReducer} from "./mainSlice"
import {todoReducer }from "./todoSlice"
export const store = configureStore({

   reducer : {
      main : mainReducer,
      // todo : todoReducer
   }
})