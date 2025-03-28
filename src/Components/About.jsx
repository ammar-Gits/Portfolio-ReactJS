import React, { useContext } from 'react';
import { MobileContext } from '../App';
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {
    const isMobile = useContext(MobileContext);
    return (
        <div>
            {isMobile ? (
                <div className='border-neutral-900 py-10 pb-4 px-4 md:px-0'>
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="my-20 text-center text-3xl md:text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto"
                    >
                        About <span className='text-neutral-500'> Me</span>
                    </motion.h1>
                    <div className='flex flex-wrap justify-center'>
                        <div className='w-full lg:w-full lg:p-5'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='flex justify-center lg:justify-center'
                            >
                                <p className='text-base md:text-xl max-w-full md:max-w-4xl text-center px-4 md:px-0'>
                                    {ABOUT_TEXT}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className=' border-neutral-900 py-10 pb-4'>
                    <motion.h1 whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="my-20 text-center text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto">About
                        <span className='text-neutral-500'> Me</span>
                    </motion.h1>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-full lg:p-5'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='flex justify-center lg:justify-center'>
                                <p className='text-xl'>{ABOUT_TEXT}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>


    )
}

export default About
