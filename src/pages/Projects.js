import React from 'react';
import './Projects.css'; 

const Projects = () => (
  <div className="projects-content">
    <header className="projects-header">
      <h1>Projects</h1>
      <p>Here you will find some of the personal and client projects that I created, each with its own case study.</p>
    </header>
    <div className="projects-list">
      <div className="project-card">
        <h3>Simple Calculator</h3>
        <p>An easy-to-use calculator built with HTML, CSS, and JavaScript. Click the button below to view the project.</p>
        <a href="https://simplecalculator-calc.netlify.app" className="project-button" target="" rel="noopener noreferrer">View Project</a>
      </div>
      <div className="project-card">
        <h3>Weather Calculator</h3>
        <p>A weather application that provides real-time weather information using multiple APIs. Click the button below to view the project.</p>
        <a href="https://weather-calculator-application.netlify.app/" className="project-button" target="" rel="noopener noreferrer">View Project</a>
      </div>
      <div className="project-card">
        <h3>Buy and Sell Car</h3>
        <p>A web app for buying and selling cars with a user-friendly interface and responsive design. Click the button below to view the project.</p>
        <a href="https://spinny-buyandsell-car.netlify.app/" className="project-button" target="" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  </div>
);

export default Projects;
