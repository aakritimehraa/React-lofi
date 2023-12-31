import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        isPlaying: false,
        currentTrackIndex:0
    },
    reducers: {
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        },
        nextTrack: (state) => {
            state.currentTrackIndex +=1
        },
        prevTrack: (state) => {
            state.currentTrackIndex -=1
        }

    }
})

export const {play , pause , nextTrack , prevTrack} = playerSlice.actions
export default playerSlice.reducer