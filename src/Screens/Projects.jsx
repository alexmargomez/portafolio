import React from 'react'
import {
  FaGithub,
  FaPhp,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaDocker,
  FaPython,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { TbBrandLaravel } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiJest,
  SiDjango,
  SiFastify,
  SiPrisma,
} from "react-icons/si";
import '../styles/movements.css'

const PROJECTS_LIST = [
  {
    title: 'ALpanel — Orquestador VPS & Docker',
    role: 'FullStack',
    repo: 'https://github.com/alexmargomez/ALpanel',
    description:
      'Panel autoalojado para servidores Linux VPS con Arquitectura Hexagonal. Administra proyectos multicontenedor (Laravel, Symfony, Node.js, Django) con Docker Compose, métricas en tiempo real por WebSockets, despliegues Git con rollback y backups SQL.',
    techs: [
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiFastify, name: 'Fastify' },
      { icon: FaVuejs, name: 'Vue 3' },
      { icon: FaDocker, name: 'Docker' },
      { icon: PiFileSqlFill, name: 'SQL' },
      { icon: SiPrisma, name: 'Prisma' },
      { icon: SiJest, name: 'Jest' },
      { icon: FaLinux, name: 'Linux' },
    ],
  },
  {
    title: 'FactuPOS — Sistema POS y Taller',
    role: 'FullStack',
    repo: 'https://github.com/alexmargomez/Factupos',
    description:
      'Sistema integral Punto de Venta (POS), inventario valorizado, cotizaciones, cartera y tablero Kanban para órdenes de trabajo. Incluye liquidación de comisiones, alertas por WhatsApp y arquitectura Docker con Laravel 11 y React 19.',
    techs: [
      { icon: TbBrandLaravel, name: 'Laravel 11' },
      { icon: FaPhp, name: 'PHP 8.2' },
      { icon: FaReact, name: 'React 19' },
      { icon: RiTailwindCssFill, name: 'Tailwind CSS' },
      { icon: PiFileSqlFill, name: 'MariaDB / SQL' },
      { icon: FaDocker, name: 'Docker' },
      { icon: FaGitAlt, name: 'Git' },
    ],
  },
  {
    title: 'Plataforma Zapatoqueando',
    role: 'FullStack',
    repo: 'https://github.com/alexmargomez/Servidor_Zapatoqueando',
    description:
      'Plataforma interactiva y autogestionable de turismo y cartografía territorial con mapas dinámicos (Leaflet/OpenStreetMap), trazado de rutas y backoffice administrativo. Construida en Node.js y TypeScript bajo Arquitectura Hexagonal.',
    techs: [
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: FaVuejs, name: 'Vue 3' },
      { icon: RiTailwindCssFill, name: 'Tailwind CSS' },
      { icon: SiPrisma, name: 'Prisma ORM' },
      { icon: PiFileSqlFill, name: 'PostgreSQL' },
      { icon: FaDocker, name: 'Docker' },
      { icon: SiJest, name: 'Jest' },
    ],
  },
  {
    title: 'API SM — Tablas SISPRO & FHIR',
    role: 'FullStack',
    repo: 'https://github.com/alexmargomez/API_SM',
    description:
      'API REST y visor interactivo de Tablas de Referencia de Minsalud / SISPRO (catálogos normativos de códigos CUPS, CIE-10, Entidades y medicamentos) junto con validador e inspector de Bundles HL7 FHIR (Res. 1888). Desarrollado con Python, Django, Vue 3, MariaDB y Docker.',
    techs: [
      { icon: FaPython, name: 'Python' },
      { icon: SiDjango, name: 'Django' },
      { icon: FaVuejs, name: 'Vue 3' },
      { icon: PiFileSqlFill, name: 'MariaDB / SQL' },
      { icon: FaDocker, name: 'Docker' },
      { icon: FaLinux, name: 'Linux' },
      { icon: FaGitAlt, name: 'Git' },
    ],
  },
]

const Projects = ({ id, onClickDown }) => {
  return (
    <div
      id={id}
      className='h-dvh text-white text-center pt-22 sm:pt-24 md:pt-20 pb-3 md:pb-4 flex flex-col justify-between items-center px-3 sm:px-6 overflow-hidden'
    >
      {/* Encabezado de Sección */}
      <div className="flex flex-col items-center space-y-1">
        <span className="px-3 py-0.5 rounded-full bg-[#ff6500]/15 border border-[#ff6500]/40 text-[#ff6500] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
          Portafolio
        </span>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Proyectos <span className="text-[#ff6500]">Destacados</span>
        </h1>
      </div>

      {/* Grid de 4 Proyectos */}
      <div className='flex-1 flex flex-col justify-center items-center w-full max-w-6xl my-1.5 sm:my-3 overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3.5 md:gap-4 w-full'>
          {PROJECTS_LIST.map((project) => (
            <div
              key={project.title}
              className='bg-white/5 border border-white/10 hover:border-[#ff6500]/60 transition-all rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col justify-between text-start backdrop-blur-sm shadow-lg'
            >
              <div>
                <div className='flex justify-between items-start gap-2 mb-1 sm:mb-2'>
                  <h2 className='font-bold text-sm sm:text-lg md:text-xl text-white leading-snug'>
                    {project.title}
                  </h2>
                  <div className='flex items-center gap-2 shrink-0'>
                    <span className='px-2.5 py-0.5 rounded-full bg-[#ff6500]/20 border border-[#ff6500]/40 text-[#ff6500] text-[10px] sm:text-xs font-semibold'>
                      {project.role}
                    </span>
                    <a
                      href={project.repo}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`GitHub ${project.title}`}
                      className='text-white hover:text-[#ff6500] transition-colors'
                    >
                      <FaGithub className='text-xl sm:text-2xl md:text-3xl' />
                    </a>
                  </div>
                </div>

                <p className='text-[11px] sm:text-xs md:text-sm text-gray-300 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-none'>
                  {project.description}
                </p>
              </div>

              <div className='flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 sm:pt-3 mt-1.5 sm:mt-3 border-t border-white/10'>
                {project.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className='relative group p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-[#ff6500] hover:border-[#ff6500]/50 transition-colors'
                  >
                    {React.createElement(tech.icon, { className: 'text-sm sm:text-lg md:text-xl' })}
                    <span className='tooltip z-30'>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='hidden sm:flex justify-center items-center pt-4'>
          <a
            href='https://github.com/alexmargomez'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-[#09122c] font-semibold text-sm transition-colors'
          >
            <FaGithub className='text-xl' />
            <span>Ver más en GitHub</span>
          </a>
        </div>
      </div>

      {/* Flecha hacia abajo aislada del layout */}
      <div className='h-10 sm:h-12 shrink-0 flex justify-center items-center'>
        <FaAngleDown className="text-3xl sm:text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
      </div>
    </div>
  )
}

export default Projects