// src/store/quizSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuizzes, Quiz } from "../services/quizAPI";

interface QuizState {
  items: Quiz[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: QuizState = {
  items: [],
  status: "idle",
};

export const getQuizzes = createAsyncThunk("quizzes/fetchAll", async () => {
  return await fetchQuizzes();
});

const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizzes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuizzes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(getQuizzes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default quizSlice.reducer;
