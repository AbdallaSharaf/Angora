import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
const images = import.meta.glob("../../assets/images/companies/*.png", { eager: true });
const imageArray = Object.values(images);

const BlogSlider = () => {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            }
          ]
    };
  return (
    <Slider {...settings} className="w-[90%] md:w-[80%] lg:w-[75%]  mx-auto my-[90px]">
                {imageArray.map((item, id) => {
                    return (
                        <div key={id} className="text-center cursor-pointer outline-none">
                            <Link to='/'><img
                                src={item.default}
                                alt={item.name}
                                className={`rounded-full mx-auto my-2 opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out`}
                            />
                            </Link>
                        </div>
                        
                    );
                })}
            </Slider>
  )
}

export default BlogSlider