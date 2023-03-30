import { createSlice } from "@reduxjs/toolkit"; 


const bankModeSlice = createSlice({
    name: "bankMode",
    initialState: {
        bankModeOn: false
    }, 
    reducers: {
        toggleBankMode(state) {
            state.bankModeOn = !state.bankModeOn; 
        }
    }
}); 

export const { toggleBankMode } = bankModeSlice.actions; 
export const useBankMode = (state) => state.bankMode; 
export default bankModeSlice.reducer; 
