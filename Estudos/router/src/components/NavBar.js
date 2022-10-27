import React from 'react'
import "./NavBar.css"
//Link Router
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <h1>Hello World</h1>
        <ul>
            {/*<li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>*/}
            <NavLink to="/" end >Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar