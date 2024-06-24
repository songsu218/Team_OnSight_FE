import { configureStore } from '@reduxjs/toolkit';

import userInfo from './userStore';
import searchPage from './searchStore';
import recordInfo from './recordStore';
import crewInfo from './crewStore';
import userAllinfo from './userAllStore';

export const store = configureStore({
  reducer: {
    user: userInfo,
    userAll: userAllinfo,
    searchPage: searchPage,
    record: recordInfo,
    crew: crewInfo,
  },
});

export default store;
