import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAnnouncements } from "../services/announcementAPI";

export const getAnnouncements = createAsyncThunk(
  "announcements/getAnnouncements",
  async () => {
    return await fetchAnnouncements();
  }
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnnouncements.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnnouncements.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getAnnouncements.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default announcementSlice.reducer;
