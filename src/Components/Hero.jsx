import React, { useContext } from 'react';
import { MobileContext } from '../App';
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/pic.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

const Hero = () => {
  return (
    <div className='border-neutral-900 lg:mb-35 px-4 md:px-0'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='py-10 md:py-20 flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='pb-6 md:pb-16 text-4xl md:text-6xl font-thin tracking-tight text-center lg:text-left lg:mt-22 lg:text-7xl'
            >
              Muhammad Ammar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='bg-gradient-to-r from-pink-100 via-slate-500 to-purple-300 bg-clip-text text-2xl md:text-4xl tracking-tight text-transparent text-center lg:text-left'
            >
              Software Developer | AI Enthusiast
            </motion.span>
            <motion.p
  variants={container(1)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className='my-2 text-base md:text-xl py-3 md:py-5 font-light tracking-tighter text-center lg:text-left'
>
  
  <ul className="list-disc list-inside">
    <p>I'm currently pursuing a Bachelor's in Artificial Intelligence at FAST Islamabad, with a strong focus on training AI models and optimizing Artificial Neural Networks (ANNs). I apply NLP and Computer Vision techniques to develop real-world solutions. On the development side, I have hands-on experience building dynamic, scalable web applications using the MERN stack. Proficient in data structures, algorithms, and MySQL, I thrive on solving complex problems. My goal is to create intelligent, efficient, and impactful tech solutions that truly make a difference.</p>
  </ul>
</motion.p>

          
          </div>
          
        </div>
        <div className='w-full lg:w-1/2 lg:p-50'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover"
              src={profilePic}
              alt="profile"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
