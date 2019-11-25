import React from 'react';
import Header from './header/Header';
import './App.css';
import Techstack from './techstack/Techstack';
import AboutMe from './aboutme/AboutMe';
import ContactMe from './contact/ContactMe';
import Projects from './projects/Projects';

export default function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Techstack />
      <Projects />
      <ContactMe />
    </>
  );
}

