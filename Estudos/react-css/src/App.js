
import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react"

function App() {
  const [vali, setVali] = useState(10)
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
    </div>
  );
}

export default App;
