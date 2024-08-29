import React from 'react';

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Sidebar.css'; 

const Sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar-menu">
      <li><a href="https://www.linkedin.com/in/dhatchinamoorthi-chinnathambi/" target="" rel=""><FaLinkedin /></a></li>
      <li><a href="https://github.com/Dhatchinamoorthi2001" target="" rel=""><FaGithub /></a></li>
      <li><a href="mailto:dhatchinamoorthi55@gmail.com"><FaEnvelope /></a></li>
      <li><a href="tel:7904017807"><FaPhone /></a></li>
    </ul>
  </div>
);

export default Sidebar;
