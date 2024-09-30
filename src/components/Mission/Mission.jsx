import React from 'react'
import image from '../../assets/images/mission.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCake, faCheck } from '@fortawesome/free-solid-svg-icons'

const Mission = () => {
  return (
    <div className='bg-top bg-no-repeat bg-cover bg-fixed overflow-hidden relative py-[110px]' style={{backgroundImage: `url(${image})`}}>
        <div className='mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center mx-auto justify-between w-[90%] md:w-[70%] lg:w-[78%]'>
                <div className='group text-white text-center'>
                    <FontAwesomeIcon className='text-6xl mb-5 group-hover:text-[#f25454] transition-all duration-300 ease-in-out' icon={faCake}/>
                    <h1 className='group-hover:text-[#f25454] font-semibold transition-all duration-300 ease-in-out'>User Experience</h1>
                </div>
                <div className='group text-white text-center'>
                    <FontAwesomeIcon className='text-6xl mb-5 group-hover:text-[#f25454] transition-all duration-300 ease-in-out' icon={faCake}/>
                    <h1 className='group-hover:text-[#f25454] font-semibold transition-all duration-300 ease-in-out'>Product Design
                    </h1>
                </div>
                <div className='group text-white text-center'>
                    <FontAwesomeIcon className='text-6xl mb-5 group-hover:text-[#f25454] transition-all duration-300 ease-in-out' icon={faCake}/>
                    <h1 className='group-hover:text-[#f25454] font-semibold transition-all duration-300 ease-in-out'>Digital Marketing</h1>
                </div>
                <div className='group text-white text-center'>
                    <FontAwesomeIcon className='text-6xl mb-5 group-hover:text-[#f25454] transition-all duration-300 ease-in-out' icon={faCake}/>
                    <h1 className='group-hover:text-[#f25454] font-semibold transition-all duration-300 ease-in-out'>Retina Ready</h1>
                </div>
                <div className='group text-white text-center'>
                    <FontAwesomeIcon className='text-6xl mb-5 group-hover:text-[#f25454] transition-all duration-300 ease-in-out' icon={faCake}/>
                    <h1 className='group-hover:text-[#f25454] font-semibold transition-all duration-300 ease-in-out'>Timer Saver</h1>
                </div>
                <div className='group text-white text-center'>
                    <FontAwesomeIcon className='text-6xl mb-5 group-hover:text-[#f25454] transition-all duration-300 ease-in-out' icon={faCake}/>
                    <h1 className='group-hover:text-[#f25454] font-semibold transition-all duration-300 ease-in-out'>Customizable</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 items-center gap-y-8 mx-auto justify-between w-[90%] md:w-[85%] lg:w-[76%] '>
                <div className='lg:col-span-2 text-white'>
                    <h1 className='text-4xl font-bold mb-4'>Our Mission</h1>
                    <p className='w-full lg:w-[70%] tracking-tight'>Vivamus sem nisl, tristique vel fringilla vitae, efficitur at eros. Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis gravida pulvinar. Phasellus vel eros porta, viverra felis. Nullam auctor sed posuere volutpat. Nunc placerat iaculis pulvinar.</p>
                </div>
                <div className='text-white flex flex-col gap-2'>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Logo & Branding</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> UX/UI-design</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Customer Support</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Brand Planning</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Research</p>
                </div>
                <div className='text-white flex flex-col gap-2'>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Social Media Design</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Opportunity Analysis</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Motion Graphics</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Style Guides</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faCheck}/> Consulting</p>
                </div>
            </div>
    </div>
  )
}

export default Mission