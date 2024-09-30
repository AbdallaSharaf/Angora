import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { motion, AnimatePresence } from "framer-motion";
import './Project.css'
import iconImage from '../../assets/images/download-icon-double+arrow+doublechevronleftright+left+right+arrow+icon-1320185729067056308_24.png'; // Import the image

// Import all images using Vite's import.meta.glob
const allImages = import.meta.glob('../../assets/images/projects/*.{jpg,png}', { eager: true });

const delimiterIconStyles = {
  width: '30px',
  height: '30px',
  backgroundSize: 'cover',
  borderRadius: 'none',
  backgroundImage: `url(${iconImage})`,
  animation: 'pulse 2s infinite',
};

const images = {
    Web: [],
    Branding: [],
    Photography: [],
};

// Categorize the images based on their folder names
Object.keys(allImages).forEach((path) => {
    const imageUrl = allImages[path].default;
    const imageName = path.split('/').pop().split('.')[0];
    
    if (path.includes('web')) {
        images.Web.push({ url: imageUrl, name: imageName.split('-').join(' ').replace('web', '').trim(), category: 'Web Design' });
    } else if (path.includes('branding')) {
        images.Branding.push({ url: imageUrl, name: imageName.split('-').join(' ').replace('branding', '').trim(), category: 'Branding' });
    } else if (path.includes('photography')) {
        images.Photography.push({ url: imageUrl, name: imageName.split('-').join(' ').replace('photography', '').trim(), category: 'Photography' });
    }
});

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Branding', 'Web', 'Photography'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Get filtered images based on the selected category
  const getFilteredImages = () => {
    if (selectedCategory === 'All') {
      return Object.values(images).flat();
    }
    return images[selectedCategory];
  };

  // Animation variants for motion effects
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },  // Slide in from right
    visible: { opacity: 1, scale: 1, x: 0 },    // Full visibility, normal size, no horizontal offset
    exit: { opacity: 0, scale: 0.8, x: -50 }    // Slide out to left
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="projects" className="pt-[100px] -scroll-m-14 md:scroll-m-0 bg-gray-100 bg-opacity-50">
      {/* Heading Section */}
      <div className="relative flex flex-col justify-center items-center group">
        <div className="absolute font-['poppins'] -top-[5px] font-[900] text-[5rem] leading-10 text-opacity-20 text-gray-400">
          R
        </div>
        <div className="text-[38px] font-bold mb-5">
          Recent Projects
        </div>
        <div className="w-10 bg-black h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out"></div>
        <div className="text-[#999] mt-5 w-[90%] lg:w-[45%] text-center text-[18px]">
          Phasellus metus arcu, aliquam vitae pulvinar eget, placerat pellentesque risus. Fusce urna nisi, euismod non semper in. Sagittis fermentum non urna.
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mt-20 gap-1 text-gray-700">
        {categories.map((category) => (
          <button
            key={category}
            className={`font-semibold hover:text-[#f25454] rounded-full border border-[#f25454] border-opacity-0 text-sm transition-all px-5 py-1 duration-300 ease-in-out ${selectedCategory === category ? 'text-[#f25454] border-opacity-100' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category === 'Web' ? 'Web Design' : category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        <AnimatePresence>
          {getFilteredImages().map((image, index, array) => (
            <motion.div
              key={index}
              className="relative group h-auto"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {index + 1 < array.length ? (
                <ReactBeforeSliderComponent
                  firstImage={{ imageUrl: image.url, alt: image.name }}
                  secondImage={{ imageUrl: array[index + 1].url, alt: array[index + 1].name }}
                  delimiterIconStyles={delimiterIconStyles} // Hide default icon
                />
            ) : (
              <img src={image.url} alt={image.name} className="w-full h-auto object-cover" />
            )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="py-10 flex flex-col md:flex-row justify-between items-center w-[90%] md:w-[80%] lg:w-[59%] mx-auto">
        <h1 className="text-4xl ">Do you have any ideas?</h1>
        <Link onClick={()=>scrollToContact()} to='#contact'><button className="font-bold text-white bg-[#f25454] py-4 px-8 text-sm hover:opacity-80 transition-all duration-300 ease-in-out">Contact Us</button></Link>
      </div>
    </div>
  );
};

export default Projects;
