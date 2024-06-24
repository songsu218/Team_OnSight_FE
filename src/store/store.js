import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./userStore";
import searchPage from "./searchStore";

export const store = configureStore({
  reducer: {
    user: userInfo,
    searchPage: searchPage,
  },
});

export default store;
