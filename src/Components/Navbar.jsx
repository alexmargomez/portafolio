import React from 'react'
import { FaHouseUser } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import '../styles/movements.css'

const Navbar = ({currentSection, handleClickMain, handleClickDatos, handleClickProjects, handleClickExperience, handleClickContact}) => {
  return (
    <nav className='px-3 md:px-10 py-2.5 md:py-4 fixed top-0 left-0 z-50 bg-[#09122c]/95 backdrop-blur-md text-white text-center w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 border-b border-white/10 md:border-none'>
        <div className='flex justify-center items-center space-x-2'>
            <FaCircle className='animate-green'/>
            <p className='text-xs sm:text-sm md:text-base font-medium'>Disponible para trabajar</p>            
        </div>
        <div className='border border-white/40 rounded-full px-2.5 py-1.5 md:p-3 max-w-full'>
          <ul className="flex justify-center items-center gap-2.5 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base whitespace-nowrap">
            <li className={`cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'main' ? 'text-[#ff6500]' : ''}`} onClick={handleClickMain}>
              <FaHouseUser className='text-lg sm:text-xl md:text-2xl' />
            </li>
            <li className={`cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'datos' ? 'text-[#ff6500] font-semibold' : ''}`} onClick={handleClickDatos}>
              Sobre mí
            </li>
            <li className={`cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'projects' ? 'text-[#ff6500] font-semibold' : ''}`} onClick={handleClickProjects}>
              Proyectos
            </li>
            <li className={`cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'experience' ? 'text-[#ff6500] font-semibold' : ''}`} onClick={handleClickExperience}>
              Experiencia
            </li>
            <li className={`cursor-pointer transition-colors hover:text-[#ff6500] ${currentSection === 'contact' ? 'text-[#ff6500] font-semibold' : ''}`} onClick={handleClickContact}>
              Contacto
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar