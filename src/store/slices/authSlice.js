import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = null;
    },
  },
});

export const useAuthSelector = (state) => Boolean(state.auth.userData);

export const { setUserData, logout } = authSlice.actions;

export default authSlice.reducer;
