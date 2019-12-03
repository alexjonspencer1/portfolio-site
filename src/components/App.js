import React, { useEffect } from 'react';
import Header from './header/Header';
import './App.css';
import Techstack from './techstack/Techstack';
import AboutMe from './aboutme/AboutMe';
import ContactMe from './contact/ContactMe';
import Projects from './projects/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  AOS.init({
    duration: 1000,
  });
  useEffect(() => {
    AOS.refresh();
  }, []);

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

