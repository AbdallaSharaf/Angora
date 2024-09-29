import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/images/hero/hero-1.png";
import image2 from "../../assets/images/hero/hero-2.png";
import image3 from "../../assets/images/hero/hero-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "@fontsource/poppins";

const images = [
    image1, image2, image3
];

const texts = [
    "We Build Great Brands.",
    "Focused on Strategy.",
    "Advanced in Digital Works.",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div id='home' className="relative w-full h-screen">
            <AnimatePresence initial={false}>
                <motion.div
                    key={images[currentIndex]}
                    className="absolute flex flex-col items-center justify-center w-full h-full   overflow-hidden object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={images[currentIndex]} alt="slider image" className="absolute top-0 object-cover w-full h-screen" />
                    <AnimatePresence>
                        <motion.div
                            key={texts[currentIndex]} // Add key here to control the text separately
                            className="text-center w-[280px] md:w-[530px] font-['poppins'] mx-auto md:text-[70px] text-[36px] leading-none font-[800] text-white p-4"
                            initial={{ x: '300%', opacity: 0 }} // Start from the left and invisible
                            animate={{ x: 1, opacity: 1 }} // Move to center and visible
                            exit={{ x: '-300%', opacity: 0 }} // Move out to the right and fade out
                            transition={{ duration: 0.7 }}
                        >
                            {texts[currentIndex]}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
            <div className='absolute left-0  border-r-[0.005em] border-t-[0.005em]  border-b-[0.005em] rounded-r-sm border-white transform -translate-y-1/2 top-1/2'>
            <div className="relative group">
            <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={prevImage}
                className="relative z-10 block text-white p-4 w-4 h-4 group-hover:text-[#f25454]  cursor-pointer transition-all duration-500 ease-in-out"
            />
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></span>
            </div>

            <div className="relative group">
            <FontAwesomeIcon
                icon={faChevronRight}
                onClick={nextImage}
                className="relative z-10 block group-hover:text-[#f25454] border-t-[0.005em] text-white p-4 w-4 h-4 cursor-pointer transition-all duration-500 ease-in-out"
            />
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></span>
            </div>
            </div>
            <Link onClick={() => scrollToSection('about')} to='#about'>
            <div className='hidden md:block mb-10 group hover:border-[#f25454] absolute left-1/2 bottom-0 bg-transparent w-[26px] h-10 border-[0.005em] border-white rounded-full transition-all duration-300 ease-in-out'>
            <motion.div
                className="bg-white w-2 h-2 mx-auto mt-[6px] rounded-full group-hover:bg-[#f25454] "
                initial={{ opacity: 1, y: 0 }} // Start above
                animate={{ opacity: 0, y: '200%' }}  // Slide down and fade out
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.3, ease: "easeInOut" }}
            ></motion.div>
            </div>
            </Link>
        </div>
    );
};

export default Hero;