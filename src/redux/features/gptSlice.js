import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    view: null,
  },
  reducers: {
    switchPage: (state) => {
      return !state.view;
    },
  },
});
