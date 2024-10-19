import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/list">List</NavLink>
    <NavLink to="/nested" >Nested</NavLink>
    {/* <NavLink to="/list/:i">Listitem</NavLink> */}
    </>
  )
}

export default Nav