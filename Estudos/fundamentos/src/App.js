import './App.css';
import React from 'react';
import Astral from "./assets/Astral.png"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

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
      <>
        <ListRender/>
      </>
      <ShowUserName username="victor"/>
      <CarDetails marca="Honda" cor="Prata" placa="XXZ1025" ano="2012"/>
    </div>
  );
}

export default App;
