import { createSlice } from '@reduxjs/toolkit';

const rainSlice = createSlice({
  name: 'rain',
  initialState: {
    status: 'norain', 
  },
  reducers: {
    setRain: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setRain } = rainSlice.actions;
export default rainSlice.reducer;
