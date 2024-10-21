import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
