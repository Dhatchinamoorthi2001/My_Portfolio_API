import React from 'react';
import './About.css'; 

const About = () => (
  <div className="about-content">
    <header className="about-header">
      <h1>About Me</h1>
      <hr className="underline" />
      <p class="headline">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
    </header>
    <section className="about-main">
      <div className="about-left">
        <h2>Get to know me!</h2>
        <p>I am a motivated and detail-oriented Frontend-Focused Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. As a recent graduate, I am eager to apply my skills to real-world projects, creating responsive and user-friendly web applications. My focus is on building effective solutions that meet user needs and contribute to the overall success of digital products.</p>
        <p>I am committed to continuous learning and sharing what I’ve learned with others. Through <a href="https://www.linkedin.com/in/dhatchinamoorthi-chinnathambi/" target="_blank">LinkedIn</a>
         I provide tutorials, tips, and insights into web development, helping peers and fellow developers enhance their skills. Connect with me to stay updated and collaborate in this exciting field.</p>
      </div>
      <div className="about-right">
        <h2>Skills</h2>
        <div className="skills-list">
          <button className="skill-button">HTML</button>
          <button className="skill-button">CSS</button>
          <button className="skill-button">JavaScript</button>
          <button className="skill-button">ReactJS</button>
          <button className="skill-button">Bootstrap</button>
          <button className="skill-button">Git</button>
          <button className="skill-button">GitHub</button>
          <button className="skill-button">Media Queries</button>
          <button className="skill-button">Python</button>
          <button className="skill-button">Postman</button>
          
        </div>
      </div>
    </section>
  </div>
);

export default About;
