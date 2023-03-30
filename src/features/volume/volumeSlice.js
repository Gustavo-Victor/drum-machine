import { createSlice } from "@reduxjs/toolkit"; 


const volumeSlice = createSlice({
    name: "volume",
    initialState: {
        value: 25
    }, 
    reducers: {
        change(state, { payload }){
            state.value = payload; 
        }
    }
});


export const { change } = volumeSlice.actions;
export const useVolume = (state) => state.volume; 
export default volumeSlice.reducer; 