import { configureStore } from '@reduxjs/toolkit';

import userInfo from './userStore';
import recordInfo from './recordStore';

export const store = configureStore({
  reducer: {
    user: userInfo,
    record: recordInfo,
  },
});

export default store;
