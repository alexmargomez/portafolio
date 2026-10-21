import './App.css'
import Navbar from './Components/Navbar'
import Main from './Screens/Main'
import Datos from './Screens/Datos'
import Projects from './Screens/Projects'
import Experience from './Screens/Experience'
import Contact from './Screens/Contact'
import { useState, useEffect, useCallback } from 'react'

const SECTIONS = ['main', 'datos', 'projects', 'experience', 'contact']

function App() {
  const [currentSection, setCurrentSection] = useState('main')
  const [scrolling, setScrolling] = useState(false)

  const scrollToSection = useCallback((sectionId) => {
    const element = document.querySelector(`#${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(sectionId)
    }
  }, [])

  // Sincronizar sección activa al hacer scroll nativo en móvil
  useEffect(() => {
    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Navegación por pantallas en escritorio (>= 768px)
  useEffect(() => {
    const navigateByDirection = (direction) => {
      if (scrolling) return
      const currentIndex = SECTIONS.indexOf(currentSection)
      const nextIndex = currentIndex + direction

      if (nextIndex >= 0 && nextIndex < SECTIONS.length) {
        setScrolling(true)
        scrollToSection(SECTIONS[nextIndex])
        setTimeout(() => {
          setScrolling(false)
        }, 500)
      }
    }

    const handleWheel = (event) => {
      if (window.innerWidth < 768) return
      event.preventDefault()
      if (event.deltaY < 0) {
        navigateByDirection(-1)
      } else if (event.deltaY > 0) {
        navigateByDirection(1)
      }
    }

    const handleKeyDown = (event) => {
      if (window.innerWidth < 768) return
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        navigateByDirection(-1)
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        navigateByDirection(1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentSection, scrolling, scrollToSection])

  const handleClickMain = () => scrollToSection('main')
  const handleClickDown = () => scrollToSection('datos')
  const handleClickProjects = () => scrollToSection('projects')
  const handleClickExperience = () => scrollToSection('experience')
  const handleClickContact = () => scrollToSection('contact')
  
  return (
    <div className="flex flex-col min-h-screen md:h-full w-full">
      <Navbar 
        currentSection={currentSection}
        handleClickMain={handleClickMain}
        handleClickDatos={handleClickDown}
        handleClickProjects={handleClickProjects}
        handleClickExperience={handleClickExperience}
        handleClickContact={handleClickContact}
      />
      <div>
        <Main id="main" className="flex-grow" onClickDown={handleClickDown} onClickProjects={handleClickProjects} />
        <Datos id="datos" className="flex-grow" onClickDown={handleClickProjects} />
        <Projects id="projects" className="flex-grow" onClickDown={handleClickExperience} />
        <Experience id="experience" className="flex-grow" onClickDown={handleClickContact} />
        <Contact id="contact" className="flex-grow" />
      </div>
    </div>
  )
}

export default App