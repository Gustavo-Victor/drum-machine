import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/text/textSlice";
import { usePower } from "../../features/power/powerSlice";
import { useBankMode } from "../../features/bankMode/bankModeSlice";
import { useVolume } from "../../features/volume/volumeSlice"; 
import { useState, useEffect } from "react"; 
import DrumPad from "../DrumPad";
import "./style.scss"; 

const audioArr = [
    {
        title: "Heater-1",
        title2: "Chord-1",
        text: "Q",
        keyCode: 81,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
        title: "Heater-2",
        title2: "Chord-2",
        text: "W",
        keyCode: 87,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
        title: "Heater-3",
        title2: "Chord-3",
        text: "E",
        keyCode: 69,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
        title: "Heater-4",
        title2: "Shaker",
        text: "A",
        keyCode: 65,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
        title: "Clap",
        title2: "Open-HH",
        text: "S",
        keyCode: 83,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
        title: "Open-HH",
        title2: "Closed-HH",
        text: "D",
        keyCode: 68,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
        title: "Kick-n'-Hat",
        title2: "Punchy-Kick",
        text: "Z",
        keyCode: 90,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
        title: "Kick",
        title2: "Side-Stick",
        text: "X",
        keyCode: 88,
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
        title: "Closed-HH",
        title2: "Snare",
        text: "C",
        keyCode: 67,
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        src2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }   
]

export default function PadBank() {
    const { value } = useSelector(useVolume);     
    const { powerOn } = useSelector(usePower);
    const { bankModeOn } = useSelector(useBankMode);
    const [ srcChoice, setSrcChoice ] = useState("src"); 
    const [ titleChoice, setTitleChoice ] = useState("title"); 
    const dispatch = useDispatch(); 


    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            audioArr.forEach(item => {
                if(item.text == event.key.toUpperCase()) {                    
                    playAudio(item.text); 
                }
                return;
            });
        }); 
    }, []);

    useEffect(() => {
        if(powerOn) {
            if(bankModeOn) {
                setSrcChoice("src2");
                setTitleChoice("title2");
            } else {
                setSrcChoice("src");
                setTitleChoice("title"); 
            }
        } else {
            setSrcChoice(""); 
        }
    }, [powerOn, bankModeOn]); 

    const playAudio = (selector) => {
        const audio = document.getElementById(selector);
        const parent = audio.parentElement;
        const parentId = audio.parentElement.getAttribute('id');         
        let formattedText = parentId.replace("-", " ");        
        dispatch(change(formattedText)); 
        audio.volume = Number(value) / 100; 
        audio.play();         
    }

    return (
        <div className="pad-bank">
            {audioArr.map((item, index) => (                
                <DrumPad key={index + item.text} title={item[titleChoice]} src={item[srcChoice] ? item[srcChoice] : "#"} playAudio={playAudio} id={item.text} />
            ))}
        </div>
    )
}