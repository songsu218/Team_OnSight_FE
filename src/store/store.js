import { configureStore } from "@reduxjs/toolkit";

import userInfo from "./userStore";

export const store = configureStore({
  reducer: {
    user: userInfo,
  },
});

export default store;
