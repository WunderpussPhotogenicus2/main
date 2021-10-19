import React from 'react';
import { NavLink } from "react-router-dom";
import Likes from './styles/list-solid.svg';
import Discover from './styles/layer-group-solid.svg';
import Profile from './styles/user-solid.svg';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li> <NavLink exact activeClassName="current" to='/Likes'>  <img className='navBarIcon' src={Likes} /> </NavLink> </li>
        <li> <NavLink exact activeClassName="current" to='/Discover'>  <img className='navBarIcon' src={Discover} /> </NavLink> </li>
        <li> <NavLink exact activeClassName="current" to='/Profile'>  <img className='navBarIcon' src={Profile} /> </NavLink> </li>
      </ul>
    </nav>
  )
}
