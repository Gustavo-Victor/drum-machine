import { useSelector, useDispatch } from "react-redux"; 
import { useText, change } from "../../features/text/textSlice";
import { useBankMode, toggleBankMode } from "../../features/bankMode/bankModeSlice";
import { usePower, togglePower } from "../../features/power/powerSlice";
import ControlToggler from "../ControlToggler";
import Volume from "../Volume";
import Display from "../Display"; 
import "./style.scss"; 

export default function Controls() {
    const dispatch = useDispatch(); 
    const { powerOn } = useSelector(usePower); 
    const { bankModeOn } = useSelector(useBankMode); 
    const { value } = useSelector(useText); 


    const toggleDrumPower = () => {
        dispatch(togglePower());         
    }

    const toggleDrumBankMode = () => {
        if(bankModeOn === true) {
            dispatch(change("Heater Kit")); 
        } else {
            dispatch(change("Smooth Piano Kit"));
        }
        dispatch(toggleBankMode()); 
    }

    return (
        <div className="controls-container"> 
            <ControlToggler description="Power" toggle={toggleDrumPower} active={powerOn} />  
            <Display power={powerOn} text={value} />
            <Volume power={powerOn} />            
            <ControlToggler description="Bank" toggle={toggleDrumBankMode} active={bankModeOn} />
        </div>
    )
}