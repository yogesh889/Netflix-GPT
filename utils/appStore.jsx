import { configureStore } from "@reduxjs/toolkit";
import  userSliceReducer  from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesReducer,
  }, 
});
export default appStore;
