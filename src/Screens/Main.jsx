import React from 'react'
import { TbBrandLaravel } from "react-icons/tb";
import {
  FaPhp,
  FaSymfony,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaPython,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { SiNginx, SiExpress, SiTypescript, SiDjango } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import Pdf from '../path/CV.pdf'
import '../styles/movements.css'

const TECHNOLOGIES = [
  { icon: FaSymfony, name: 'Symfony' },
  { icon: TbBrandLaravel, name: 'Laravel' },
  { icon: FaPhp, name: 'PHP' },
  { icon: FaJs, name: 'JavaScript' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: FaPython, name: 'Python' },
  { icon: SiDjango, name: 'Django' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: SiExpress, name: 'Express.js' },
  { icon: FaVuejs, name: 'Vue.js' },
  { icon: FaReact, name: 'React.js' },
  { icon: RiNextjsFill, name: 'Next.js' },
  { icon: RiTailwindCssFill, name: 'Tailwind CSS' },
  { icon: PiFileSqlFill, name: 'SQL' },
  { icon: FaDocker, name: 'Docker' },
  { icon: FaLinux, name: 'Linux' },
  { icon: SiNginx, name: 'Nginx' },
  { icon: FaGitAlt, name: 'Git' },
]

const Main = ({ id, onClickDown, onClickProjects }) => {
  return (
    <div
      id={id}
      className='h-dvh text-white text-center pt-22 sm:pt-24 md:pt-20 pb-3 md:pb-4 flex flex-col justify-between items-center px-4 sm:px-6 overflow-hidden'
    >
      {/* Bloque Hero Central */}
      <div className='flex flex-col flex-1 justify-center items-center max-w-4xl mx-auto space-y-3 sm:space-y-5'>
        <span className='px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-base md:text-lg font-medium tracking-wide text-gray-200'>
          Hola, soy <strong className='text-white'>Alexmar Gómez</strong>
        </span>

        <h1 className='font-extrabold text-3xl sm:text-5xl md:text-7xl leading-tight tracking-tight'>
          Desarrollador de <span className='text-[#ff6500]'>Software</span>
        </h1>

        <p className='text-xs sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed px-2'>
          Especializado en arquitectura Backend, desarrollo Full Stack, optimización de bases de datos SQL, administración de infraestructura Linux, contenedores Docker y automatización mediante Agentes de IA.
        </p>

        {/* Botones de Acción Rápida */}
        <div className='flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 pt-1'>
          <button
            type="button"
            onClick={onClickProjects || onClickDown}
            className='px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#ff6500] hover:bg-[#e05800] text-white font-semibold text-xs sm:text-base shadow-lg cursor-pointer transition-all'
          >
            Ver Proyectos
          </button>

          <a
            href={Pdf}
            download
            className='flex items-center space-x-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-white/40 hover:bg-white hover:text-[#09122c] font-semibold text-xs sm:text-base cursor-pointer transition-colors'
          >
            <FaArrowAltCircleDown className='text-base sm:text-lg' />
            <span>Descargar CV</span>
          </a>

          <div className='flex items-center gap-2'>
            <a
              href='https://github.com/alexmargomez'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='p-2.5 sm:p-3 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-[#09122c] transition-colors'
            >
              <FaGithub className='text-lg sm:text-xl' />
            </a>
            <a
              href='https://www.linkedin.com/in/alexmargomez/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='p-2.5 sm:p-3 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-[#09122c] transition-colors'
            >
              <FaLinkedin className='text-lg sm:text-xl' />
            </a>
          </div>
        </div>
      </div>

      {/* Bloque de Tecnologías */}
      <div className='flex flex-col justify-center items-center space-y-2.5 w-full max-w-4xl'>
        <div className="flex items-center justify-center w-full gap-4 px-4">
          <div className="flex-1 border-t border-white/15"></div>
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-200 shrink-0">
            Stack Tecnológico
          </h3>
          <div className="flex-1 border-t border-white/15"></div>
        </div>

        <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-3.5 md:gap-4 pt-1 px-1">
          {TECHNOLOGIES.map((tech) => (
            <li
              key={tech.name}
              className="group relative flex items-center justify-center p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff6500] hover:text-[#ff6500] transition-all"
            >
              {React.createElement(tech.icon, { className: "text-xl sm:text-3xl" })}
              <span className="tooltip z-30">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Flecha hacia abajo aislada del layout */}
      <div className='h-10 sm:h-12 shrink-0 flex justify-center items-center'>
        <FaAngleDown className="text-3xl sm:text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
      </div>
    </div>
  )
}

export default Main