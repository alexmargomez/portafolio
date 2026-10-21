import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = (props) => {
  return (
    <div id="contact" {...props} className='min-h-screen md:h-screen text-white text-center pt-24 md:pt-20 flex flex-col justify-between items-center'>
        <div className="md:h-1/10 relative flex items-center justify-center w-full py-2 md:py-0">
            <div className="absolute w-[85%] md:w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-2xl md:text-4xl font-bold">Contacto</h1>
        </div>
         
        <div className='md:h-8/10 flex flex-col justify-center items-center w-full px-6 my-8 md:my-0'>
            <div className='flex flex-col justify-center items-center space-y-5 w-full max-w-xs sm:max-w-sm'>
                <a
                    href='https://www.linkedin.com/in/alexmargomez/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full flex justify-center items-center space-x-3 border rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer transition-colors'
                >
                    <FaLinkedin className='text-2xl shrink-0'/>
                    <h3>LinkedIn</h3>
                </a>
                <a
                    href='https://github.com/alexmargomez'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full flex justify-center items-center space-x-3 border rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer transition-colors'
                >
                    <FaGithub className='text-2xl shrink-0'/>
                    <h3>GitHub</h3>
                </a>
                <a
                    href='mailto:fabioalexmar@gmail.com'
                    className='w-full flex justify-center items-center space-x-3 border rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer transition-colors'
                >
                    <FaEnvelope className='text-2xl shrink-0'/>
                    <h3 className='text-sm sm:text-base break-all'>fabioalexmar@gmail.com</h3>
                </a>
            </div>
        </div>
        <div className="md:h-1/10 flex justify-center items-center text-white py-4">
            <p className="text-sm">&copy; 2025 Creado por Alexmar Gómez</p>
        </div>
    </div>
  )
}

export default Contact