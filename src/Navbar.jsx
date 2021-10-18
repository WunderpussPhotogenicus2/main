import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li> <NavLink exact activeClassName="current" to='/Discover'> Discover </NavLink> </li>
        <li> <NavLink exact activeClassName="current" to='/Profile'> Profile </NavLink> </li>
      </ul>
    </nav>
  )
}
