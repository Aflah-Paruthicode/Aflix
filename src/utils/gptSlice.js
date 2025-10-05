import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearchEnable: false,
  },
  reducers: {
    changeGptSearchState: (state) => {
    state.isGptSearchEnable = !state.isGptSearchEnable;
    },
  },
});

export const { changeGptSearchState } = gptSlice.actions;

export default gptSlice.reducer;
