
import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react"

function App() {
  const [vali, setVali] = useState(10)
  let dinamic = false
  function handleText(){
    if(vali === 10){
      setVali(20)
    }else{
      setVali(10)
    }
  }
  return (
    <div className="App">
      {/* Global css */}
      <h1>Hello from React</h1>
      {/* Css component */}
      <MyComponent/>
      {/* Dinamic css inline */}
      <h2 style={ vali < 15 ? ({color:"yellow", backgroundColor:"black", margin:"10px"}) : ({color:"blue", backgroundColor:"grey", margin:"10px"}) }>Condicional css inline</h2>
      <button onClick={handleText}>Change Text</button>
      {/* Dinamic class */}
      <h3 className={dinamic ? "true-title" : "false-title"}>Dinamic class</h3>
    </div>
  );
}

export default App;
