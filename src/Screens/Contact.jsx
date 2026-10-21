import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = (props) => {
  return (
    <div id="contact" {...props} className='h-screen text-white text-center pt-20 '>
        <div className=" h-1/10 relative flex items-center justify-center w-full">
            <div className="absolute w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-4xl font-bold">Contacto</h1>
        </div>
         
        <div className='h-8/10 flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center space-y-6'>
                <a
                    href='https://www.linkedin.com/in/alexmargomez/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex justify-center items-center space-x-2 border-1 rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer'
                >
                    <FaLinkedin className='text-2xl'/>
                    <h3>LinkedIn</h3>
                </a>
                <a
                    href='https://github.com/alexmargomez'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex justify-center items-center space-x-2 border-1 rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer'
                >
                    <FaGithub className='text-2xl'/>
                    <h3>GitHub</h3>
                </a>
                <a
                    href='mailto:fabioalexmar@gmail.com'
                    className='flex justify-center items-center space-x-2 border-1 rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer'
                >
                    <FaEnvelope className='text-2xl'/>
                    <h3>fabioalexmar@gmail.com</h3>
                </a>
            </div>
        </div>
        <div className="h-1/10 flex justify-center items-center text-white py-4">
            <p className="text-sm">&copy; 2025 Creado por Alexmar Gómez</p>
        </div>
    </div>
  )
}

export default Contact