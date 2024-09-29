import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay, faClose } from '@fortawesome/free-solid-svg-icons'
import image from '../../assets/images/video.jpg'

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div id='services' className='pt-[100px] bg-white'>
        <div className='relative flex flex-col justify-center items-center group'>
            <div className='absolute font-["poppins"] -top-[2px] font-[900] text-[5rem] leading-10 text-opacity-20 text-gray-400'>
                S
            </div>
            <div className='text-[42px] font-bold mb-3'>
                Services
            </div>
            <div className='w-10 bg-black h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out'/>
            <div className='text-[#999] mt-5 w-[90%] lg:w-[47%] text-center text-[18px]'>Nullam ac enim auctor, fringilla risus at, imperdiet turpis. Pellentesque elementum libero enim, eget gravida nunc laoreet et. Pellentesque elementum libero enim.</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-[72px] w-[95%] md:w-[75%]'>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] mb-3 transition-all duration-300 ease-in-out'>Responsive Layout</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Modern Design</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Font Awesome Icons</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Ajax Portfolio</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Color Options</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Audio Support</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Well Documented</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Background Videos</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
            <div className='flex gap-5 group'>
                <FontAwesomeIcon className='mt-[0px] text-4xl text-[#f25454]' icon={faCheck} />
                <div>
                    <h1 className='font-semibold text-xl  group-hover:text-[#f25454] transition-all duration-300 ease-in-out mb-3'>Intro Slider</h1>
                    <p className='text-[15px] text-gray-500 leading-relaxed'>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.</p>
                </div>
            </div>
        </div>
        <div className='bg-top bg-no-repeat bg-cover bg-fixed overflow-hidden relative h-[313px] mt-[100px]' style={{backgroundImage: `url(${image})`}}>
            <div className='bg-black w-full h-full bg-opacity-40 flex flex-col items-center justify-center'>
                <FontAwesomeIcon onClick={() => openModal()} className='w-5 h-5 p-[22px] border-[3px] border-white rounded-full text-white hover:scale-110 hover:bg-white hover:text-[#f25454] transition-all duration-300 ease-in-out cursor-pointer' icon={faPlay}/>
                <h1 className='text-2xl font-bold text-white mt-4'>Watch This Video</h1>
            </div>
            </div>
             {/* Modal for YouTube video */}
             {isModalOpen && (
        <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40">
          <div className="bg-white max-w-[90%] w-[900px] relative">
            <button onClick={closeModal} className="absolute -top-7 -right-3 z-50">
              <FontAwesomeIcon className=' text-white hover:text-gray-300 transition-all duration-300 ease-in-out text-xl w-11' icon={faClose} size="2x" />
            </button>
            <div className="relative h-0 pb-[56.25%]">
              {/* YouTube iframe */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/PGG825Hg490"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services