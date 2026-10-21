import React from 'react'
import {
  FaGithub,
  FaPhp,
  FaSymfony,
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

const Projects = ({ id, onClickDown }) => {
  return (
    <div id={id} className='min-h-screen md:h-screen text-white text-center pt-24 md:pt-20 pb-6 md:pb-0 flex flex-col justify-between items-center'>
        <div className="md:h-1/10 relative flex items-center justify-center w-full py-2 md:py-0">
            <div className="absolute w-[85%] md:w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-2xl md:text-4xl font-bold">Proyectos</h1>
        </div>
        <div className='md:h-8/10 flex flex-col justify-center items-center w-full px-4 py-4 md:p-5 gap-6 md:gap-0'>
            <div className='md:h-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 w-full text-black'>
                {/* 1. ALpanel */}
                <div className='bg-white h-full flex flex-col justify-between items-center rounded-2xl md:rounded-4xl p-5 md:p-0 shadow-lg'>
                    <div className='md:h-3/4 w-full flex flex-col justify-center items-start text-start md:px-6'>
                        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-2'>ALpanel — Orquestador VPS & Docker</h2>
                        <p className='text-xs sm:text-sm text-gray-800 leading-relaxed'>
                            Panel de control autoalojado para servidores Linux VPS con Arquitectura Hexagonal. Administra proyectos multicontenedor (Laravel, Symfony, Node.js, Django) con Docker Compose, monitoreo en tiempo real vía WebSockets, despliegues Git en 1 clic con rollback automático y backups SQL.
                        </p>
                    </div>
                    <div className='md:h-1/4 w-full flex flex-wrap justify-between items-center md:px-8 pt-4 md:pt-0 mt-3 md:mt-0 border-t border-gray-100 md:border-none gap-2'>
                        <div className='flex flex-wrap gap-2 text-black/60'>
                            <div className="relative group">
                                <FaNodeJs className='text-2xl md:text-3xl' />
                                <span className="tooltip">Node.js</span>
                            </div>
                            <div className="relative group">
                                <SiTypescript className='text-2xl md:text-3xl' />
                                <span className="tooltip">TypeScript</span>
                            </div>
                            <div className="relative group">
                                <SiFastify className='text-2xl md:text-3xl' />
                                <span className="tooltip">Fastify</span>
                            </div>
                            <div className="relative group">
                                <FaVuejs className='text-2xl md:text-3xl' />
                                <span className="tooltip">Vue 3</span>
                            </div>
                            <div className="relative group">
                                <FaDocker className='text-2xl md:text-3xl' />
                                <span className="tooltip">Docker</span>
                            </div>
                            <div className="relative group">
                                <PiFileSqlFill className='text-2xl md:text-3xl' />
                                <span className="tooltip">SQL</span>
                            </div>
                            <div className="relative group">
                                <SiPrisma className='text-2xl md:text-3xl' />
                                <span className="tooltip">Prisma</span>
                            </div>
                            <div className="relative group">
                                <SiJest className='text-2xl md:text-3xl' />
                                <span className="tooltip">Jest</span>
                            </div>
                            <div className="relative group">
                                <FaLinux className='text-2xl md:text-3xl' />
                                <span className="tooltip">Linux</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center space-x-2 ml-auto'>
                            <h3 className='font-bold text-base md:text-2xl'>FullStack</h3>
                            <a href="https://github.com/alexmargomez/ALpanel" target="_blank" rel="noopener noreferrer" className="relative group">
                                <FaGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#ff6500]' />
                                <span className="tooltip">Ver GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. FactuPOS */}
                <div className='bg-white h-full flex flex-col justify-between items-center rounded-2xl md:rounded-4xl p-5 md:p-0 shadow-lg'>
                    <div className='md:h-3/4 w-full flex flex-col justify-center items-start text-start md:px-6'>
                        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-2'>FactuPOS — Sistema POS y Gestión de Taller</h2>
                        <p className='text-xs sm:text-sm text-gray-800 leading-relaxed'>
                            Sistema integral Punto de Venta (POS), inventario valorizado, cotizaciones, cartera y tablero Kanban en tiempo real para órdenes de trabajo y servicio técnico. Incluye cálculo de comisiones, alertas de mantenimiento por WhatsApp y arquitectura multicontenedor con Laravel 11 y React 19.
                        </p>
                    </div>
                    <div className='md:h-1/4 w-full flex flex-wrap justify-between items-center md:px-8 pt-4 md:pt-0 mt-3 md:mt-0 border-t border-gray-100 md:border-none gap-2'>
                        <div className='flex flex-wrap gap-2 text-black/60'>
                            <div className="relative group">
                                <TbBrandLaravel className='text-2xl md:text-3xl' />
                                <span className="tooltip">Laravel 11</span>
                            </div>
                            <div className="relative group">
                                <FaPhp className='text-2xl md:text-3xl' />
                                <span className="tooltip">PHP 8.2</span>
                            </div>
                            <div className="relative group">
                                <FaReact className='text-2xl md:text-3xl' />
                                <span className="tooltip">React 19</span>
                            </div>
                            <div className="relative group">
                                <RiTailwindCssFill className='text-2xl md:text-3xl' />
                                <span className="tooltip">Tailwind CSS</span>
                            </div>
                            <div className="relative group">
                                <PiFileSqlFill className='text-2xl md:text-3xl' />
                                <span className="tooltip">MariaDB / SQL</span>
                            </div>
                            <div className="relative group">
                                <FaDocker className='text-2xl md:text-3xl' />
                                <span className="tooltip">Docker</span>
                            </div>
                            <div className="relative group">
                                <FaGitAlt className='text-2xl md:text-3xl' />
                                <span className="tooltip">Git</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center space-x-2 ml-auto'>
                            <h3 className='font-bold text-base md:text-2xl'>FullStack</h3>
                            <a href="https://github.com/alexmargomez/Factupos" target="_blank" rel="noopener noreferrer" className="relative group">
                                <FaGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#ff6500]' />
                                <span className="tooltip">Ver GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3. Plataforma Zapatoqueando */}
                <div className='bg-white h-full flex flex-col justify-between items-center rounded-2xl md:rounded-4xl p-5 md:p-0 shadow-lg'>
                    <div className='md:h-3/4 w-full flex flex-col justify-center items-start text-start md:px-6'>
                        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-2'>Plataforma Zapatoqueando</h2>
                        <p className='text-xs sm:text-sm text-gray-800 leading-relaxed'>
                            Plataforma web interactiva y autogestionable de turismo y exploración territorial con mapas dinámicos (Leaflet/OpenStreetMap), trazado de rutas punto a punto y backoffice administrativo. Backend en Node.js y TypeScript bajo Arquitectura Hexagonal con PostgreSQL y pruebas en Jest.
                        </p>
                    </div>
                    <div className='md:h-1/4 w-full flex flex-wrap justify-between items-center md:px-8 pt-4 md:pt-0 mt-3 md:mt-0 border-t border-gray-100 md:border-none gap-2'>
                        <div className='flex flex-wrap gap-2 text-black/60'>
                            <div className="relative group">
                                <FaNodeJs className='text-2xl md:text-3xl' />
                                <span className="tooltip">Node.js</span>
                            </div>
                            <div className="relative group">
                                <SiExpress className='text-2xl md:text-3xl' />
                                <span className="tooltip">Express.js</span>
                            </div>
                            <div className="relative group">
                                <SiTypescript className='text-2xl md:text-3xl' />
                                <span className="tooltip">TypeScript</span>
                            </div>
                            <div className="relative group">
                                <FaVuejs className='text-2xl md:text-3xl' />
                                <span className="tooltip">Vue 3</span>
                            </div>
                            <div className="relative group">
                                <RiTailwindCssFill className='text-2xl md:text-3xl' />
                                <span className="tooltip">Tailwind CSS</span>
                            </div>
                            <div className="relative group">
                                <SiPrisma className='text-2xl md:text-3xl' />
                                <span className="tooltip">Prisma ORM</span>
                            </div>
                            <div className="relative group">
                                <PiFileSqlFill className='text-2xl md:text-3xl' />
                                <span className="tooltip">PostgreSQL</span>
                            </div>
                            <div className="relative group">
                                <FaDocker className='text-2xl md:text-3xl' />
                                <span className="tooltip">Docker</span>
                            </div>
                            <div className="relative group">
                                <SiJest className='text-2xl md:text-3xl' />
                                <span className="tooltip">Jest</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center space-x-2 ml-auto'>
                            <h3 className='font-bold text-base md:text-2xl'>FullStack</h3>
                            <a href="https://github.com/alexmargomez/Servidor_Zapatoqueando" target="_blank" rel="noopener noreferrer" className="relative group">
                                <FaGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#ff6500]' />
                                <span className="tooltip">Ver GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 4. API SM */}
                <div className='bg-white h-full flex flex-col justify-between items-center rounded-2xl md:rounded-4xl p-5 md:p-0 shadow-lg'>
                    <div className='md:h-3/4 w-full flex flex-col justify-center items-start text-start md:px-6'>
                        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-2'>API SM — Interoperabilidad Clínica FHIR</h2>
                        <p className='text-xs sm:text-sm text-gray-800 leading-relaxed'>
                            Motor de interoperabilidad en salud y validador normativo (Resolución 1888 / HL7 FHIR) integrado con sistemas de historia clínica en Symfony. Desarrollado con Python, Django y Vue 3, incluye inspector de Bundles FHIR, catálogos de Minsalud y despliegue con Docker y MariaDB (SQL).
                        </p>
                    </div>
                    <div className='md:h-1/4 w-full flex flex-wrap justify-between items-center md:px-8 pt-4 md:pt-0 mt-3 md:mt-0 border-t border-gray-100 md:border-none gap-2'>
                        <div className='flex flex-wrap gap-2 text-black/60'>
                            <div className="relative group">
                                <FaPython className='text-2xl md:text-3xl' />
                                <span className="tooltip">Python</span>
                            </div>
                            <div className="relative group">
                                <SiDjango className='text-2xl md:text-3xl' />
                                <span className="tooltip">Django</span>
                            </div>
                            <div className="relative group">
                                <FaSymfony className='text-2xl md:text-3xl' />
                                <span className="tooltip">Symfony</span>
                            </div>
                            <div className="relative group">
                                <FaVuejs className='text-2xl md:text-3xl' />
                                <span className="tooltip">Vue 3</span>
                            </div>
                            <div className="relative group">
                                <PiFileSqlFill className='text-2xl md:text-3xl' />
                                <span className="tooltip">MariaDB / SQL</span>
                            </div>
                            <div className="relative group">
                                <FaDocker className='text-2xl md:text-3xl' />
                                <span className="tooltip">Docker</span>
                            </div>
                            <div className="relative group">
                                <FaLinux className='text-2xl md:text-3xl' />
                                <span className="tooltip">Linux</span>
                            </div>
                            <div className="relative group">
                                <FaGitAlt className='text-2xl md:text-3xl' />
                                <span className="tooltip">Git</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center space-x-2 ml-auto'>
                            <h3 className='font-bold text-base md:text-2xl'>FullStack</h3>
                            <a href="https://github.com/alexmargomez/API_SM" target="_blank" rel="noopener noreferrer" className="relative group">
                                <FaGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#ff6500]' />
                                <span className="tooltip">Ver GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:h-1/4 flex justify-center items-center'>
                <a
                    href='https://github.com/alexmargomez'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex justify-center items-center space-x-2 border rounded-4xl px-6 py-3.5 md:p-4 hover:bg-amber-50 hover:text-black cursor-pointer transition-colors'
                >
                    <FaGithub className='text-2xl'/>
                    <h3>Ver GitHub</h3>
                </a>
            </div>
        </div>
        <div className='flex flex-col md:h-1/10 justify-end items-center pb-4 md:pb-5'>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
        </div>
    </div>
  )
}

export default Projects