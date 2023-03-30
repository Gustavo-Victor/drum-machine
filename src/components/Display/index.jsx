import "./style.scss"; 

export default function Display({power, text}) {
    return (
        <div id="display" className="display">
            {power ? <p>{text}</p> : <p></p>}
        </div>
    )
}