import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowAltCircleDown, FaServer, FaDatabase, FaRobot, FaDocker } from "react-icons/fa";
import Foto from '../assets/yo.jpg'
import Pdf from '../path/CV.pdf'

const HIGHLIGHTS = [
  { icon: FaServer, label: 'Backend & Full Stack' },
  { icon: FaDatabase, label: 'Optimización SQL' },
  { icon: FaDocker, label: 'Linux & Docker' },
  { icon: FaRobot, label: 'Agentes de IA' },
]

const Datos = ({ id, onClickDown }) => {
  return (
    <div
      id={id}
      className='h-dvh text-white text-center pt-22 sm:pt-24 md:pt-20 pb-3 md:pb-4 flex flex-col justify-between items-center px-4 sm:px-6 overflow-hidden'
    >
      {/* Encabezado de Sección */}
      <div className="flex flex-col items-center space-y-1.5">
        <span className="px-3 py-0.5 rounded-full bg-[#ff6500]/15 border border-[#ff6500]/40 text-[#ff6500] text-xs font-semibold uppercase tracking-wider">
          Perfil Profesional
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Sobre <span className="text-[#ff6500]">mí</span>
        </h1>
      </div>

      {/* Tarjeta Principal Glassmorphism */}
      <div className='flex-1 flex flex-col justify-center items-center w-full max-w-4xl my-2'>
        <div className='w-full bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-8 md:p-10 backdrop-blur-sm shadow-2xl flex flex-col md:flex-row items-center gap-5 md:gap-8'>
          {/* Foto de Perfil */}
          <div className='shrink-0 flex justify-center items-center'>
            <div className='p-1.5 rounded-full bg-gradient-to-tr from-[#ff6500] to-white/30 shadow-xl'>
              <img
                src={Foto}
                alt="Alexmar Gómez"
                className='rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover border-4 border-[#09122c]'
              />
            </div>
          </div>

          {/* Información y Badges */}
          <div className='flex flex-col items-center md:items-start text-center md:text-start space-y-3 sm:space-y-4'>
            <div className='flex flex-wrap justify-center md:justify-start gap-2'>
              {HIGHLIGHTS.map((item) => (
                <span
                  key={item.label}
                  className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-gray-200 font-medium'
                >
                  {React.createElement(item.icon, { className: 'text-[#ff6500]' })}
                  {item.label}
                </span>
              ))}
            </div>

            <p className='text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed'>
              Desarrollador de Software Backend y Full Stack con más de <strong className='text-white'>2 años de experiencia</strong>. Especializado en arquitectura de API REST, optimización de rendimiento, reportes y bases de datos <strong className='text-white'>SQL</strong>, ecosistemas backend (<strong className='text-white'>Symfony, Laravel, PHP, Node.js, Django</strong>), interfaces modernas (<strong className='text-white'>React, Vue 3</strong>), infraestructura <strong className='text-white'>Linux con Docker</strong> e implementación de automatizaciones con <strong className='text-[#ff6500]'>Agentes de IA</strong>.
            </p>

            <div className='pt-1'>
              <a
                href={Pdf}
                download
                className='inline-flex items-center space-x-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#ff6500] hover:bg-[#e05800] text-white font-semibold text-xs sm:text-sm md:text-base shadow-lg cursor-pointer transition-all'
              >
                <FaArrowAltCircleDown className='text-lg' />
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <div className='flex flex-col justify-end items-center pt-1'>
        <FaAngleDown className="text-3xl sm:text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
      </div>
    </div>
  )
}

export default Datos