import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import logo from '../assets/LogoZapatoca.png'
import Alexmar from '../assets/Alexmar.png'
import SoftwareMedico from '../assets/SoftwareMedico.png'
import { FaCheckCircle } from 'react-icons/fa';

const Experience = ({ id, onClickDown }) => {
  return (
    <div id={ id } className='h-screen text-white text-center pt-20'>
        <div className="h-1/10 relative flex items-center justify-center w-full">
            <div className="absolute w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-2xl md:text-4xl font-bold">Experiencia relevante</h1>
        </div>
             
        <div className='h-8/10 flex flex-col justify-center items-center px-3 md:px-0 overflow-y-auto md:overflow-visible'>
            <div className="relative w-full h-full flex flex-col md:flex-row gap-3 md:gap-0 justify-center">
                {/* Columna Izquierda (1. Integra Web - Software Médico y 3. Docente) */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-between text-start md:px-8 gap-3 md:gap-0">
                    {/* 1. Integra Web - Software Médico */}
                    <div className='flex bg-white w-full md:h-[46%] p-3 md:px-5 rounded-xl items-center shadow-lg'>
                        <div className='w-1/4 flex justify-center items-center pr-2'>
                            <img src={SoftwareMedico} alt="Integra Web - Software Médico" className='w-24 h-20 md:w-36 md:h-28 object-contain'/>
                        </div>
                        <div className="text-black w-3/4 flex flex-col justify-center items-start">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className='font-bold text-base md:text-xl'>Desarrollador Backend</h2>
                                <span className='bg-green-100 text-green-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full'>
                                    Actualmente
                                </span>
                            </div>
                            <p className='pb-1.5 text-gray-600 font-bold text-xs md:text-sm'>Integra Web - Software Médico</p>
                            <ul className="list-none space-y-1 text-[11px] md:text-xs leading-snug"> 
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" /> 
                                    Arquitectura, desarrollo y evolución del sistema clínico y hospitalario en PHP y Symfony sobre entornos Linux y contenedores Docker.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" />
                                    Optimización de rendimiento en consultas y bases de datos SQL de alta concurrencia e interoperabilidad clínica (Res. 1888 / HL7 FHIR).
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" />
                                    Implementación de automatizaciones avanzadas y orquestación con Agentes de IA para despliegues, migraciones masivas y validación de código.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Colegio Sagrado Corazón de Jesús */}
                    <div className='flex bg-white w-full md:h-[46%] p-3 md:px-5 rounded-xl items-center shadow-lg'>
                        <div className='w-1/4 flex justify-center items-center pr-2'>
                            <img src={logo} alt="Colegio Sagrado Corazón de Jesús" className='w-20 h-20 md:w-28 md:h-28 object-contain' />
                        </div>
                        <div className="w-3/4 text-black flex flex-col justify-center items-start">
                            <h2 className='font-bold text-base md:text-xl'>Docente Tecnología e Informática</h2>
                            <p className='pb-1.5 text-gray-600 font-bold text-xs md:text-sm'>Colegio Sagrado Corazón de Jesús - Zapatoca</p>
                            <ul className="list-none space-y-1 text-[11px] md:text-xs leading-snug"> 
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" /> 
                                    Formación en lógica de programación, estructuras de datos y resolución de problemas computacionales.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" />
                                    Diseño de bases de datos relacionales y dirección de proyectos de software institucionales con estudiantes de secundaria.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Línea de tiempo central */}
                <div className="hidden md:block relative w-px h-full bg-white">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white"></div>
                    <div className="absolute left-1/2 top-[23%] transform -translate-x-1/2 w-3 h-3 bg-[#ff6500] border-2 border-white rounded-full"></div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute left-1/2 top-[77%] transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Columna Derecha (2. Alexmar Software) */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center text-start md:px-8">
                    <div className='flex bg-white w-full md:h-[48%] p-3 md:px-5 rounded-xl items-center shadow-lg'>
                        <div className="text-black w-3/4 flex flex-col justify-center items-start">
                            <h2 className='font-bold text-base md:text-xl'>Desarrollador Full Stack</h2>
                            <p className='pb-1.5 text-gray-600 font-bold text-xs md:text-sm'>Alexmar Software</p>
                            <ul className="list-none space-y-1 text-[11px] md:text-xs leading-snug"> 
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" /> 
                                    Diseño y desarrollo de aplicaciones SaaS, sistemas POS y paneles de orquestación con Laravel, Node.js, Python/Django, React, Vue 3 y TypeScript.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" />
                                    Construcción de API REST bajo Arquitectura Hexagonal y modelado de bases de datos SQL (MySQL, MariaDB, PostgreSQL).
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 shrink-0" />
                                    Administración de servidores Linux VPS, despliegue multicontenedor con Docker Compose, SSL y pruebas automatizadas (Jest / PHPUnit).
                                </li>
                            </ul>
                        </div>
                        <div className='w-1/4 flex justify-center items-center pl-2'>
                            <img src={Alexmar} alt="Alexmar Software" className='w-20 h-20 md:w-32 md:h-32 object-contain'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col h-1/10 justify-end items-center pb-5'>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
        </div>
    </div>
  )
}

export default Experience