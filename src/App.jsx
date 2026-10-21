import './App.css'
import Navbar from './Components/Navbar'
import Main from './Screens/Main'
import Datos from './Screens/Datos'
import Projects from './Screens/Projects'
import Experience from './Screens/Experience'
import Contact from './Screens/Contact'
import { useState, useEffect, useRef, useCallback } from 'react'

const SECTIONS = ['main', 'datos', 'projects', 'experience', 'contact']

function App() {
  const [currentSection, setCurrentSection] = useState('main')
  const [scrolling, setScrolling] = useState(false)
  const touchStartY = useRef(null)

  const scrollToSection = useCallback((sectionId) => {
    const element = document.querySelector(`#${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(sectionId)
    }
  }, [])

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
      event.preventDefault()
      if (event.deltaY < 0) {
        navigateByDirection(-1)
      } else if (event.deltaY > 0) {
        navigateByDirection(1)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        navigateByDirection(-1)
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        navigateByDirection(1)
      }
    }

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY
    }

    const handleTouchEnd = (event) => {
      if (touchStartY.current === null) return
      const deltaY = touchStartY.current - event.changedTouches[0].clientY
      if (Math.abs(deltaY) > 50) {
        navigateByDirection(deltaY > 0 ? 1 : -1)
      }
      touchStartY.current = null
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSection, scrolling, scrollToSection])

  const handleClickMain = () => scrollToSection('main')
  const handleClickDown = () => scrollToSection('datos')
  const handleClickProjects = () => scrollToSection('projects')
  const handleClickExperience = () => scrollToSection('experience')
  const handleClickContact = () => scrollToSection('contact')
  
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