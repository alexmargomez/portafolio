import React from 'react'
import { TbBrandLaravel } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { SiNginx } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import '../styles/movements.css'



const Main = ({ id, onClickDown  }) => {
  return (
    <div id={id} className='h-screen text-white text-center pt-20 flex flex-col justify-evenly items-center'>
        <div className='flex flex-col-reverse h-4/6 justify-center items-center'>
            <h1 className='font-bold text-7xl'>Desarrollador <br/> Web</h1>
            <h2 className='text-4xl'>Alexmar Gómez</h2>

        </div>
        <div className='flex flex-col h-1/6 justify-center items-center space-y-2'>
            <div className="relative flex items-center justify-center w-full ">
                <div className="absolute w-full border-t border-gray-400"></div>
                <h3 className="relative bg-[#09122c] px-4 text-2xl">Tecnologías que manejo</h3>
            </div>
            <ul className="flex items-center text-4xl mt-4">
                <li className="mx-4 group relative">
                    <RiTailwindCssFill/>
                    <span className="tooltip">Tailwind CSS</span>
                </li>
                <li className="mx-4 group relative">
                    <FaReact/>
                    <span className="tooltip">React.js</span>
                </li>
                <li className="mx-4 group relative">
                    <TbBrandLaravel/>
                    <span className="tooltip">Laravel</span>
                </li>
                <li className="mx-4 group relative">
                    <FaPhp/>
                    <span className="tooltip">PHP</span>
                </li>
                <li className="mx-4 group relative">
                    <FaNodeJs/>
                    <span className="tooltip">Node.js</span>
                </li>
                <li className="mx-4 group relative">
                    <SiExpress  />
                    <span className="tooltip">Express.js</span>
                </li>
                <li className="mx-4 group relative">
                    <RiNextjsFill  />
                    <span className="tooltip">Next.js</span>
                </li>
                <li className="mx-4 group relative">
                    <PiFileSqlFill/>
                    <span className="tooltip">SQL</span>
                </li>
                <li className="mx-4 group relative">
                    <SiNginx/>
                    <span className="tooltip">Nginx</span>
                </li>

                <li className="mx-4 group relative">
                    <FaLinux/>
                    <span className="tooltip">Linux</span>
                </li>
                <li className="mx-4 group relative">
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