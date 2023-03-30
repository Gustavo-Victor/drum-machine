import PadBank from "./components/PadBank"; 
import Controls from "./components/Controls"; 
import './styles/app.scss'; 

function App() {
  return (
    <div className="inner-container" id="drum-machine">
      <PadBank />       
      <Controls />
    </div>
  )
}

export default App
