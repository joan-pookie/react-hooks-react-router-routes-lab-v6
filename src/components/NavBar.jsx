import React from "react";

import routes from "../routes";
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/actors" >Actors</NavLink>
      <NavLink to="/directors" >Directors</NavLink>
    </nav>
  );
}




export default NavBar;
