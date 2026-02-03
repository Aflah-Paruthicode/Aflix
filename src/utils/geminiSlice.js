import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    isGeminiSearchEnable: false,
    geminiMovies: null,
  },
  reducers: {
    changeGeminiSearchState: (state) => {
      state.isGeminiSearchEnable = !state.isGeminiSearchEnable;
    },
    addGeminiMovieResults: (state, action) => {
      state.geminiMovies = action.payload;
    },
  },
});

export const { changeGeminiSearchState, addGeminiMovieResults } = geminiSlice.actions;

export default geminiSlice.reducer;
