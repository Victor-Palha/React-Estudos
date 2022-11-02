import './App.scss';
//components
import NavBar from './components/NavBar';
//router
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          
          {/*404 page*/}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
