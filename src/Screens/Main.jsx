import React from 'react'
import { TbBrandLaravel } from "react-icons/tb";
import {
  FaPhp,
  FaSymfony,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaPython,
  FaDocker,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { SiNginx, SiExpress, SiTypescript, SiDjango } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import '../styles/movements.css'

const Main = ({ id, onClickDown }) => {
  return (
    <div id={id} className='h-screen text-white text-center pt-20 flex flex-col justify-evenly items-center px-4'>
        <div className='flex flex-col-reverse h-4/6 justify-center items-center'>
            <h1 className='font-bold text-5xl md:text-7xl'>Desarrollador <br/> Web</h1>
            <h2 className='text-2xl md:text-4xl mb-2'>Alexmar Gómez</h2>
        </div>
        <div className='flex flex-col h-1/6 justify-center items-center space-y-2 w-full'>
            <div className="relative flex items-center justify-center w-full">
                <div className="absolute w-full border-t border-gray-400"></div>
                <h3 className="relative bg-[#09122c] px-4 text-xl md:text-2xl">Tecnologías que manejo</h3>
            </div>
            <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-3xl md:text-4xl mt-4 px-2">
                <li className="group relative">
                    <RiTailwindCssFill/>
                    <span className="tooltip">Tailwind CSS</span>
                </li>
                <li className="group relative">
                    <FaReact/>
                    <span className="tooltip">React.js</span>
                </li>
                <li className="group relative">
                    <FaVuejs/>
                    <span className="tooltip">Vue.js</span>
                </li>
                <li className="group relative">
                    <SiTypescript/>
                    <span className="tooltip">TypeScript</span>
                </li>
                <li className="group relative">
                    <TbBrandLaravel/>
                    <span className="tooltip">Laravel</span>
                </li>
                <li className="group relative">
                    <FaSymfony/>
                    <span className="tooltip">Symfony</span>
                </li>
                <li className="group relative">
                    <FaPhp/>
                    <span className="tooltip">PHP</span>
                </li>
                <li className="group relative">
                    <FaPython/>
                    <span className="tooltip">Python</span>
                </li>
                <li className="group relative">
                    <SiDjango/>
                    <span className="tooltip">Django</span>
                </li>
                <li className="group relative">
                    <FaNodeJs/>
                    <span className="tooltip">Node.js</span>
                </li>
                <li className="group relative">
                    <SiExpress/>
                    <span className="tooltip">Express.js</span>
                </li>
                <li className="group relative">
                    <RiNextjsFill/>
                    <span className="tooltip">Next.js</span>
                </li>
                <li className="group relative">
                    <PiFileSqlFill/>
                    <span className="tooltip">SQL</span>
                </li>
                <li className="group relative">
                    <FaDocker/>
                    <span className="tooltip">Docker</span>
                </li>
                <li className="group relative">
                    <SiNginx/>
                    <span className="tooltip">Nginx</span>
                </li>
                <li className="group relative">
                    <FaLinux/>
                    <span className="tooltip">Linux</span>
                </li>
                <li className="group relative">
                    <FaGitAlt/>
                    <span className="tooltip">Git</span>
                </li>
            </ul>
        </div>
        <div className='flex flex-col h-1/6 justify-end items-center pb-5'>
            <FaAngleDown className="text-4xl iconDownUp cursor-pointer" onClick={onClickDown}/>
        </div>
    </div>
  )
}

export default Main