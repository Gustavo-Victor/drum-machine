import { useSelector, useDispatch } from "react-redux";
import { useVolume, change } from "../../features/volume/volumeSlice";
import "./style.scss"; 


export default function Volume({power}) {
    const dispatch = useDispatch(); 
    const {value} = useSelector(useVolume); 
    let disabledInput = !power ? true: false; 
    
    const changeVolume = (e) => {
        dispatch(change(Number(e.target.value))); 
    }

    return (
    <input disabled={disabledInput} className="input-volume" onChange={changeVolume} value={value | 0} type="range" id="volume" max="100" min="0" step="0.01" />
    ); 
}