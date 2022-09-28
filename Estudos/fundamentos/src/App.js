import './App.css';
import React from 'react';
import Astral from "./assets/Astral.png"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id:1, marca:"Ferrari", cor:"vermelho", ano:2020, novo:true},
    {id:1, marca:"Ford", cor:"Branco", ano:2010, novo:false},
    {id:1, marca:"Reanult", cor:"Azul", ano:2015, novo:false}
  ]
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
      {/*UseState*/}
      <div>
        <ManageData/>
      </div>
      {/*Loop useState*/}
      <>
        <ListRender/>
      </>
      {/*Props*/}
      <ShowUserName username="victor"/>
      {/*Props destructuring*/}
      <CarDetails marca="Honda" cor="Prata" ano="2012" novo={false}/>
      {/*Loop component*/}
      {cars.map((car)=>(
        <CarDetails marca={car.marca} cor={car.cor} ano={car.ano} novo={car.novo}/>
      ))}
    </div>
  );
}

export default App;
