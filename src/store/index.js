import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import counterSlice from "./slices/counterSlice";
import userSlice from './slices/userSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    user:userSlice
  },
  preloadedState: {
    auth: {
      userToken: localStorage.getItem("token"),
    },
  },
});
