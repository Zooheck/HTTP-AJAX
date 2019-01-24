import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Friend List</NavLink>
      <NavLink to="/add-friend">Add New Friend</NavLink>
    </div>
  )
}

export default Navbar
