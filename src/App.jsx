// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection'; 

import ContactSection from './components/ContactSection'; 

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomeSection />
      <AboutSection />
       <ProjectsSection />
   <ContactSection /> 
    </div>
  );
}

export default App;
