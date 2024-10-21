import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Matiz Vizion</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalog">Catálogo</Link></li>
      </ul>
      <div className="navbar-login">
        {isLoggedIn ? (
          <DropdownMenu />
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;