import React from 'react';
import { Link } from 'react-router-dom';
import { getSession, destroySession } from '../../services/apiSession';
import './NavBar.css';

export default function NavBar() {
  const session = getSession();

  const handleLogout = () => {
    destroySession(); // Cierra sesión y redirige al login
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">ITLA CRUSH</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/ver-declaraciones" className="nav-link">Declaraciones</Link>
            </li>
              {session ? (
              // Si hay sesión, muestra el nombre del usuario y una opción de logout
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    {session.nombre || 'Mi Perfil'}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Si no hay sesión, muestra Login y Register
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
