import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { movieReducer } from "./features/movieSlice";

const appStore = configureStore({
  reducer: { user: userReducer, movies: movieReducer },
});

export default appStore;
