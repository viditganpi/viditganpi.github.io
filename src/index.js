import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Blog from './components/Blog';

ReactDOM.render(
  <div> 
      <NavBar />
      <div id="colorlib-main">
          <Home />
          <About />
          <Skills />
          <Education />
          <WorkExperience />
          <Blog />
      </div>
  </div>,
  document.querySelector('#root')
);
