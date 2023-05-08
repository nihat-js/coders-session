import { configureStore,  } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { mainSlice } from "./mainSlice";





export default configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    main: mainSlice.reducer,
  },
  // middleware : (getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)  )
});

