import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

const images = import.meta.glob("../../assets/images/clients/*.png", { eager: true });

const clients = [
    {
        image: images["../../assets/images/clients/client-1.png"].default,
        name: "Martin Jack",
        job: "Hooli",
        quote: "Working with this team has been a transformative experience for my career."
    },
    {
        image: images["../../assets/images/clients/client-2.png"].default,
        name: "David Dowsey",
        job: "Globex",
        quote: "Their professionalism and attention to detail are unmatched in the industry."
    },
    {
        image: images["../../assets/images/clients/client-3.png"].default,
        name: "Doglas Kosta",
        job: "Soylent",
        quote: "I've never felt more supported and encouraged to push my creativity to new heights."
    },
    {
        image: images["../../assets/images/clients/client-4.png"].default,
        name: "Anthony Lee",
        job: "Initech",
        quote: "This team delivers quality results on time, every time. It's a pleasure to collaborate."
    },
    {
        image: images["../../assets/images/clients/client-5.png"].default,
        name: "Jane Doris",
        job: "Acme",
        quote: "Their commitment to innovation and excellence is truly inspiring."
    },
    {
        image: images["../../assets/images/clients/client-6.png"].default,
        name: "Jonathon Doe",
        job: "Umbrella",
        quote: "Their commitment to innovation and excellence is truly inspiring."
    },
    {
        image: images["../../assets/images/clients/client-7.png"].default,
        name: "Shane Catson",
        job: "Massive",
        quote: "Their commitment to innovation and excellence is truly inspiring."
    },
    {
        image: images["../../assets/images/clients/client-8.png"].default,
        name: "Hugh Tace",
        job: "Capital",
        quote: "Their commitment to innovation and excellence is truly inspiring."
    },
    {
        image: images["../../assets/images/clients/client-9.png"].default,
        name: "Chris Wort",
        job: "Sylhost",
        quote: "Their commitment to innovation and excellence is truly inspiring."
    },
];

const Clients = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Start with the middle index for 5 clients
    const sliderRef = useRef(null); // Create a reference to the slider

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        afterChange: (current) => setActiveIndex(current),
        initialSlide: activeIndex,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            }
          ]
    };

    const handleSlideClick = (index) => {
        sliderRef.current.slickGoTo(index); // Navigate to the clicked item
        setActiveIndex(index); // Update active index
        console.log(activeIndex)
    };

    const StatCounter = ({ endValue, label, delay }) => {
        const [start, setStart] = useState(false);
        const { ref, inView } = useInView({
            triggerOnce: false, // Trigger each time in viewport
        });

        // Reset counter when back in view
        if (inView && !start) {
            setStart(true);
        } else if (!inView && start) {
            setStart(false);
        }

        return (
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                ref={ref}
                className='text-center px-4'
            >
                <FontAwesomeIcon icon={faCheck} className='text-[#f25454] text-5xl' />
                <div className='md:border-r-[1px] border-opacity-10 border-white'>
                    <h1 className='font-bold text-white text-5xl my-4'>
                        {start ? <CountUp end={endValue} duration={2} /> : 0}
                    </h1>
                    <p className='text-white'>{label}</p>
                </div>
            </motion.div>
        );
    };

    return (
        <div id="Clients" className="pt-[100px] bg-gray-100 bg-opacity-20">
            <div className="relative flex flex-col justify-center items-center group">
                <div className="absolute font-['poppins'] -top-[2px] font-[900] text-[4.5rem] leading-10 text-opacity-20 text-gray-400">
                    C
                </div>
                <div className="text-[42px] font-bold mb-3">Client Reviews</div>
                <div className="w-10 bg-black h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out" />
                <div className="text-[#999] mt-5 w-[90%] lg:w-[47%] text-center text-[19px] leading-tight">
                    Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum sollicitudin risus, id ultricies arcu neque eget velit.
                </div>
            </div>

            <Slider ref={sliderRef} {...settings} className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[43%] mx-auto mt-16">
                {clients.map((item, id) => {
                    return (
                        <div key={id} className="text-center cursor-pointer outline-none" onClick={() => handleSlideClick(id)}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className={`rounded-full mx-auto my-2 ${activeIndex === id ? 'opacity-100 mx-10' : 'opacity-50 scale-[85%]'}`}
                            />
                            
                                <div className={`${activeIndex === id ? 'opacity-100': 'opacity-0'} transition-all duration-300 ease-in-out`}>
                                    <h3 className="text-black text-lg font-semibold mt-5">{item.name}</h3>
                                    <p className="text-gray-700 text-opacity-80 text-sm">from {item.job}</p>
                                </div>
                        </div>
                    );
                })}
            </Slider>
            <blockquote className="text-gray-800 text-2xl my-6 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[43%] text-center mx-auto ">
                <FontAwesomeIcon className='opacity-60 text-2xl pr-3' icon={faQuoteLeft} />
                {clients[activeIndex].quote}
                <FontAwesomeIcon className='opacity-60 text-2xl pl-3' icon={faQuoteRight} />
            </blockquote>
            <div className='bg-black bg-opacity-90 py-24 mt-28 w-full'>
                <div className='w-[78%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto'>
                    <StatCounter endValue={123} label="Happy Clients" delay={0.25} />
                    <StatCounter endValue={582} label="Completed Projects" delay={0.5} />
                    <StatCounter endValue={170} label="Blog Posts" delay={0.75} />
                    <StatCounter endValue={426} label="Positive Rates" delay={1} />
                </div>
            </div>
        </div>
    );
}

export default Clients;
