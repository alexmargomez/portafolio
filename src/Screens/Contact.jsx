import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Contact = (props) => {
   
  return (
    <div id="contact" {...props} className='h-screen text-white text-center pt-20 '>
        <div className=" h-1/10 relative flex items-center justify-center w-full">
            <div className="absolute w-[80%] border-t border-gray-400"></div>
            <h1 className="relative bg-[#09122c] px-4 text-4xl font-bold">Contacto</h1>
        </div>
         
        <div className='h-8/10 flex flex-col justify-center items-center w-full'>
        <div className='w-full flex justify-center items-center'>
            <div className='w-1/2 flex justify-center items-center '>
                <form className='w-2/3 flex flex-col justify-center items-center text-black bg-white p-4 rounded-xl'>
                    <input type="text" placeholder='Nombre' className='w-full p-2 mt-2 border-1 rounded-xl'/>
                    <input type="email" placeholder='Correo' className='w-full p-2 mt-2 border-1 rounded-xl'/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensaje' className='w-full p-2 mt-2 border-1 rounded-xl'></textarea>
                    <button className='w-full p-2 mt-2 rounded-xl'>Enviar</button>
                </form>

            </div>
            <div className='w-1/2 h-full flex justify-center items-center mt-4'>
                <div className='w-2/3 h-full flex flex-col items-center text-blac p-4 rounded-xl'>
                    
                    <div className='w-full h-full flex flex-col justify-center items-center mt-4'>
                        <div className='flex flex-col justify-center items-center space-y-6'>
                            <a href='www.linkedin.com/in/alexmargomez' target="_blank"className='flex justify-center items-center space-x-2 border-1 rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer'>
                                <FaLinkedin className='text-2xl'/>
                                <h3>LinkedIn</h3>
                            </a>
                            <a href='https://www.instagram.com/alexmarsoftware' target="_blank"className='flex justify-center items-center space-x-2 border-1 rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer'>
                                <FaInstagram className='text-2xl'/>
                                <h3>Instagram</h3>
                            </a>
                            <a href='https://github.com/alexmargomez' target="_blank"className='flex justify-center items-center space-x-2 border-1 rounded-4xl p-4 bg-[#09122c] text-white hover:bg-white hover:text-black cursor-pointer'>
                                <FaGithub className='text-2xl'/>
                                <h3>GitHub</h3>
                            </a>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
            
        </div>
        <div className="h-1/10 flex justify-center items-center text-white py-4">
            <p className="text-sm">&copy; 2025 Creado por Alexmar Gómez</p>
        </div>
    </div>
  )
}

export default Contact