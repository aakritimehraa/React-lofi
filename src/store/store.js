import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../reducers/toggleSlice';
import rainReducer from '../reducers/rainSlice';
import playerReducer from '../reducers/playerSlice';
import moodReducer from '../reducers/moodSlice';
import changeVolumeReducer from '../reducers/changeVolumeSlice';

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    rain: rainReducer,
    player: playerReducer,
    mood: moodReducer,
    changeVolume: changeVolumeReducer
  },
});
