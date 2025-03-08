import React from 'react'
import { FaHouseUser } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import '../styles/movements.css'

const Navbar = ({currentSection, handleClickMain, handleClickDatos, handleClickProjects, handleClickExperience, handleClickContact}) => {
  return (
    <div className='p-10 fixed h-1/17  text-white text-center w-full className="h-screen flex justify-between items-center '>
        <div className='flex justify-center items-center space-x-4'>
            <FaCircle className=' animate-green'/>
            <p>Disponible para trabajar</p>            
        </div>
        <div className='border-1 rounded-4xl p-3'>
          <ul className="flex justify-between items-center">
            <li className={`mx-4 cursor-pointer ${currentSection === 'main' ? 'text-[#ff6500]' : ''}`} onClick={handleClickMain}>
              <FaHouseUser className='text-2xl' />
            </li>
            <li className={`mx-4 cursor-pointer ${currentSection === 'datos' ? 'text-[#ff6500]' : ''}`} onClick={handleClickDatos}>
              Sobre mi
            </li>
            <li className={`mx-4 cursor-pointer ${currentSection === 'projects' ? 'text-[#ff6500]' : ''}`} onClick={handleClickProjects}>
              Proyectos
            </li>
            <li className={`mx-4 cursor-pointer ${currentSection === 'experience' ? 'text-[#ff6500]' : ''}`} onClick={handleClickExperience}>
              Experiencia
            </li>
            <li className={`mx-4 cursor-pointer ${currentSection === 'contact' ? 'text-[#ff6500]' : ''}`} onClick={handleClickContact}>
              Contacto
            </li>
          </ul>
        </div>
    </div>
  )
}



export default Navbar