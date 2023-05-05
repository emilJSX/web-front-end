import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfoData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserInfoData } = userSlice.actions;

export default userSlice.reducer;
