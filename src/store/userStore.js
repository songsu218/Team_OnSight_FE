import { createSlice } from "@reduxjs/toolkit";

let userInfo = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: null,
  },
  reducers: {
    setUserAllInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserAllInfo: (state) => {
      state.userInfo = null;
    },
  },
});
export const { setUserAllInfo, clearUserAllInfo } = userInfo.actions;
export default userInfo.reducer;
