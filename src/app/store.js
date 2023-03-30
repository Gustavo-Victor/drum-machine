import { configureStore } from "@reduxjs/toolkit"; 

import powerSlice from "../features/power/powerSlice"; 
import textSlice from "../features/text/textSlice"; 
import bankModeSlice from "../features/bankMode/bankModeSlice"; 
import volumeSlice from "../features/volume/volumeSlice"; 


const store = configureStore({
    reducer: {
        power: powerSlice, 
        bankMode: bankModeSlice, 
        text: textSlice, 
        volume: volumeSlice
    }
}); 

export default store; 
