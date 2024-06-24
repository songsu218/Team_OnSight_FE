import { createSlice } from '@reduxjs/toolkit';

const crewInfo = createSlice({
  name: 'crewInfo',
  initialState: {
    crewInfo: [],
  },
  reducers: {
    setCrewAllInfo: (state, action) => {
      state.crewInfo = action.payload;
    },
  },
});

export const { setCrewAllInfo } = crewInfo.actions;
export default crewInfo.reducer;
