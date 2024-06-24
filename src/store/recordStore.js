import { createSlice } from '@reduxjs/toolkit';

let recordInfo = createSlice({
  name: 'recordInfo',
  initialState: {
    recordInfo: [],
  },
  reducers: {
    setRecordAllInfo: (state, action) => {
      state.recordInfo = action.payload;
    },
    clearRecordAllInfo: (state) => {
      state.recordInfo = [];
    },
  },
});
export const { setRecordAllInfo, clearRecordAllInfo } = recordInfo.actions;
export default recordInfo.reducer;
