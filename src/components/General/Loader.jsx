import React from 'react';
import logo from '../../assets/codecrafters.svg';
import { motion } from 'framer-motion';
const Loader = () => {
    return (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
        className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-90 flex-col gap-4 flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0.8, boxShadow: '0 0 10px #7CEBB8' }}
                animate={{ opacity: 1, boxShadow: '0 0 20px #7CEBB8' }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                className='w-64 h-64 rounded-full bg-grey-400 bg-opacity-90 flex items-center justify-center relative z-51'>
                {/* Outer Spinner */}
                <div className="w-40 h-40 border-8 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                    {/* Inner Spinner */}
                    <div className="w-24 h-24 border-8 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
                </div>
                {/* Stationary Logo with Glow */}
                <motion.img
                    initial={{ boxShadow: '0 0 5px #ffffff', scale: 1 }}
                    animate={{ boxShadow: '0 0 30px #00ffff', scale: 1.1 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                    src={logo}
                    alt="Logo"
                    className="absolute w-20 h-20 rounded-full z-55"
                />
                
            </motion.div>
        </motion.div>
    );
};

export default Loader;
