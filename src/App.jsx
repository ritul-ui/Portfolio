import React, { useRef } from 'react'
import './App.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Certificate from './components/Certificate'

const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const certificateRef = useRef(null)
  const contactRef = useRef(null)
  console.log(homeRef)

  return (
    <ThemeProvider theme={theme}>
      <div className="starry-background"></div>
      <Navbar
        refs={{
          homeRef,
          aboutRef,
          educationRef,
          experienceRef,
          skillsRef,
          projectsRef,
          certificateRef,
          contactRef,
        }}
      />
      <section ref={homeRef}><Home refs={{projectsRef, contactRef}}/></section>
      <section ref={aboutRef}><About /></section>
      <section ref={educationRef}><Education /></section>
      <section ref={experienceRef}><Experience /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={certificateRef}><Certificate /></section>
      <section ref={contactRef}><Contact /></section>
    </ThemeProvider>
  )
}

export default App
