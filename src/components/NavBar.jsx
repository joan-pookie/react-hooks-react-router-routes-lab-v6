

import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" data-testid="nav-home">Home</NavLink>
      <NavLink to="/actors" data-testid="nav-actors">Actors</NavLink>
      <NavLink to="/directors" data-testid="nav-directors">Directors</NavLink>
    </nav>
  );
}




export default NavBar;
