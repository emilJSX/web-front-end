import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.userToken = action.payload;
    },
    logout: (state) => {
      state.userToken = null;
    },
  },
});

export const useAuthSelector = (state) => Boolean(state.auth.userToken);

export const { setUserToken, logout } = authSlice.actions;

export default authSlice.reducer;
