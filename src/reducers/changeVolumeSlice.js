import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    volumeValue: 50,
    riverVolume: 0,
    fireVolume: 0,
    trafficVolume: 0
};

const changeVolumeSlice = createSlice({
    name: 'changeVolume',
    initialState,
    reducers: {
        changeVolume: (state, action) => {
            state.volumeValue = action.payload;
        },
        changeRiverVolume: (state, action) => {
            state.riverVolume = action.payload;
        },
        changeFireVolume: (state, action) => {
            state.fireVolume = action.payload;
        },
        changeTrafficVolume: (state, action) => {
            state.trafficVolume = action.payload;
        }
    }
});

export const {changeVolume , changeRiverVolume , changeFireVolume , changeTrafficVolume} = changeVolumeSlice.actions
export default changeVolumeSlice.reducer