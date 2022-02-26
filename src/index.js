import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Blog from './components/Blog';

ReactDOM.render(
  <div> 
    <Header />
    <About />
    <WorkExperience />
    <Skills />
    <Blog />
  </div>,
  document.querySelector('#root')
);
