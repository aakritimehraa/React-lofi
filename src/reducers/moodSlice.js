import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
    name:'mood',
    initialState:{
        moodMode: 'chill'
    },
    reducers: {
        changeMoodStatus: (state , action) => {
            state.moodMode = action.payload
        }
    }
})


export const {changeMoodStatus} = moodSlice.actions
export default moodSlice.reducer