import React, { useContext } from 'react';
import { MobileContext } from '../App';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

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
            viewport={{ once: true }}
            className="my-10 sm:my-20 text-center text-3xl sm:text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto"
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
                  viewport={{ once: true }}
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
                  viewport={{ once: true }}
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

          {/* GitHub Button for Mobile */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-18 -mb-12"
          >
            <a
              href="https://github.com/ammar-Gits?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d2d35] hover:bg-[#3d3d45] text-gray-300 font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View More 
            </a>
          </motion.div>
        </div>
      ) : (
        <div className='border-neutral-900 py-5 pb-4'>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="my-20 text-center text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto"
          >
            Projects
          </motion.h1>
          <div>
            {PROJECTS.map((project, index) => (
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='-mt-2 w-full lg:w-1/4'
                >
                  <img
                    src={project.image}
                    width={200}
                    height={200}
                    className='mb-6 rounded-full'
                    alt={project.title}
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='w-full py-4 max-w-xl lg:w-3/4'
                >
                  <h6 className='mb-2 font-semibold'>{project.title}</h6>
                  <p className='mb-4 text-neutral-400'>{project.description}</p>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* GitHub Button for Desktop */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-18 -mb-12"
          >
            <a
              href="https://github.com/ammar-Gits?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d2d35] hover:bg-[#3d3d45] text-gray-300 font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View More 
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
