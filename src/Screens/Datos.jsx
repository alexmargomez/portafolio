import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Foto from '../assets/yo.jpg'
import Pdf from '../path/CV.pdf'

const Datos = ({ id, onClickDown }) => {
  return (
    <div id={ id } className='h-screen text-white text-center pt-20 '>
        <div className="h-1/10 relative flex items-center justify-center w-full">
            <div className="absolute w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-2xl md:text-4xl font-bold">Sobre mí</h1>
        </div>
         
        <div className='h-8/10 flex flex-col justify-center items-center px-4'>
            <div className='h-2/4 flex justify-center items-center'>
                <img src={Foto} alt="Alexmar Gómez" className='rounded-full w-44 h-44 md:w-60 md:h-60 object-cover'/>
            </div>
            <div className='h-1/4 w-[90%] md:w-[60%] flex justify-center items-center mt-4'>
                <p className='text-sm md:text-base'>
                    Desarrollador Backend y Full Stack con más de 2 años de experiencia. Especializado en arquitectura de API REST, optimización de bases de datos SQL, ecosistemas backend (Symfony, Laravel, PHP, Node.js, Django), interfaces modernas (React, Vue 3), administración de servidores Linux con Docker e implementación de automatizaciones con Agentes de IA.
                </p>
            </div>
            <div className='h-1/4 flex justify-center items-center'>
                <a href={Pdf} download className='flex justify-center items-center space-x-2 border rounded-4xl p-4 hover:bg-amber-50 hover:text-black cursor-pointer transition-colors'>
                    <FaArrowAltCircleDown className='text-2xl'/>
                    <h3>Descargar CV</h3>
                </a>
            </div>
        </div>
        <div className='flex flex-col h-1/10 justify-end items-center pb-5'>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
        </div>
    </div>
  )
}

export default Datos