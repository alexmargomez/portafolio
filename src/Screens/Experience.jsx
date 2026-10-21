import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import logo from '../assets/LogoZapatoca.png'
import Alexmar from '../assets/Alexmar.png'
import { FaCheckCircle } from 'react-icons/fa';

const Experience = ({ id, onClickDown }) => {
  return (
    <div id={ id } className='h-screen text-white text-center pt-20 '>
        <div className="h-1/10 relative flex items-center justify-center w-full">
            <div className="absolute w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-2xl md:text-4xl font-bold">Experiencia relevante</h1>
        </div>
             
        <div className='h-8/10 flex flex-col justify-center items-center px-3 md:px-0'>
            <div className="relative w-full h-full flex flex-col md:flex-row gap-4 md:gap-0 justify-center">
                <div className="w-full md:w-1/2 md:h-1/2 flex text-start md:px-10">
                    <div className='flex bg-white w-full h-full p-4 md:px-5 rounded-xl items-center'>
                        <div className='w-1/4 flex justify-center items-center pr-2'>
                            <img src={Alexmar} alt="Alexmar Software" className='w-24 h-24 md:w-36 md:h-36 object-contain'/>
                        </div>
                        <div className="text-black w-3/4 flex flex-col justify-center items-start">
                            <h2 className='font-bold text-lg md:text-2xl'>Desarrollador Web</h2>
                            <p className='pb-2 text-gray-500 font-bold text-sm md:text-base'>Alexmar Software</p>
                            <ul className="list-none space-y-1 text-xs md:text-sm"> 
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1 shrink-0" /> 
                                    Desarrollo y mantenimiento de plataformas Full Stack utilizando Laravel, Symfony, PHP, Node.js, Python/Django, React, Vue 3 y TypeScript.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1 shrink-0" />
                                    Diseño de API REST bajo Arquitectura Hexagonal y gestión avanzada de bases de datos relacionales SQL (MySQL, MariaDB, PostgreSQL).
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1 shrink-0" />
                                    Administración de servidores Linux VPS, orquestación con Docker Compose, despliegues y seguridad SSL.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1 shrink-0" />
                                    Control de versiones con Git y pruebas automatizadas con Jest y PHPUnit.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block relative w-px h-full bg-white">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-[80%] bg-white"></div>
                    <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute left-1/2 top-3/4 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="w-full md:w-1/2 flex justify-end flex-col">
                    <div className="md:h-1/2 w-full flex justify-center items-center text-start md:px-10">
                        <div className='flex bg-white w-full h-full p-4 md:px-5 rounded-xl items-center'>
                            <div className="w-3/4 text-black">
                                <h2 className='font-bold text-lg md:text-2xl'>Docente Tecnología e Informática</h2>
                                <p className='pb-2 text-gray-500 font-bold text-sm md:text-base'>Colegio Sagrado Corazón de Jesús - Zapatoca</p>
                                <p className='text-xs md:text-sm mb-1'>Desarrollo de proyectos de software para estudiantes de sexto a once, enseñando:</p>
                                <ul className="list-none space-y-1 text-xs md:text-sm"> 
                                    <li className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mr-2 mt-1 shrink-0" /> 
                                        Lógica de programación y estructura de datos.
                                    </li>
                                    <li className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mr-2 mt-1 shrink-0" />
                                        Diseño de bases de datos y solución de problemas computacionales.
                                    </li>
                                    <li className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mr-2 mt-1 shrink-0" />
                                        Desarrollo de herramientas digitales aplicadas a proyectos institucionales.
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/4 flex justify-center items-center pl-2'>
                                <img src={logo} alt="Colegio Sagrado Corazón de Jesús" className='w-24 h-24 md:w-36 md:h-36 object-contain' />
                            </div>
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