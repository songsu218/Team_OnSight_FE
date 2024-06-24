import { configureStore } from '@reduxjs/toolkit';

import userInfo from './userStore';
import searchPage from "./searchStore";
import recordInfo from './recordStore';
 

export const store = configureStore({
  reducer: {
    user: userInfo,
    searchPage: searchPage,
    record: recordInfo,
  },
});

export default store;
