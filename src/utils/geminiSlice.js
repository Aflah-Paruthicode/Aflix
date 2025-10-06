import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    isGeminiSearchEnable: false,
  },
  reducers: {
    changeGeminiSearchState: (state) => {
    state.isGeminiSearchEnable = !state.isGeminiSearchEnable;
    },
  },
});

export const { changeGeminiSearchState } = geminiSlice.actions;

export default geminiSlice.reducer;
