import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = (props) => {
  return (
    <div
      id="contact"
      {...props}
      className='h-dvh text-white text-center pt-22 sm:pt-24 md:pt-20 pb-4 flex flex-col justify-between items-center px-4 sm:px-6 overflow-hidden'
    >
      {/* Encabezado de Sección */}
      <div className="flex flex-col items-center space-y-1.5">
        <span className="px-3 py-0.5 rounded-full bg-[#ff6500]/15 border border-[#ff6500]/40 text-[#ff6500] text-xs font-semibold uppercase tracking-wider">
          Hablemos
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Canales de <span className="text-[#ff6500]">Contacto</span>
        </h1>
      </div>

      {/* Tarjeta Central de Contacto */}
      <div className='flex-1 flex flex-col justify-center items-center w-full max-w-xl my-2'>
        <div className='w-full bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm shadow-2xl flex flex-col items-center space-y-5'>
          <p className='text-xs sm:text-sm md:text-base text-gray-300 max-w-md leading-relaxed'>
            ¿Tienes una propuesta laboral, proyecto de desarrollo o consultoría técnica? Contáctame directamente por cualquiera de estos medios:
          </p>

          <div className='flex flex-col justify-center items-center space-y-3.5 w-full max-w-sm'>
            <a
              href='https://www.linkedin.com/in/alexmargomez/'
              target="_blank"
              rel="noopener noreferrer"
              className='w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 hover:border-[#ff6500] hover:bg-[#ff6500]/10 text-white cursor-pointer transition-all group'
            >
              <div className='flex items-center space-x-3.5'>
                <div className='p-2.5 rounded-xl bg-[#ff6500]/20 text-[#ff6500] group-hover:bg-[#ff6500] group-hover:text-white transition-colors'>
                  <FaLinkedin className='text-xl'/>
                </div>
                <div className='text-start'>
                  <h3 className='font-bold text-sm sm:text-base'>LinkedIn</h3>
                  <p className='text-xs text-gray-400'>/in/alexmargomez</p>
                </div>
              </div>
              <span className='text-xs text-[#ff6500] font-semibold'>Conectar &rarr;</span>
            </a>

            <a
              href='https://github.com/alexmargomez'
              target="_blank"
              rel="noopener noreferrer"
              className='w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 hover:border-[#ff6500] hover:bg-[#ff6500]/10 text-white cursor-pointer transition-all group'
            >
              <div className='flex items-center space-x-3.5'>
                <div className='p-2.5 rounded-xl bg-[#ff6500]/20 text-[#ff6500] group-hover:bg-[#ff6500] group-hover:text-white transition-colors'>
                  <FaGithub className='text-xl'/>
                </div>
                <div className='text-start'>
                  <h3 className='font-bold text-sm sm:text-base'>GitHub</h3>
                  <p className='text-xs text-gray-400'>@alexmargomez</p>
                </div>
              </div>
              <span className='text-xs text-[#ff6500] font-semibold'>Repositorios &rarr;</span>
            </a>

            <a
              href='mailto:fabioalexmar@gmail.com'
              className='w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 hover:border-[#ff6500] hover:bg-[#ff6500]/10 text-white cursor-pointer transition-all group'
            >
              <div className='flex items-center space-x-3.5 min-w-0'>
                <div className='p-2.5 rounded-xl bg-[#ff6500]/20 text-[#ff6500] group-hover:bg-[#ff6500] group-hover:text-white transition-colors shrink-0'>
                  <FaEnvelope className='text-xl'/>
                </div>
                <div className='text-start min-w-0'>
                  <h3 className='font-bold text-sm sm:text-base'>Correo Electrónico</h3>
                  <p className='text-xs text-gray-300 truncate'>fabioalexmar@gmail.com</p>
                </div>
              </div>
              <span className='text-xs text-[#ff6500] font-semibold shrink-0 ml-2'>Escribir &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center text-gray-400 pt-1">
        <p className="text-xs sm:text-sm">&copy; 2025 Creado por <strong className='text-white'>Alexmar Gómez</strong></p>
      </div>
    </div>
  )
}

export default Contact