import React, { useContext } from 'react';
import { MobileContext } from '../App';
import { motion } from "framer-motion"

const About = () => {
    const isMobile = useContext(MobileContext);
    return (
        <div>
            {isMobile ? (
                <div className='container mx-auto py-10 pb-4 px-4'>
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="my-8 sm:my-12 text-center text-3xl sm:text-4xl font-bold relative 
            after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto"
                    >
                        Future <span className='text-neutral-500'>Goals</span>
                    </motion.h1>
                    <div className='flex justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full'
                        >
                            <p className='text-base sm:text-lg md:text-xl text-center max-w-full md:max-w-4xl mx-auto leading-relaxed'>
                                My future goals are to gain expertise in developing AI-driven applications integrating NLP, ANN, and Computer Vision while advancing my full-stack expertise with the MERN stack. I strive to contribute to AI research, optimize deep learning models, and build scalable, efficient software solutions. I am committed to continuous learning, staying updated with emerging technologies, and leveraging my skills to create innovative and impactful real-world applications.
                            </p>
                        </motion.div>
                    </div>
                </div>
            ) : (
                <div className=' border-neutral-900 py-10 pb-4'>
                    <motion.h1 whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="my-20 text-center text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto">Future
                        <span className='text-neutral-500'> Goals</span>
                    </motion.h1>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-full lg:p-5'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='flex justify-center lg:justify-center'>
                                <p className='text-xl'>My future goals are to gain expertise in developing AI-driven applications integrating NLP, ANN, and Computer Vision while advancing my full-stack expertise with the MERN stack. I strive to contribute to AI research, optimize deep learning models, and build scalable, efficient software solutions. I am committed to continuous learning, staying updated with emerging technologies, and leveraging my skills to create innovative and impactful real-world applications.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default About
