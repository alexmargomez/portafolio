import './App.css'
import Navbar from './Components/Navbar'
import Main from './Screens/Main'
import Datos from './Screens/Datos'
import Projects from './Screens/Projects'
import Experience from './Screens/Experience'
import Contact from './Screens/Contact'
import { useState, useEffect } from 'react'

function App() {
  const [currentSection, setCurrentSection] = useState('main')
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      if (scrolling) return
      setScrolling(true)

      event.preventDefault()
      const mainSection = document.querySelector('#main')
      const datosSection = document.querySelector('#datos')
      const projectsSection = document.querySelector('#projects')
      const experienceSection = document.querySelector('#experience')
      const contactSection = document.querySelector('#contact')

      if (event.deltaY < 0 || event.key === 'ArrowUp') {
        if (currentSection === 'contact' && experienceSection) {
          experienceSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('experience')
        } else if (currentSection === 'experience' && projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('projects')
        } else if (currentSection === 'projects' && datosSection) {
          datosSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('datos')
        } else if (currentSection === 'datos' && mainSection) {
          mainSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('main')
        }
      } else if (event.deltaY > 0 || event.key === 'ArrowDown') {
        if (currentSection === 'main' && datosSection) {
          datosSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('datos')
        } else if (currentSection === 'datos' && projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('projects')
        } else if (currentSection === 'projects' && experienceSection) {
          experienceSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('experience')
        } else if (currentSection === 'experience' && contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('contact')
        }
      }

      setTimeout(() => {
        setScrolling(false)
      }, 500)
      
    }

    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          handleScroll(event)
        }
      },
      { passive: false }
    )

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleScroll)
    }
  }, [currentSection, scrolling])

  const handleClickMain = () => {
    const mainSection = document.querySelector('#main')
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('main')
    }
  }
  const handleClickDown = () => {
    const datosSection = document.querySelector('#datos')
    if (datosSection) {
      datosSection.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('datos')
    }
  }

  const handleClickProjects = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('projects')
    }
  }

  const handleClickExperience = () => {
    const experienceSection = document.querySelector('#experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('experience')
    }
  }

  const handleClickContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('contact')
    }
  }
  
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar 
        currentSection={currentSection}
        handleClickMain={handleClickMain}
        handleClickDatos={handleClickDown}
        handleClickProjects={handleClickProjects}
        handleClickExperience={handleClickExperience}
        handleClickContact={handleClickContact}
      />
      <div>
        <Main id="main" className="flex-grow" onClickDown={handleClickDown} />
        <Datos id="datos" className="flex-grow" onClickDown={handleClickProjects} />
        <Projects id="projects" className="flex-grow" onClickDown={handleClickExperience} />
        <Experience id="experience" className="flex-grow" onClickDown={handleClickContact} />
        <Contact id="contact" className="flex-grow" />

      </div>
    </div>
  )
}

export default App