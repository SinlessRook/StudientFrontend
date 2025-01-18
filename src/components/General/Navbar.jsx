import React, { useContext } from 'react'
import logo from '../../assets/codecrafters.svg'
import ThemeSwitcher from '../LandingPage/ThemeSwitch'
import { motion } from 'framer-motion'
import { GlobalContext } from '../../Context/GlobalContext';
import { useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const { authTokens } = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <nav className='flex w-full bg-[#2A2A33] py-2 items-center text-white'>
            <div
                className='flex items-center space-x-16 '>
                <div
                    onClick={() => { navigate('/') }}
                    className='flex items-center hover:cursor-pointer'>
                    <motion.img
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        src={logo} alt="CodeCrafters" className='mx-4' />
                    <h1 className='text-3xl font-semibold' >Studient</h1>
                </div>

                <div className='flex gap-4 text-lg'>
                    <h1
                        onClick={() => { navigate('/schedule') }}
                        className={`relative group hover:cursor-pointer  ${location.pathname === '/schedule' ? `font-semibold` : ''}`}>
                        Schedule
                        <span
                            className={`absolute top-8 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full ${location.pathname === '/schedule' ? `w-full` : ''}`}
                        ></span>
                    </h1>
                    <h1
                        onClick={() => { navigate('/prepare') }}
                        className={`relative group hover:cursor-pointer  ${location.pathname === '/prepare' ? `font-semibold` : ''}`}>

                        Prepare
                        <span
                            className={`absolute top-8 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full ${location.pathname === '/prepare' ? `w-full` : ''}`}
                        ></span>
                    </h1>

                    <h1
                        onClick={() => { navigate('/forum') }}
                        className={`relative group hover:cursor-pointer  ${location.pathname === '/forum' ? `font-semibold` : ''}`}>
                        Forum
                        <span
                            className={`absolute top-8 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full ${location.pathname === '/forum' ? `w-full` : ''}`}
                        ></span>
                    </h1>
                </div>
            </div>

            <div className='flex gap-4 ml-auto mr-10 items-center'>
                <ThemeSwitcher />
                <div>

                </div>
                {
                    (authTokens.username!='' && authTokens.password != '') ?
                        <>
                            <figure className="size-8 z-[3] [&:where(:nth-child(2n))]:size-11 [&:where(:nth-child(2n))]:z-[4] [&:where(:not(:first-child):not(:last-child):not(:nth-child(2n)))]:size-16 [&:where(:not(:first-child):not(:last-child):not(:nth-child(2n)))]:z-[6] cursor-pointer bg-white relative rounded-full object-cover border border-solid border-zinc-300">
                                <svg viewBox="0 0 256 256" fill="red">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z" />
                                </svg>
                            </figure>
                        </> :
                        <>
                            <button
                                onClick={() => { navigate('/login') }}
                                className="relative 
                    h-12
                    w-32
                    inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-full group"
                            >
                                <span
                                    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#C4E9E2] bg-opacity-50 rounded-full group-hover:w-56 group-hover:h-56"
                                ></span>
                                <span className="absolute bottom-0 left-0 h-full -ml-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-auto h-full opacity-100 object-stretch"
                                        viewBox="0 0 487 487"
                                    >
                                        <path
                                            fill-opacity=".1"
                                            fill-rule="nonzero"
                                            fill="#FFF"
                                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="object-cover w-full h-full"
                                        viewBox="0 0 487 487"
                                    >
                                        <path
                                            fill-opacity=".1"
                                            fill-rule="nonzero"
                                            fill="#FFF"
                                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                        ></path>
                                    </svg>
                                </span>
                                <span
                                    className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                                ></span>
                                <span className="relative text-base font-bold">Log In</span>
                            </button>

                        </>
                }

            </div>
        </nav>
    )
}

export default Navbar