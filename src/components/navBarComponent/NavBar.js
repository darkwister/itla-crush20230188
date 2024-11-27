import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ITLA CRUSH</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/declaraciones">Letters</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
