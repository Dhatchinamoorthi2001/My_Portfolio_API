import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">Dhatchinamoorthi</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/" className="navbar-link">HOME</Link></li>
        <li><Link to="/about" className="navbar-link">ABOUT</Link></li>
        <li><Link to="/projects" className="navbar-link">PROJECTS</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
