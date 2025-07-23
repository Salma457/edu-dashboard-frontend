// src/store/quizSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuizzes = createAsyncThunk("quizzes/fetchAll", async () => {
  const res = await axios.get("http://localhost:5000/api/quizzes");
  return res.data;
});

const quizSlice = createSlice({
  name: "quizzes",
  initialState: {
    items: [],
    status: "idle",
  },
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
