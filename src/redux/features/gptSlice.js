import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    view: false,
  },
  reducers: {
    switchPage: (state) => {
      state.view = !state.view;
    },
  },
});

export const { switchPage } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;
