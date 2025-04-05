import React from 'react'
import { CONTACT } from "../constants"
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { motion } from "framer-motion";

const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
    tap: { scale: 0.9, transition: { duration: 0.1 } }
};

const Contact = () => {
    return (
        <div>
            <div className='border-neutral-900 py-10 pb-4'>
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    className="my-10 text-center text-4xl font-bold relative after:block after:w-16 after:h-1 after:bg-white after:mt-2 after:mx-auto">
                    Get in touch
                </motion.h1>

                <div className="text-center tracking-tighter space-y-4">
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center space-x-2">
                        <MdLocationOn />
                        <p>{CONTACT.address} </p>
                    </motion.div>

                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center space-x-2">
                        <MdPhone />
                        <p>{CONTACT.phoneNo}</p>
                    </motion.div>

                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center space-x-2">
                        <MdEmail />
                        <p> {CONTACT.email}</p>
                    </motion.div>
                </div>


                <div className="flex justify-center pb-10 pt-5 cursor-pointer items-center gap-4 text-3xl">
                    <a href="https://www.instagram.com/_.m.ammar._/" target="_blank" rel="noopener noreferrer">
                        <motion.div variants={iconVariants} initial="hidden" animate="visible" whileHover="hover" whileTap="tap">
                            <FaInstagram />
                        </motion.div>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-ammar-a22461335/" target="_blank" rel="noopener noreferrer">
                        <motion.div variants={iconVariants} initial="hidden" animate="visible" whileHover="hover" whileTap="tap">
                            <FaLinkedin />
                        </motion.div>
                    </a>
                    <a href="https://github.com/ammar-Gits" target="_blank" rel="noopener noreferrer">
                        <motion.div variants={iconVariants} initial="hidden" animate="visible" whileHover="hover" whileTap="tap">
                            <FaGithub />
                        </motion.div>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Contact
