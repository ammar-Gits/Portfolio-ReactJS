import React, { useContext } from 'react';
import { MobileContext } from '../App';
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
    const isMobile = useContext(MobileContext);

    return (
        <div>
            {isMobile ? (
                <div className='container mx-auto px-4 py-5 pb-4'>
                    <motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="my-10 sm:my-20 text-center text-3xl sm:text-4xl font-bold relative 
         after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto"
                    >
                        Projects
                    </motion.h1>
                    <div className='space-y-12'>
                        {PROJECTS.map((project, index) => (
                            <div key={index} className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    className='w-36 h-36 sm:w-1/4 flex-shrink-0'
                                >
                                    <img
                                        src={project.image}
                                        className='w-full h-full object-cover rounded-full'
                                        alt={project.title}
                                    />
                                </motion.div>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                    className='w-full max-w-xl text-center sm:text-left'
                                >
                                    <h6 className='mb-2 text-lg sm:text-xl font-semibold'>{project.title}</h6>
                                    <p className='mb-4 text-neutral-400 text-sm sm:text-base'>{project.description}</p>
                                    <div className='flex flex-wrap justify-center sm:justify-start gap-2'>
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className='rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-900'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='border-neutral-900 py-5 pb-4'>
                    <motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="my-20 text-center text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto">Projects</motion.h1>
                    <div>
                        {PROJECTS.map((project, index) => (
                            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    className='-mt-2 w-full lg:w-1/4'>
                                    <img src={project.image} width={200} height={200} className='mb-6 rounded-full' alt={project.title} />
                                </motion.div>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                    className='w-full py-4 max-w-xl lg:w-3/4'>
                                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );

}

export default Projects
