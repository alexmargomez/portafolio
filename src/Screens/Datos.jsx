import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Foto from '../assets/yo.jpg'
import Pdf from '../path/CV.pdf'

const Datos = ({ id, onClickDown }) => {
  return (
    <div id={ id } className='min-h-screen md:h-screen text-white text-center pt-24 md:pt-20 pb-6 md:pb-0 flex flex-col justify-between items-center'>
        <div className="md:h-1/10 relative flex items-center justify-center w-full py-2 md:py-0">
            <div className="absolute w-[85%] md:w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-2xl md:text-4xl font-bold">Sobre mí</h1>
        </div>
         
        <div className='md:h-8/10 flex flex-col justify-center items-center px-5 gap-6 md:gap-0 my-6 md:my-0'>
            <div className='md:h-2/4 flex justify-center items-center'>
                <img src={Foto} alt="Alexmar Gómez" className='rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover shadow-lg'/>
            </div>
            <div className='md:h-1/4 w-full sm:w-[85%] md:w-[60%] flex justify-center items-center md:mt-4'>
                <p className='text-sm sm:text-base leading-relaxed'>
                    Desarrollador Backend y Full Stack con más de 2 años de experiencia. Especializado en arquitectura de API REST, optimización de bases de datos SQL, ecosistemas backend (Symfony, Laravel, PHP, Node.js, Django), interfaces modernas (React, Vue 3), administración de servidores Linux con Docker e implementación de automatizaciones con Agentes de IA.
                </p>
            </div>
            <div className='md:h-1/4 flex justify-center items-center'>
                <a href={Pdf} download className='flex justify-center items-center space-x-2 border rounded-4xl px-6 py-3.5 md:p-4 hover:bg-amber-50 hover:text-black cursor-pointer transition-colors'>
                    <FaArrowAltCircleDown className='text-2xl'/>
                    <h3>Descargar CV</h3>
                </a>
            </div>
        </div>
        <div className='flex flex-col md:h-1/10 justify-end items-center pb-4 md:pb-5'>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
        </div>
    </div>
  )
}

export default Datos