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
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        {/* Search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          {/* Nasted Routes */}
          <Route path='/products/:id/info' element={<Info/>}/>
          <Route path='/products/:id' element={<Products/>}/>
          {/* search */}
          <Route path='/search' element={<Search/>}/>
          {/* No match route 404 */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
