import React, { useContext } from 'react';
import { MobileContext } from '../App';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
  const isMobile = useContext(MobileContext);
  return (
    <div>
      {isMobile ? (
        <div className='border-neutral-900 py-10 pb-4 px-4 md:px-0'>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="my-10 md:my-20 text-center text-3xl md:text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto"
          >
            Experience
          </motion.h1>
          <div className='space-y-6 md:space-y-8'>
            {EXPERIENCES.map((experience, index) => (
              <div key={index} className='flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-6'>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='w-full md:w-1/4 text-center md:text-left'
                >
                  <p className='text-sm text-neutral-400'>{experience.year}</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='w-full md:w-3/4 text-center md:text-left'
                >
                  <h6 className='mb-2 font-semibold text-base md:text-lg'>
                    {experience.role} - <span className='text-xs md:text-sm text-purple-100'>{experience.company}</span>
                  </h6>
                  <p className='mb-4 text-sm md:text-base text-neutral-400'>{experience.description}</p>
                  <div className='flex flex-wrap justify-center md:justify-start gap-2'>
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='rounded bg-neutral-900 px-2 py-1 text-xs md:text-sm font-medium text-purple-800'
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
        <div className=' border-neutral-900 py-10 pb-4'>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="my-20 text-center text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto"
          >
            Experience
          </motion.h1>
          <div>
            {EXPERIENCES.map((experience, index) => (
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='w-full lg:w-1/4'
                >
                  <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='w-full max-w-xl lg:w-3/4'
                >
                  <h6 className='mb-2 font-semibold'>
                    {experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span>
                  </h6>
                  <p className='mb-4 text-neutral-400'>{experience.description}</p>
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
