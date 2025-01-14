import React from 'react'
import img from '../../assets/Hero.jpeg'
import { motion } from 'framer-motion'
const Hero = (props) => {
    const ref = props.scroll
    return (
        <div className='min-w-screen flex justify-center items-center p-8 '
            style={{
                background: "linear-gradient(226.08deg, #FFFFFF 24.47%, #C5EEC4 79.1%, #7CEBB8 78.1%)",
            }}
        >
            <div className='flex justify-center items-center flex-col gap-8 rounded-3xl'>
                <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0,transition:{ duration: 1, delay: 1.3, ease: 'easeInOut' }}}
                whileHover={{ scale: 1.1 ,y: -5,cursor: 'pointer', boxShadow: '0px 10px 10px 0px rgba(47, 0, 237, 0.1)',
                    transition: {
                        duration: 3,
                        delay: 0.5,
                        ease:'anticipate',
                        type: 'spring',
                        stiffness: 100

                    }
                }}
                className='text-5xl font-bold leading-[61px] bg-gradient-to-r from-[#01355C] via-[#AD434E] to-[#AD434E] bg-clip-text text-transparent'>
                    
                    Study Plan Succeed
                </motion.h1>
                <motion.div 
                initial={{ opacity: 0, y: 30,scale: 0.5}}
                animate={{ opacity: 1, y: 0,scale:1}}
                transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                class="relative">
                    <motion.img
                         animate={{
                            boxShadow: [
                              '0px 0px 10px 10px rgba(47, 0, 237, 0.1)',
                              '0px 0px 10px 10px rgba(47, 0, 237, 0.3)', 
                              
                            ]
                          }}
                          transition={{
                            duration: 7, 
                            repeat: Infinity, 
                            repeatType: 'reverse', 
                            delay: 0.5,
                            type: 'spring',
                            stiffness: 100, 
                          }}
                        src={img}
                        class="w-80 h-80 rounded-3xl hover:scale-105">
                    </motion.img>

                    <motion.h1 className="absolute top-0 
                    left-0 flex items-center w-80 h-80 rounded-3xl custom-text p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0,scale: 1.1 }}
                        transition={{ duration: 0.8, }}
                    >

                        Studient
                    </motion.h1>
                </motion.div>


                <motion.h1
                initial={{ opacity: 0,}}
                animate={{ opacity: 1,}}
                transition={{ duration: 0.5, delay: 1.8, ease: 'easeInOut' }}
                className='text-3xl font-light text-[#2A2A31]'>Never Miss A Deadline</motion.h1>
                <motion.div 
                initial={{ opacity: 0,scale: 0.5 }}
                animate={{ opacity: 1,scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8, ease: 'easeInOut' }}
                className="relative group">
                    <button 
                        onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}
                        className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-full shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <span className="relative z-10 block px-6 py-3 rounded-full bg-gray-950">
                            <div className="relative z-10 flex items-center space-x-2">
                                <span className="transition-all duration-500 group-hover:translate-x-1">Let's get started</span>
                                <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
                                </svg>
                            </div>
                        </span>
                    </button>
                </motion.div>
            </div>
        </div>

    )
}

export default Hero