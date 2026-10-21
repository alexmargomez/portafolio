import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import logo from '../assets/LogoZapatoca.png'
import Alexmar from '../assets/Alexmar.png'
import SoftwareMedico from '../assets/SoftwareMedico.png'
import { FaCheckCircle } from 'react-icons/fa';

const Experience = ({ id, onClickDown }) => {
  return (
    <div id={ id } className='min-h-screen md:h-screen text-white text-center pt-24 md:pt-20 pb-6 md:pb-0 flex flex-col justify-between items-center'>
        <div className="md:h-1/10 relative flex items-center justify-center w-full py-2 md:py-0">
            <div className="absolute w-[85%] md:w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-2xl md:text-4xl font-bold">Experiencia relevante</h1>
        </div>
             
        <div className='md:h-8/10 flex flex-col justify-center items-center w-full px-4 py-4 md:p-0'>
            {/* Vista Móvil (< 768px): Orden cronológico 1 -> 2 -> 3 */}
            <div className="flex md:hidden flex-col gap-4 w-full text-start">
                {/* 1. Integra Web - Software Médico */}
                <div className='flex flex-col sm:flex-row bg-white w-full p-4 rounded-2xl items-center shadow-lg gap-3'>
                    <div className='w-full sm:w-1/4 flex justify-center items-center'>
                        <img src={SoftwareMedico} alt="Integra Web - Software Médico" className='w-28 h-20 object-contain'/>
                    </div>
                    <div className="text-black w-full sm:w-3/4 flex flex-col justify-center items-start">
                        <div className="flex flex-wrap items-center gap-2">
                            <h2 className='font-bold text-lg'>Desarrollador Backend</h2>
                            <span className='bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full'>
                                Actualmente
                            </span>
                        </div>
                        <p className='pb-2 text-gray-600 font-bold text-sm'>Integra Web - Software Médico</p>
                        <ul className="list-none space-y-1.5 text-xs leading-relaxed"> 
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

                {/* 2. Alexmar Software */}
                <div className='flex flex-col sm:flex-row bg-white w-full p-4 rounded-2xl items-center shadow-lg gap-3'>
                    <div className='w-full sm:w-1/4 flex justify-center items-center'>
                        <img src={Alexmar} alt="Alexmar Software" className='w-24 h-20 object-contain'/>
                    </div>
                    <div className="text-black w-full sm:w-3/4 flex flex-col justify-center items-start">
                        <h2 className='font-bold text-lg'>Desarrollador Full Stack</h2>
                        <p className='pb-2 text-gray-600 font-bold text-sm'>Alexmar Software</p>
                        <ul className="list-none space-y-1.5 text-xs leading-relaxed"> 
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
                </div>

                {/* 3. Colegio Sagrado Corazón de Jesús */}
                <div className='flex flex-col sm:flex-row bg-white w-full p-4 rounded-2xl items-center shadow-lg gap-3'>
                    <div className='w-full sm:w-1/4 flex justify-center items-center'>
                        <img src={logo} alt="Colegio Sagrado Corazón de Jesús" className='w-20 h-20 object-contain' />
                    </div>
                    <div className="w-full sm:w-3/4 text-black flex flex-col justify-center items-start">
                        <h2 className='font-bold text-lg'>Docente Tecnología e Informática</h2>
                        <p className='pb-2 text-gray-600 font-bold text-sm'>Colegio Sagrado Corazón de Jesús - Zapatoca</p>
                        <ul className="list-none space-y-1.5 text-xs leading-relaxed"> 
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

            {/* Vista Escritorio (>= 768px): Línea de tiempo alternada */}
            <div className="hidden md:flex relative w-full h-full flex-row justify-center">
                {/* Columna Izquierda (1. Integra Web - Software Médico y 3. Docente) */}
                <div className="w-1/2 h-full flex flex-col justify-between text-start px-8">
                    {/* 1. Integra Web - Software Médico */}
                    <div className='flex bg-white w-full h-[46%] p-4 px-5 rounded-xl items-center shadow-lg'>
                        <div className='w-1/4 flex justify-center items-center pr-2'>
                            <img src={SoftwareMedico} alt="Integra Web - Software Médico" className='w-36 h-28 object-contain'/>
                        </div>
                        <div className="text-black w-3/4 flex flex-col justify-center items-start">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className='font-bold text-xl'>Desarrollador Backend</h2>
                                <span className='bg-green-100 text-green-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full'>
                                    Actualmente
                                </span>
                            </div>
                            <p className='pb-1.5 text-gray-600 font-bold text-sm'>Integra Web - Software Médico</p>
                            <ul className="list-none space-y-1 text-xs leading-snug"> 
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
                    <div className='flex bg-white w-full h-[46%] p-4 px-5 rounded-xl items-center shadow-lg'>
                        <div className='w-1/4 flex justify-center items-center pr-2'>
                            <img src={logo} alt="Colegio Sagrado Corazón de Jesús" className='w-28 h-28 object-contain' />
                        </div>
                        <div className="w-3/4 text-black flex flex-col justify-center items-start">
                            <h2 className='font-bold text-xl'>Docente Tecnología e Informática</h2>
                            <p className='pb-1.5 text-gray-600 font-bold text-sm'>Colegio Sagrado Corazón de Jesús - Zapatoca</p>
                            <ul className="list-none space-y-1 text-xs leading-snug"> 
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
                <div className="relative w-px h-full bg-white">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white"></div>
                    <div className="absolute left-1/2 top-[23%] transform -translate-x-1/2 w-3 h-3 bg-[#ff6500] border-2 border-white rounded-full"></div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute left-1/2 top-[77%] transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Columna Derecha (2. Alexmar Software) */}
                <div className="w-1/2 h-full flex flex-col justify-center text-start px-8">
                    <div className='flex bg-white w-full h-[48%] p-4 px-5 rounded-xl items-center shadow-lg'>
                        <div className="text-black w-3/4 flex flex-col justify-center items-start">
                            <h2 className='font-bold text-xl'>Desarrollador Full Stack</h2>
                            <p className='pb-1.5 text-gray-600 font-bold text-sm'>Alexmar Software</p>
                            <ul className="list-none space-y-1 text-xs leading-snug"> 
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
                            <img src={Alexmar} alt="Alexmar Software" className='w-32 h-32 object-contain'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:h-1/10 justify-end items-center pb-4 md:pb-5'>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
        </div>
    </div>
  )
}

export default Experience