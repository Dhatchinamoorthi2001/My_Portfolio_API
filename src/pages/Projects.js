import React, { useState, useEffect } from 'react';
import './Projects.css'; 
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('https://api.github.com/users/Dhatchinamoorthi2001/repos');
        setProjects(data);
      } catch {
        setError('Error fetching projects');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      {error && <p className="error-message">{error}</p>}
      {projects.length ? (
        <ul className="projects-list">
          {projects.map(({ id, name, html_url }) => (
            <li key={id} className="project-item">
            <a href={html_url} >
              {name}
            </a>
          </li>
          
          ))}
        </ul>
      ) : (
        <p className="no-projects-message">No projects available.</p>
      )}
    </div>
  );
};

export default Projects;
