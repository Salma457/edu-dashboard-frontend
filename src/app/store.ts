import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import announcementsReducer from "../store/announcementSlice";
import quizReducer from "../store/quizSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
        quizzes: quizReducer,

     announcements: announcementsReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
