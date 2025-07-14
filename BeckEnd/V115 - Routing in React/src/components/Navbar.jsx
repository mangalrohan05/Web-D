import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    <nav>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to='/'><li>Home</li></NavLink>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to='/about'><li>About</li></NavLink>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to='/login'><li>Login</li></NavLink>
        {/* <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/login'><li>Login</li></Link> */}
    </nav>
  )
}

export default Navbar
