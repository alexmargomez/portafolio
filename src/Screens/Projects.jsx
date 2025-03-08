import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandLaravel } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { SiNginx } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbWorldCheck } from "react-icons/tb";
import '../styles/movements.css'

const Projects = ({id, onClickDown}) => {
  return (
    <div id={id} className='h-screen text-white text-center pt-20'>
        <div className=" h-1/10 relative flex items-center justify-center w-full">
            <div className="absolute w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-4xl font-bold">Proyectos</h1>
        </div>
        <div className='h-8/10 flex flex-col justify-center items-center w-full p-5'>
                <div className='h-3/4 grid grid-cols-2 gap-2 w-full text-black'>
                <div className='bg-white h-full flex flex-col items-center rounded-4xl '>
                    <div className='h-3/4 w-full flex flex-col justify-center items-start text-start overflow-hidden rounded-4xl pr-4 pl-4'>
                        <h1 className='font-bold text-2xl mb-2'>Factupos API REST</h1>
                        <p className='text-sm'>
                        API REST desarrollada con Laravel, utilizando Eloquent ORM para la gestión de datos y PHPUnit para pruebas automatizadas. Se ejecuta sobre Nginx y MariaDB en un servidor Linux. Implementa autenticación segura mediante tokens con Laravel Sanctum, garantizando protección y control de acceso a los recursos del sistema.
                        </p>
                    </div>
                    <div className='h-1/4 w-full flex justify-between items-center rounded-4xl pr-8 pl-8 '>
                        <div className='flex space-x-2 text-black/60'>
                            <div className="relative group">
                                <TbBrandLaravel className='text-3xl' />
                                <span className="tooltip">Laravel</span>
                            </div>
                            <div className="relative group">
                                <FaPhp className='text-3xl' />
                                <span className="tooltip">PHP</span>
                            </div>
                            <div className="relative group">
                                <SiNginx className='text-3xl' />
                                <span className="tooltip">Nginx</span>
                            </div>
                            <div className="relative group">
                                <PiFileSqlFill className='text-3xl' />
                                <span className="tooltip">SQL</span>
                            </div>
                            <div className="relative group">
                                <FaGitAlt className='text-3xl' />
                                <span className="tooltip">Git</span>
                            </div>
                            <div className="relative group">
                                <FaLinux className='text-3xl' />
                                <span className="tooltip">Linux</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center space-x-2'>
                        <h3 className='font-bold text-2xl'>BackEnd</h3>
                        <a href="https://github.com/alexmargomez/Factupos-API_REST" target="_blank" className="relative group">
                            <FaGithub className='text-4xl cursor-pointer hover:text-[#ff6500]' />
                            <span className="tooltip">Ver GitHub</span>
                        </a>
                        </div>
                    </div>
                </div>
                <div className='bg-white h-full flex flex-col items-center rounded-4xl'>
                <div className='h-3/4 w-full flex flex-col justify-center items-start text-start overflow-hidden rounded-4xl pr-4 pl-4'>
                    <h1 className='font-bold text-2xl mb-2'>Electrimotos sistema POS </h1>
                    <p className='text-sm '>
                    Sistema de gestión de negocios que, mediante el consumo de una API REST, permite la facturación, control de inventario, agendamiento y administración de clientes y vehículos. Desarrollado con React y Tailwind CSS, implementa asincronía, manejo eficiente de componentes y pruebas unitarias con Jest para garantizar estabilidad y rendimiento.
                    </p>
                </div>
                <div className='h-1/4 w-full flex justify-between items-center rounded-4xl pr-8 pl-8'>
                    <div className='flex space-x-2 text-black/60'>
                        <div className="relative group">
                            <FaReact className='text-3xl' />
                            <span className="tooltip">React</span>
                        </div>
                        <div className="relative group">
                            <RiTailwindCssFill className='text-3xl' />
                            <span className="tooltip">Tailwind CSS</span>
                        </div>
                        <div className="relative group">
                            <FaJs className='text-3xl' />
                            <span className="tooltip">JavaScript</span>
                        </div>
                        <div className="relative group">
                            <FaGitAlt className='text-3xl' />
                            <span className="tooltip">Git</span>
                        </div>
                        <div className="relative group">
                            <SiJest className='text-3xl' />
                            <span className="tooltip">Jest</span>
                        </div>
                    </div>
                    <div className='flex justify-end items-center space-x-2'>
                    <h3 className='font-bold text-2xl'>FrontEnd</h3>
                    <a  href="http://electrimotos.factupos.me" target="_blank" className="relative group">
                        <TbWorldCheck className='text-4xl cursor-pointer hover:text-[#ff6500]' />
                        <span className="tooltip ">Ver Web</span>
                    </a>
                    <a href='https://github.com/alexmargomez/Electrimotos-Frontend' target="_blank" className="relative group">
                        <FaGithub className='text-4xl cursor-pointer hover:text-[#ff6500]' />
                        <span className="tooltip">Ver GitHub</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className='bg-white h-full flex flex-col items-center rounded-4xl'>
                <div className='h-3/4 w-full flex flex-col justify-center items-start text-start overflow-hidden rounded-4xl pr-4 pl-4'>
                    <h1 className='font-bold text-2xl mb-2'>Factupos LANDING PAGE</h1>
                    <p className='text-sm'>
                    Es un sitio web moderno y optimizado para promocionar Factupos, un sistema POS SaaS para la gestión de negocios. Desarrollado con Next.js para un rendimiento rápido y SEO optimizado, Tailwind CSS para un diseño limpio y responsive, y desplegado en un servidor Linux con Nginx para una entrega eficiente y control total.
                    </p>
                </div>
                <div className='h-1/4 w-full flex justify-between items-center rounded-4xl pr-8 pl-8'>
                    <div className='flex space-x-2 text-black/60'>
                        <div className="relative group">
                            <FaJs className='text-3xl' />
                            <span className="tooltip">JavaScript</span>
                        </div>
                        <div className="relative group">
                            <FaReact className='text-3xl' />
                            <span className="tooltip">React</span>
                        </div>
                        <div className="relative group">
                            <RiNextjsFill className='text-3xl' />
                            <span className="tooltip">Next.js</span>
                        </div>
                        <div className="relative group">
                            <RiTailwindCssFill className='text-3xl' />
                            <span className="tooltip">Tailwind CSS</span>
                        </div>
                        <div className="relative group">
                            <FaGitAlt className='text-3xl' />
                            <span className="tooltip">Git</span>
                        </div>
                        <div className="relative group">
                            <SiJest className='text-3xl' />
                            <span className="tooltip">Jest</span>
                        </div>
                    </div>
                    <div className='flex justify-end items-center space-x-2'>
                    <h3 className='font-bold text-2xl'>FrontEnd</h3>
                    <a href='http://factupos.me' target="_blank" className="relative group">
                        <TbWorldCheck className='text-4xl cursor-pointer hover:text-[#ff6500]' />
                        <span className="tooltip ">Ver Web</span>
                    </a>
                    <a href='https://github.com/alexmargomez/Factupos' target="_blank" className="relative group">
                        <FaGithub className='text-4xl cursor-pointer hover:text-[#ff6500]' />
                        <span className="tooltip ">Ver GitHub</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className='bg-white h-full flex flex-col items-center rounded-4xl'>
                <div className='h-3/4 w-full flex flex-col justify-center items-start text-start overflow-hidden rounded-4xl pr-4 pl-4'>
                    <h1 className='font-bold text-2xl mb-2'>S91Store Ecomerce</h1>
                    <p className='text-sm'>
                    E-commerce fullstack con React y Tailwind para una interfaz moderna y responsive. Backend en Node.js y Express, con MySQL como base de datos. Desplegado en servidor Linux con Nginx, garantizando seguridad y alto rendimiento.
                    </p>
                </div>
                <div className='h-1/4 w-full flex justify-between items-center rounded-4xl pr-8 pl-8'>
                    <div className='flex space-x-2 text-black/60'>
                        <div className="relative group">
                            <FaNodeJs className='text-3xl' />
                            <span className="tooltip">Node.js</span>
                        </div>
                        <div className="relative group">
                            <SiExpress className='text-3xl' />
                            <span className="tooltip">Express.js</span>
                        </div>
                        <div className="relative group">
                            <PiFileSqlFill className='text-3xl' />
                            <span className="tooltip">SQL</span>
                        </div>
                        <div className="relative group">
                            <FaLinux className='text-3xl' />
                            <span className="tooltip">Linux</span>
                        </div>
                        <div className="relative group">
                            <SiNginx className='text-3xl' />
                            <span className="tooltip">Nginx</span>
                        </div>
                        <div className="relative group">
                            <FaJs className='text-3xl' />
                            <span className="tooltip">JavaScript</span>
                        </div>
                        <div className="relative group">
                            <FaReact className='text-3xl' />
                            <span className="tooltip">React</span>
                        </div>
                        <div className="relative group">
                            <RiNextjsFill className='text-3xl' />
                            <span className="tooltip">Next.js</span>
                        </div>
                        <div className="relative group">
                            <RiTailwindCssFill className='text-3xl' />
                            <span className="tooltip">Tailwind CSS</span>
                        </div>
                        <div className="relative group">
                            <FaGitAlt className='text-3xl' />
                            <span className="tooltip">Git</span>
                        </div>
                        <div className="relative group">
                            <SiJest className='text-3xl' />
                            <span className="tooltip">Jest</span>
                        </div>
                    </div>
                    <div className='flex justify-end items-center space-x-2'>
                    <h3 className='font-bold text-2xl'>FullStack</h3>
                    <a href='http://s91store.comerciozap.tech' target="_blank" className="relative group">
                        <TbWorldCheck className='text-4xl cursor-pointer hover:text-[#ff6500]' />
                        <span className="tooltip"> Ver Web</span>
                    </a>
                    <a href='https://github.com/alexmargomez/Ecomerce-s91store' target="_blank" className="relative group">
                        <FaGithub className='text-4xl cursor-pointer hover:text-[#ff6500]' />
                        <span className="tooltip">Ver GitHub</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className='h-1/4 flex justify-center items-center'>
                <a href='https://github.com/alexmargomez' target="_blank" className='flex justify-center items-center space-x-2 border-1 rounded-4xl p-4 hover:bg-amber-50 hover:text-black cursor-pointer'>
                    <FaGithub className='text-2xl'/>
                    <h3>Ver GitHub</h3>
                </a>
            </div>
        </div>
        <div className='flex flex-col h-1/10 justify-end items-center pb-5 '>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer"  onClick={onClickDown}/>
        </div>
    </div>
  )
}

export default Projects