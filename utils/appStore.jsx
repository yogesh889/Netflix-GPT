import { configureStore } from "@reduxjs/toolkit";
import  userSliceReducer  from "../utils/userSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});
export default appStore;
