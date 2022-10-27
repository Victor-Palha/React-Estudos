import React from 'react'
import './App.css';

//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Componentes
import NavBar from './components/NavBar';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          {/* Nasted Routes */}
          <Route path='/products/:id/info' element={<Info/>}/>
          <Route path='/products/:id' element={<Products/>}/>
          {/* No match route 404 */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
