import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import counterSlice from "./slices/counterSlice";
import modalSlice from "./slices/modalSlice";
import userSlice from './slices/userSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    user:userSlice,
    modal: modalSlice
  },
  preloadedState: {
    auth: {
      userToken: localStorage.getItem("token"),
    },
  },
});
