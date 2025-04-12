import React, { useContext } from 'react';
import { MobileContext } from '../App';
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiPython, SiTailwindcss, SiRedux, SiMysql } from 'react-icons/si';
import { SiPytorch, SiTensorflow } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa'
import { motion } from "framer-motion"

const iconVars = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})
const Skills = () => {
    const isMobile = useContext(MobileContext);
    return (
        <div>
            {isMobile ? (
                <div className='border-neutral-800 pb-12 md:pb-24 px-4 md:px-0'>
                    <motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="my-10 md:my-20 text-center text-3xl md:text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto">
                        Technical Skills
                    </motion.h1>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className='flex flex-wrap items-center justify-center gap-3 md:gap-4'>
                        {[
                            { Icon: RiReactjsLine, color: "text-cyan-400", duration: 3 },
                            { Icon: TbBrandNextjs, color: "", duration: 2 },
                            { Icon: SiMongodb, color: "text-green-500", duration: 5 },
                            { Icon: SiPython, color: "text-yellow-400", duration: 2 },
                            { Icon: SiTensorflow, color: "text-orange-300", duration: 6 },
                            { Icon: SiRedux, color: "text-purple-700", duration: 6 },
                            { Icon: SiPytorch, color: "text-red-500", duration: 6 },
                            { Icon: SiTailwindcss, color: "text-blue-300", duration: 6 },
                            { Icon: FaNodeJs, color: "text-green-500", duration: 4 },
                            { Icon: SiMysql, color: "text-cyan-500", duration: 2 }
                        ].map(({ Icon, color, duration }, index) => (
                            <motion.div
                                key={index}
                                variants={iconVars(duration)}
                                initial="initial"
                                animate="animate"
                                viewport={{ once: true }}
                                className='rounded-2xl border-4 border-neutral-800 p-2 mb-2 md:p-4 transform transition-transform hover:scale-90'>
                                <Icon className={`text-5xl md:text-7xl ${color}`} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            ) : (
                <div className=' border-neutral-800 pb-24'>
                    <motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="my-20 text-center text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto">Technical Skills</motion.h1>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className='flex flex-wrap items-center justify-center gap-4'>
                        <motion.div
                            variants={iconVars(3)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <RiReactjsLine className="text-7xl text-cyan-400" />
                        </motion.div>
                        <motion.div
                            variants={iconVars(2)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <TbBrandNextjs className="text-7xl " />
                        </motion.div>
                        <motion.div
                            variants={iconVars(5)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <SiMongodb className="text-7xl text-green-500" />
                        </motion.div>
                        <motion.div
                            variants={iconVars(2)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <SiPython className="text-7xl text-blue-400" />
                        </motion.div>
                        <motion.div
                            variants={iconVars(2)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <SiPytorch className="text-7xl text-red-500" />
                        </motion.div>
                        <motion.div
                            variants={iconVars(6)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <SiRedux className="text-7xl text-purple-700" />
                        </motion.div>
                        <motion.div
                            variants={iconVars(6)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <SiTensorflow className="text-7xl text-orange-300" />
                        </motion.div>
                        <motion.div
                            variants={iconVars(4)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <FaNodeJs className="text-7xl text-green-500" />
                        </motion.div>
                        <motion.div
                            variants={iconVars(2)}
                            initial="initial"
                            animate="animate"
                            className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <SiMysql className="text-7xl text-cyan-500" />
                        </motion.div>
                    </motion.div>

                </div>
            )}
        </div>

    )
}

export default Skills
