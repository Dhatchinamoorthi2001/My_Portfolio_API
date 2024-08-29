import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Sidebar.css'; 

const Sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar-menu">
      <li><a href="https://www.linkedin.com/in/dhatchinamoorthi-chinnathambi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
      <li><a href="https://github.com/Dhatchinamoorthi2001" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
      <li><a href="mailto:dhatchinamoorthi55@gmail.com"><FaEnvelope /></a></li>
      <li><a href="tel:7904017807"><FaPhone /></a></li>
    </ul>
  </div>
);

export default Sidebar;
