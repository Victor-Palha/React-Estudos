import React from 'react'
import "./NavBar.css"
//Link Router
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <h1>Hello World</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar