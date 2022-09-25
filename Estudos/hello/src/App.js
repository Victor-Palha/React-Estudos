import './App.css';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TempleteExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TempleteExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
