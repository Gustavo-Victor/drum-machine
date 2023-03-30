import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: "text",
    initialState: {
        value: ""
    }, 
    reducers: {
        change(state, { payload }) {
            state.value = payload; 
        }
    }
}); 

export const { change } = textSlice.actions; 
export const useText = (state) => state.text; 
export default textSlice.reducer; 
