import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
    tap: { scale: 0.9, transition: { duration: 0.1 } }
};

const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        x: "100%",
        transition: { duration: 0.3 }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 }
    }
};

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const sections = ["Home", "About", "Education", "Experience", "Projects"];

    const handleScroll = (sectionId) => {
        setActive(sectionId);
        setIsMobileMenuOpen(false);
        if (sectionId === "Home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const section = document.getElementById(sectionId.toLowerCase());
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleContactClick = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
        setActive("Contact");
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScrollTracking = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // If the user has reached the bottom, set "Contact" as active
            if (scrollPosition + windowHeight >= documentHeight - 10) {
                setActive("Contact");
                return;
            }

            for (let section of sections) {
                const element = document.getElementById(section.toLowerCase());

                if (element) {
                    const elementTop = element.offsetTop;
                    const elementHeight = element.offsetHeight;

                    if (
                        scrollPosition >= elementTop - windowHeight / 3 &&
                        scrollPosition < elementTop + elementHeight - windowHeight / 3
                    ) {
                        setActive(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollTracking);

        return () => {
            window.removeEventListener('scroll', handleScrollTracking);
        };
    }, []);

    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-8 text-white">
            {/* Social Icons */}
            <div className="flex flex-shrink-0 cursor-pointer items-center gap-4 text-3xl">
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

            {/* Desktop Navigation */}
            <div className="hidden md:block fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-5">
                <div className="flex gap-3 p-2 bg-white/20 backdrop-blur-md rounded-lg font-bold">
                    {sections.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleScroll(item)}
                            className={`px-1 py-2 rounded-md transition cursor-pointer ${active === item
                                ? "bg-white/10 text-white shadow-md"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center">
                <motion.button
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleContactClick}
                    className="bg-white text-black border border-black rounded-xl px-5 py-2 text-sm font-medium transition duration-300 cursor-pointer"
                >
                    Contact Me
                </motion.button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <motion.button
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-3xl"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed top-16 right-4 w-48 bg-white/20 backdrop-blur-md z-40 rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col">
                            {sections.map((item) => (
                                <motion.button
                                    key={item}
                                    onClick={() => handleScroll(item)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full px-4 py-2 text-left transition-colors duration-200 ${active === item
                                        ? "bg-white/10"
                                        : "hover:bg-white/5"
                                        }`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={handleContactClick}
                                className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-center transition-colors duration-200"
                            >
                                Contact Me
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;