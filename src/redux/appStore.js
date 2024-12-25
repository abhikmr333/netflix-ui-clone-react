import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { movieReducer } from "./features/movieSlice";
import { gptReducer } from "./features/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});

export default appStore;
