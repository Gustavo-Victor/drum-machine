import "./style.scss"; 


export default function DrumPad({title, src, playAudio, id}) {
    return (
        <div id={title} onClick={() => playAudio(id)} key={id} className="drum-pad">
            {id}
            <audio className="clip" src={src} id={id}></audio>
        </div>
    )
}