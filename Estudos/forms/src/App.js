import './App.css';
import MyForm from './component/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name:"João", email:"joao@gmail.com"}}/>
    </div>
  );
}

export default App;
