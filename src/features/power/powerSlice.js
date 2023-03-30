import { createSlice } from "@reduxjs/toolkit"; 


const powerSlice = createSlice({
    name: "power",
    initialState: {
        powerOn: true
    }, 
    reducers: {
        togglePower(state) {
            state.powerOn = !state.powerOn; 
        }
    }
}); 

export const { togglePower } = powerSlice.actions; 
export const usePower = (state) => state.power; 
export default powerSlice.reducer; 
