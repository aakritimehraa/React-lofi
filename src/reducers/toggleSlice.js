import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    mode: 'day',
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'day' ? 'night' : 'day';
    },
  },
});

export const { toggleMode } = toggleSlice.actions;
export default toggleSlice.reducer;
