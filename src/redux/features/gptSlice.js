import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    view: false,
    suggestedMovies: null,
    suggestedMoviesResult: null,
  },
  reducers: {
    switchPage: (state) => {
      state.view = !state.view;
    },
    addSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload.split(",");
    },
  },
});

export const { switchPage, addSuggestedMovies } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;
