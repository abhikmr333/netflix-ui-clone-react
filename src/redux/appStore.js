import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";

const appStore = configureStore({
  reducer: { userReducer },
});

export default appStore;
