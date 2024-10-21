import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DropdownMenu = ({ setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Restablece el estado de sesión
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Perfil
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/profile">Perfil</Link></li>
          <li><Link to="/tracking">Seguimiento de la Compra</Link></li>
          <li><Link to="/purchases">Ver Compras</Link></li>
          <li><Link to="/appointments">Citas Programadas</Link></li>
          <li><Link to="/appointments-completed">Citas Realizadas</Link></li>
          <li><button onClick={handleLogout}>Cerrar sesión</button></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;