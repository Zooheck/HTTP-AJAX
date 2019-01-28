import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav-bar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/">Friend List</NavLink>
      <NavLink to="/add-friend">Add New Friend</NavLink>
    </div>
  )
}

export default Navbar
