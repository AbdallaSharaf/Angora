import React from 'react'
import image from '../../assets/images/icon.png'
import bgImage from '../../assets/images/dotted-map.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faPinterest, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <>
    <div className=' bg-[#222] py-[60px] bg-contain relative clear-both' style={{backgroundImage: `url(${bgImage})`}}>
        <img className='mx-auto mb-11' src={image}/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-[95%] md:w-[75%] lg:w-[80%] xl:w-[75%] mx-auto'>
            <div>
                <h1 className='text-white text-[21px] mb-4 font-bold'>Contact Info</h1>
                <p className='text-[#b0b0b0] pb-3'>1650 Lombard Street,<br />San Francisco, CA 94123</p>
                <p className='text-[#b0b0b0]'>+1 (415) 876-3250</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>email@sitename.com</p>
            </div>
            <div>
                <h1 className='text-white text-[21px] mb-4 font-bold'>Useful Links</h1>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Support</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Privacy Policy</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Terms & Conditions</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Affiliate Program</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Careers</p>
            </div>
            <div>
                <h1 className='text-white text-[21px] mb-4 font-bold'>Recent Posts</h1>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Sunset in Venice</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Aerial View of Village</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Lighted Concrete City</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>The Little Ghost</p>
                <p className='hover:text-[#f25454] text-[#b0b0b0] cursor-pointer transition-all duration-300 ease-in-out'>Royal Oats ft. Waldo</p>
            </div>
            <div>
                <h1 className='text-white text-[21px] mb-4 font-bold'>Popular Tags</h1>
                <div className='flex flex-wrap gap-2'>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>HTML5</p>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>CSS3</p>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>jQuery</p>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>UX / UI</p>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>Web</p>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>Graphic</p>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>Design</p>
                <p className='px-[11px] py-2 leading-none hover:text-[#f25454] hover:border-[#f25454] w-fit text-[13px] text-[#b0b0b0] border border-[#b0b0b0] rounded-sm cursor-pointer transition-all duration-300 ease-in-out'>Development</p>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-[#1a1a1a] w-full py-[26px]'>
    <div className='w-[75%] flex flex-col md:flex-row items-center justify-between mx-auto gap-y-4'>
        <div className='flex justify-center gap-3'>
           <FontAwesomeIcon icon={faTwitter} className='text-white px-2 hover:text-[#f25454] transition-all duration-300 ease-in-out'/>
           <FontAwesomeIcon icon={faFacebookF} className='text-white px-2 hover:text-[#f25454] transition-all duration-300 ease-in-out'/>
           <FontAwesomeIcon icon={faInstagram} className='text-white px-2 hover:text-[#f25454] transition-all duration-300 ease-in-out'/>
           <FontAwesomeIcon icon={faDribbble} className='text-white px-2 hover:text-[#f25454] transition-all duration-300 ease-in-out'/>
           <FontAwesomeIcon icon={faPinterest} className='text-white px-2 hover:text-[#f25454] transition-all duration-300 ease-in-out'/>
        </div>
        <p className='text-[#b0b0b0] font-semibold text-sm leading-none tracking-widest'>
             Copyright <FontAwesomeIcon className='text-[10px]' icon={faCopyright} /> 2024 <span className='font-bold text-base leading-normal text-white cursor-pointer tracking-normal hover:text-[#f25454] transition-all duration-300 ease-in-out'>Angora</span>
        </p>
        </div>
    </div>
    </>
  )
}

export default Footer