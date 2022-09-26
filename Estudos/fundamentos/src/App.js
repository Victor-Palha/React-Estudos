import './App.css';
import Astral from "./assets/Astral.png"
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>React section 3</h1>
      {/* Img from Public Folder */}
      <div>
        <img src="/dnd.png" alt="dnd img"/>
      </div>
      {/* Img from Assets */}
      <div className="astral">
        <img src={Astral} alt="alternative cover Astral adventure Guide"/>
      </div>
      <div>
        <ManageData/>
      </div>
    </div>
  );
}

export default App;
