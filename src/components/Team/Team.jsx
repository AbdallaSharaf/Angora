import React from 'react'
import teamImage1 from '../../assets/images/team/member-1.jpg'
import teamImage2 from '../../assets/images/team/member-2.jpg'
import teamImage3 from '../../assets/images/team/member-3.jpg'
import teamImage4 from '../../assets/images/team/member-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';

const teamData = [
    {name:'Michael Broad', job:'Web Designer', img:teamImage1},
    {name:'Jeannette Crow', job:'CEO Founder', img:teamImage2},
    {name:'Martin Lawrence', job:'App Developer', img:teamImage3},
    {name:'Isabella Dowson', job:'Creative Director', img:teamImage4},
]

const Team = () => {
  return (
    <div id='team' className='py-[100px] -scroll-m-14 md:scroll-m-0'>
        <div className='relative flex flex-col justify-center items-center group'>
            <div className='absolute font-["poppins"] -top-[5px] font-[900] text-[5rem] leading-10 text-opacity-20 text-gray-400'>
                O
            </div>
            <div className='text-[42px] font-bold mb-5'>
                Our Team
            </div>
            <div className='w-10 bg-black h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out'/>
            <div className='text-[#999] leading-tight mt-5 w-[90%] lg:w-[50%] text-center text-[19px]'>Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto mt-16 w-[100%] md:w-[75%]'>
        {teamData.map((item)=>
        <div key={item.name} className='flex flex-col items-center justify-center group overflow-hidden'>
            <div className='w-full h-full overflow-hidden relative'>
            <img className='transition-transform duration-500 group-hover:scale-110 mx-auto' src={item.img} alt={item.name}/>
            <div className='bg-[#f25454] absolute top-0 w-full h-full opacity-0 bg-opacity-80 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 ease-in-out'>
                <div className='flex space-x-4'>
                <FontAwesomeIcon icon={faTwitter} className='text-white p-2 mx-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'/>
                <FontAwesomeIcon icon={faFacebookF} className='text-white p-2 mx-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-in-out'/>
                <FontAwesomeIcon icon={faDribbble} className='text-white p-2 mx-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out'/>
                <FontAwesomeIcon icon={faInstagram} className='text-white p-2 mx-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-in-out'/>
                </div>
            </div>
            </div>

            <h2 className='text-gray-800 mt-4 font-semibold text-[18px] leading-tight'>{item.name}</h2>
            <p className='text-gray-800 font-thin'>{item.job}</p>
        </div>
        )}
        </div>
    </div>
  )
}

export default Team
