import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import logo from '../assets/LogoZapatoca.png'
import Alexmar from '../assets/Alexmar.png'
import SoftwareMedico from '../assets/SoftwareMedico.png'
import { FaCheckCircle } from 'react-icons/fa';

const EXPERIENCES = [
  {
    role: 'Desarrollador Backend',
    company: 'Integra Web - Software Médico',
    badge: 'Actualmente',
    logo: SoftwareMedico,
    bullets: [
      'Desarrollo y evolución del sistema clínico y hospitalario utilizando PHP, Symfony y JavaScript sobre entornos Linux y contenedores Docker.',
      'Optimización integral de rendimiento del sistema, generación de reportes complejos y consultas en bases de datos SQL de alta concurrencia.',
      'Implementación óptima de resoluciones y normativas del Ministerio de Salud para el cumplimiento regulatorio de las instituciones médicas.',
      'Implementación de automatizaciones avanzadas y orquestación con Agentes de IA para despliegues, migraciones masivas y validación de código.',
    ],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Alexmar Software',
    badge: null,
    logo: Alexmar,
    bullets: [
      'Diseño y desarrollo de aplicaciones SaaS, sistemas POS y paneles de orquestación con Laravel, Node.js, Python/Django, React, Vue 3 y TypeScript.',
      'Construcción de API REST bajo Arquitectura Hexagonal y modelado de bases de datos SQL (MySQL, MariaDB, PostgreSQL).',
      'Administración de servidores Linux VPS, despliegue multicontenedor con Docker Compose, SSL y pruebas automatizadas (Jest / PHPUnit).',
    ],
  },
  {
    role: 'Docente Tecnología e Informática',
    company: 'Colegio Sagrado Corazón de Jesús - Zapatoca',
    badge: null,
    logo: logo,
    bullets: [
      'Formación en lógica de programación, estructuras de datos y resolución de problemas computacionales.',
      'Diseño de bases de datos relacionales y dirección de proyectos de software institucionales con estudiantes de secundaria.',
    ],
  },
]

const ExperienceCard = ({ exp, compact = false }) => (
  <div className='bg-white/5 border border-white/10 hover:border-[#ff6500]/60 transition-all rounded-2xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 text-start backdrop-blur-sm shadow-lg'>
    <div className='shrink-0 bg-white rounded-xl p-1.5 sm:p-2.5 flex justify-center items-center w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 shadow-md'>
      <img src={exp.logo} alt={exp.company} className='w-full h-full object-contain' />
    </div>
    <div className='flex-1 min-w-0'>
      <div className='flex flex-wrap items-center gap-2'>
        <h2 className='font-bold text-sm sm:text-base md:text-xl text-white leading-tight'>
          {exp.role}
        </h2>
        {exp.badge && (
          <span className='bg-[#ff6500]/20 border border-[#ff6500]/50 text-[#ff6500] text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full'>
            {exp.badge}
          </span>
        )}
      </div>
      <p className='text-[#ff6500] font-semibold text-xs sm:text-sm pb-1 sm:pb-1.5'>
        {exp.company}
      </p>
      <ul className={`list-none ${compact ? 'space-y-0.5 text-[10.5px]' : 'space-y-1 text-xs'} text-gray-300 leading-snug`}>
        {exp.bullets.map((bullet) => (
          <li key={bullet} className='flex items-start'>
            <FaCheckCircle className='text-[#ff6500] mr-1.5 mt-0.5 shrink-0 text-[10px] sm:text-xs' />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const Experience = ({ id, onClickDown }) => {
  return (
    <div
      id={id}
      className='h-dvh text-white text-center pt-22 sm:pt-24 md:pt-20 pb-3 md:pb-4 flex flex-col justify-between items-center px-3 sm:px-6 overflow-hidden'
    >
      {/* Encabezado de Sección */}
      <div className="flex flex-col items-center space-y-1">
        <span className="px-3 py-0.5 rounded-full bg-[#ff6500]/15 border border-[#ff6500]/40 text-[#ff6500] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
          Trayectoria
        </span>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Experiencia <span className="text-[#ff6500]">Relevante</span>
        </h1>
      </div>

      {/* Contenido Principal */}
      <div className='flex-1 flex flex-col justify-center items-center w-full max-w-6xl my-1.5 sm:my-3 overflow-hidden'>
        {/* Vista Móvil (< 768px): 3 tarjetas compactas en orden 1 -> 2 -> 3 */}
        <div className="flex md:hidden flex-col justify-center gap-2 w-full">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.company} exp={exp} compact />
          ))}
        </div>

        {/* Vista Escritorio (>= 768px): Línea de tiempo alternada */}
        <div className="hidden md:flex relative w-full h-full flex-row items-center justify-center">
          {/* Columna Izquierda (1 y 3) */}
          <div className="w-1/2 h-full flex flex-col justify-between pr-8 py-2">
            <ExperienceCard exp={EXPERIENCES[0]} />
            <ExperienceCard exp={EXPERIENCES[2]} />
          </div>

          {/* Línea de tiempo central */}
          <div className="relative w-px h-[90%] bg-white/20">
            <div className="absolute left-1/2 top-[22%] transform -translate-x-1/2 w-3.5 h-3.5 bg-[#ff6500] ring-4 ring-[#ff6500]/30 rounded-full"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute left-1/2 top-[78%] transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
          </div>

          {/* Columna Derecha (2) */}
          <div className="w-1/2 h-full flex flex-col justify-center pl-8">
            <ExperienceCard exp={EXPERIENCES[1]} />
          </div>
        </div>
      </div>

      {/* Flecha hacia abajo aislada del layout */}
      <div className='h-10 sm:h-12 shrink-0 flex justify-center items-center'>
        <FaAngleDown className="text-3xl sm:text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
      </div>
    </div>
  )
}

export default Experience