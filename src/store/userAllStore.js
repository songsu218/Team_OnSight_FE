import { createSlice } from '@reduxjs/toolkit';

const userAllInfo = createSlice({
  name: 'userAllInfo',
  initialState: {
    userAllInfo: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.userAllInfo = action.payload;
    },
  },
});

export const { setUsers } = userAllInfo.actions;
export default userAllInfo.reducer;
