import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import all images using Vite's import.meta.glob
const allImages = import.meta.glob('../../assets/images/projects/*.{jpg,png}', { eager: true });

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

  const openProjectStyle = () => {
    // Implement this function if needed
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

  return (
    <div id="about" className="py-[100px] bg-gray-100 bg-opacity-50">
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
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        <AnimatePresence>
          {getFilteredImages().map((image, index) => (
            <motion.div
              key={index}
              className="relative group h-auto"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img src={image.url} alt={image.name} className="w-full h-auto object-cover" />
              <Link onClick={openProjectStyle} to="#projectstyle">
                <div className="absolute inset-0 mx-auto my-auto w-[98%] h-[98%] flex flex-col justify-center p-4 items-center bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <h2 className="text-lg font-semibold transform translate-y-[-30%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    {image.name || 'Image Title'}
                  </h2>
                  <p className="text-gray-600 mt-1 text-center transform translate-y-[30%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    {image.category || 'Image Category'}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
