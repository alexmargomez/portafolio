import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import logo from '../assets/LogoZapatoca.png'
import Alexmar from '../assets/Alexmar.png'
import { FaCheckCircle } from 'react-icons/fa';

const Experience = ({id, onClickDown}) => {
  return (
    <div id={ id } className='h-screen text-white text-center pt-20 '>
            
        <div className=" h-1/10 relative flex items-center justify-center w-full">
            <div className="absolute w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-4xl font-bold">Experiencia relevante</h1>
        </div>
             
        <div className='h-8/10 flex flex-col justify-center items-center '>
            <div className="relative w-full h-full flex">
                <div className="w-1/2 h-1/2 flex  text-start pr-10 pl-10">
                    <div className='flex bg-white w-full h-full p-2 pr-5 pl-5  rounded-xl'>
                        <div className='w-1/4 flex justify-center items-center'>
                            <img src={Alexmar} alt="" className='w-40 h-40'/>
                        </div>
                        <div className="text-black w-3/4 flex flex-col justify-center items-start">
                            <h2 className='font-bold text-2xl '>Desarrollador Web </h2>
                            <p className='pb-2 text-gray-500 font-bold'>Alexmar Software</p>
                            <ul className="list-none space-y-1"> 
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1" /> 
                                    Desarrollo de plataformas web completas utilizando Laravel, Node.js, Express, React y Tailwind.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                                    Diseño y gestión de bases de datos relacionales con SQL y Laravel en la creación de API REST.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                                    Administración de servidores Linux con Nginx, configuración de despliegues y seguridad.
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                                    Control de versiones con Git y pruebas automatizadas con Jest y PHPUnit.
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                        
                </div>

                <div className="relative w-px h-full bg-white">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-[80%] bg-white"></div>
                    <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute left-1/2 top-3/4 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="w-1/2 flex justify-end flex-col">
                    <div className="h-1/2 w-full flex justify-center items-center text-start space-x-5 pr-10 pl-10">
                        <div className='flex bg-white w-full h-full p-2 pr-5 pl-5 rounded-xl'>
                            <div className="w-3/4 text-black">
                                <h2 className='font-bold text-2xl'>Docente Tecnología e informática</h2>
                                <p className='pb-2 text-gray-500 font-bold'>Colegio sagrado corazón de Jesús - Zapatoca</p>
                                <p>Desarrollo de proyectos de software para estudiantes de sexto a once, enseñando:</p>
                                <ul className="list-none space-y-1"> 
                                    <li className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mr-2 mt-1" /> 
                                        Lógica de programación y estructura de datos.
                                    </li>
                                    <li className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                                        Diseño de bases de datos y solución de problemas computacionales.
                                    </li>
                                    <li className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                                        Desarrollo de herramientas digitales aplicadas a proyectos institucionales.
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/4 flex justify-center items-center'>
                                <img src={logo} alt="Colegio" className='w-40 h-37' />
                            </div>
                        </div>                         
                    </div>
                </div>

            </div>
        </div>
        <div className='flex flex-col h-1/10 justify-end items-center pb-5 '>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer"  onClick={onClickDown}/>
        </div>
            
    </div>
  )
}

export default Experience