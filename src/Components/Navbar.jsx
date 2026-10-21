import React from 'react'
import { FaHouseUser } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import '../styles/movements.css'

const Navbar = ({currentSection, handleClickMain, handleClickDatos, handleClickProjects, handleClickExperience, handleClickContact}) => {
  return (
    <nav className='px-4 md:px-10 py-4 fixed top-0 left-0 z-50 bg-[#09122c]/90 backdrop-blur-sm text-white text-center w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'>
        <div className='flex justify-center items-center space-x-3'>
            <FaCircle className='animate-green'/>
            <p className='text-sm md:text-base'>Disponible para trabajar</p>            
        </div>
        <div className='border rounded-4xl px-3 py-2 md:p-3'>
          <ul className="flex justify-between items-center text-sm md:text-base">
            <li className={`mx-2 md:mx-4 cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'main' ? 'text-[#ff6500]' : ''}`} onClick={handleClickMain}>
              <FaHouseUser className='text-xl md:text-2xl' />
            </li>
            <li className={`mx-2 md:mx-4 cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'datos' ? 'text-[#ff6500]' : ''}`} onClick={handleClickDatos}>
              Sobre mí
            </li>
            <li className={`mx-2 md:mx-4 cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'projects' ? 'text-[#ff6500]' : ''}`} onClick={handleClickProjects}>
              Proyectos
            </li>
            <li className={`mx-2 md:mx-4 cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'experience' ? 'text-[#ff6500]' : ''}`} onClick={handleClickExperience}>
              Experiencia
            </li>
            <li className={`mx-2 md:mx-4 cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'contact' ? 'text-[#ff6500]' : ''}`} onClick={handleClickContact}>
              Contacto
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar