import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => (
  <div className="home-content">
    <header className="home-header">
      <h1>HEY, I'M DHATCHINAMOORTHI</h1>
      <p>Welcome to my portfolio! I am a Frontend Developer passionate about creating engaging and responsive web applications.</p>
      <Link to="/projects" className="cta-button">View My Projects</Link>
    </header>
    
  </div>
);

export default Home;
