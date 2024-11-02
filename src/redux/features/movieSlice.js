import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerKey: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerKey: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

export const movieReducer = moviesSlice.reducer;
export const { addMovies, addTrailerKey } = moviesSlice.actions;
