import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='py-[100px]'>
        <div className='relative flex flex-col justify-center items-center group'>
            <div className='absolute font-["poppins"] -top-[5px] font-[900] text-[5rem] leading-10 text-opacity-20 text-gray-400'>
                A
            </div>
            <div className='text-[42px] font-bold mb-5'>
                About Us
            </div>
            <div className='w-10 bg-black h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out'/>
            <div className='text-[#999] leading-tight mt-5 w-[90%] lg:w-[50%] text-center text-[19px]'>Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.</div>
        </div>
        <div className='flex flex-col md:flex-row w-[95%] md:w-[80%] lg:w-[75%] mx-auto gap-5 mt-16'>
        <div className='flex flex-col gap-5 w-full md:w-3/5 text-[#666]'>
            <p>Pellentesque vel elit egestas, pretium est ac, convallis orci. Vivamus sem nisl, tristique vel fringilla vitae, efficitur at eros. Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis gravida pulvinar. Phasellus vel eros porta, blandit dui ac, viverra felis.</p>
            <p>Nunc placerat iaculis pulvinar. Nullam auctor mauris sed urna posuere volutpat. Mauris ut dui sit amet elit fermentum fermentum. Fusce tincidunt diam at bibendum porta.</p>
            <p>Aliquam nunc felis, sagittis eu purus non, interdum vehicula urna. Vivamus congue diam sapien, eu pellentesque ipsum ultricies quis.</p>
        </div>
        <div className='md:w-2/5 w-full flex flex-col gap-3'>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>HTML</p>
                    <p>100%</p>
                </div>
                <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-[#f25454] rounded-full h-[5px] w-full my-2'></div>
                </motion.div>
            </div>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>CSS</p>
                    <p>90%</p>
                </div>
                    <div className='w-full bg-gray-200 rounded-full'>
                    <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-[#f25454] rounded-full h-[5px] w-[90%] my-2'></div>
                    </motion.div>
                    </div>

            </div>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>JAVASCRIPT</p>
                    <p>75%</p>
                </div>
                <div className='w-full bg-gray-200 rounded-full'>
                <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-[#f25454] rounded-full h-[5px] w-[75%] my-2'></div>
                    </motion.div>
                    </div>

            </div>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>PHOTOSHOP</p>
                    <p>55%</p>
                </div>
                <div className='w-full bg-gray-200 rounded-full'>
                <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-[#f25454] rounded-full h-[5px] w-[55%] my-2'></div>
                    </motion.div>
                    </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default About