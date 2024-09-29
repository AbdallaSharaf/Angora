import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const images = import.meta.glob("../../assets/images/posts/*.jpg", { eager: true });

const cardData = [
    {author: "Matthew Johns", image: images["../../assets/images/posts/post-1.jpg"].default, title: "Sunset in Venice Between Buildings", date: 'January 16, 2024', type: "Photography"},
    {author: "Richard Jackson", image: images["../../assets/images/posts/post-2.jpg"].default, title: "Aerial View of Village on Mountain Cliff", date: ' December 14, 2023', type: "Lifestyle"},
    {author: "Alex Wesly", image: images["../../assets/images/posts/post-3.jpg"].default, title: "Lighted Concrete City Near on Bridge", date: ' August 23, 2023', type: "Development"},
]

const Posts = () => {
  return (
    <div id="blog" className="py-[100px] bg-gray-100 bg-opacity-20">
    <div className="relative flex flex-col justify-center items-center group">
        <div className="absolute font-['poppins'] -top-[2px] font-[900] text-[4.5rem] leading-10 text-opacity-20 text-gray-400">
            B
        </div>
        <div className="text-[42px] font-bold mb-3">Blog Posts</div>
        <div className="w-10 bg-black h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out" />
        <div className="text-[#999] mt-5 w-[90%] lg:w-[47%] text-center text-[19px] leading-tight">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 mt-[70px] w-[90%] md:w-[75%] gap-[30px] mx-auto'>
        {cardData.map((card, id)=>(
            <div key={id} className='bg-white relative overflow-hidden shadow-sm'>
                <img className='hover:scale-110 hover:opacity-60 rounded-sm w-full mb-2 cursor-pointer transition-all duration-300 ease-in-out' src={card.image}/>
                <div className='absolute top-5 right-0 bg-[#f25454] px-[14px] py-[10px] uppercase text-white rounded-sm text-xs leading-none font-semibold'>{card.type}</div>
                <div className='w-[78%] mx-auto'>
                <div className='text-[13px] text-gray-700 text-opacity-60 font-semibold mt-10'><FontAwesomeIcon className='text-sm mr-1' icon={faClock}/> {card.date}<span className='font-thin'> by </span><span className=' text-black text-opacity-100 hover:text-[#f25454] transition-all duration-300 ease-in-out cursor-pointer'>{card.author}</span></div>
                <h1 className='text-[28px] text-opacity-70 my-6 text-black font-semibold leading-none hover:text-[#f25454] transition-all duration-300 ease-in-out cursor-pointer'>{card.title}</h1>
                <p className='mb-6 text-[15px] text-black text-opacity-60'>Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.</p>
                <p className='text-[#f25454] text-xs font-semibold hover:text-black transition-all duration-300 ease-in-out cursor-pointer mb-10'>Read More</p>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Posts