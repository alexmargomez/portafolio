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
        }, 550)
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

    const handleTouchMove = (event) => {
      event.preventDefault()
    }

    const handleTouchEnd = (event) => {
      if (touchStartY.current === null) return
      const deltaY = touchStartY.current - event.changedTouches[0].clientY
      if (Math.abs(deltaY) > 25) {
        navigateByDirection(deltaY > 0 ? 1 : -1)
      }
      touchStartY.current = null
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSection, scrolling, scrollToSection])

  const handleClickMain = () => scrollToSection('main')
  const handleClickDown = () => scrollToSection('datos')
  const handleClickProjects = () => scrollToSection('projects')
  const handleClickExperience = () => scrollToSection('experience')
  const handleClickContact = () => scrollToSection('contact')
  
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Fondo animado fijo con trayectorias trigonométricas CSS sin() y cos() + ondas sinusoidales */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Orbes de luz ambiental desplazándose con sin(--theta) y cos(--theta) */}
        <div className="bg-orb-sin-cos-1 absolute top-[14%] left-[18%] w-72 h-72 sm:w-[26rem] sm:h-[26rem] rounded-full bg-[#ff6500]/18 blur-[95px]" />
        <div className="bg-orb-sin-cos-2 absolute bottom-[12%] right-[15%] w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="bg-orb-sin-cos-3 absolute top-[42%] left-[45%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#ff6500]/10 blur-[100px]" />

        {/* Ondas matemáticas sin(x) y cos(x) en movimiento continuo */}
        <div className="sine-wave-vertical absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-25">
          <svg
            className="sine-wave-track-slow h-44 sm:h-64"
            viewBox="0 0 2400 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 100 Q 150 10, 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100"
              stroke="#ff6500"
              strokeWidth="2"
              strokeOpacity="0.65"
            />
            <path
              d="M 0 100 Q 150 190, 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              strokeOpacity="0.45"
            />
          </svg>
        </div>

        <div className=" absolute inset-x-0 bottom-6 sm:bottom-10 opacity-20">
          <svg
            className="cosine-wave-track-fast h-28 sm:h-40"
            viewBox="0 0 2400 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 100 C 100 20, 200 20, 300 100 S 500 180, 600 100 S 800 20, 900 100 S 1100 180, 1200 100 S 1400 20, 1500 100 S 1700 180, 1800 100 S 2000 20, 2100 100 S 2300 180, 2400 100"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          </svg>
        </div>
      </div>

      <Navbar 
        currentSection={currentSection}
        handleClickMain={handleClickMain}
        handleClickDatos={handleClickDown}
        handleClickProjects={handleClickProjects}
        handleClickExperience={handleClickExperience}
        handleClickContact={handleClickContact}
      />
      <div className="relative z-10">
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