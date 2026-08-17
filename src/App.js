import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MySkills from './components/MySkills';
import ToolsandTech from './components/ToolsandTech';
import GetinTouch from './components/GetinTouch';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MySkills />
        <ToolsandTech />
        <Projects />
        <GetinTouch />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
