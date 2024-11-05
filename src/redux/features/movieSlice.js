import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerKey: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerKey: (state, action) => {
      state.trailerKey = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const movieReducer = moviesSlice.reducer;
export const {
  addMovies,
  addTrailerKey,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
